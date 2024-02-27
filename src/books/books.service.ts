import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '~/prisma/prisma.service';
import { CreateBookDto } from '~/books/dto/create-book.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class BooksService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getGenres() {
    const data = await this.prismaService.genres.findMany();
    return data.map((e) => e.name); // Возвращаем только названия жанров чтобы фронт мог предложить их пользователю
  }

  public async find(search: string, select?: Prisma.BooksSelect) {
    // Используем оператор OR для поиска по двум полям и contains для поиска по части строки
    return this.prismaService.books.findMany({
      where: {
        OR: [
          {
            name: {
              contains: search,
            },
          },
          {
            author: {
              contains: search,
            },
          },
        ],
      },
      select,
    });
  }

  public async create({ genre, name, author }: CreateBookDto) {
    const bookExists = await this.prismaService.books.findFirst({
      where: {
        name,
        author,
      },
    });
    // Проверяем существует ли книга

    if (bookExists) {
      throw new HttpException('Book already exists', HttpStatus.CONFLICT);
    }

    return this.prismaService.books.create({
      data: {
        name,
        author,
        Genres: {
          // Используем связь между таблицами чтобы добавить жанр книге
          connectOrCreate: {
            // Используем connectOrCreate чтобы не создавать дубликаты жанров
            where: {
              name: genre,
            },
            create: {
              name: genre,
            },
          },
        },
      },
    });
  }

  public async getBooksByGenre(genre: string) {
    return this.prismaService.books.findMany({
      // Используем связь между таблицами чтобы найти книги по жанру
      where: {
        Genres: {
          name: genre,
        },
      },
    });
  }

  public async getAllBooks() {
    return this.prismaService.books.findMany({
      select: {
        // Выбираем только нужные поля
        name: true,
        author: true,
      },
    });
  }

  public async deleteBook(id: number) {
    // Удаляем книгу по id
    return this.prismaService.books.delete({
      where: {
        id,
      },
    });
  }

}
