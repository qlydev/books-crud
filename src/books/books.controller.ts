import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from '~/books/dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async find(@Query('search') search: string) {
    // Возвращаем книги по поиску
    return this.booksService.find(search);
  }

  @Post()
  async create(@Body() body: CreateBookDto) {
    // Создаем книгу и возвращаем ее данные которой передаются в body
    return this.booksService.create(body);
  }

  @Get('genres')
  async getGenres() {
    // Возвращаем список жанров
    return this.booksService.getGenres();
  }

  @Get('get-all-books')
  async getAllBooks(
    @Query('book') book?: string,
    @Query('genre') genre?: string,
  ) {
    // Если передан параметр genre, возвращаем книги по жанру
    if (genre) {
      return this.booksService.getBooksByGenre(genre);
    }
    // Если передан параметр book, возвращаем книги по поиску
    if (book) {
      return this.booksService.find(book);
    }
    // Если ни один параметр не передан, возвращаем все книги
    return this.booksService.getAllBooks();
  }
  @Delete()
  async deleteBook(@Query('id') id: string) {
    return this.booksService.deleteBook(Number(id));
  }

  @Get('test')
  async test() {
    return this.booksService.test();
  }
}
