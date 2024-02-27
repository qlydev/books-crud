import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const rows = [
    "INSERT INTO public.genres (id, name, \"createdAt\", \"updatedAt\") VALUES (1, 'Science Fiction', '2024-02-27 15:01:02.000', '2024-02-27 15:01:01.000');",
    "INSERT INTO public.genres (id, name, \"createdAt\", \"updatedAt\") VALUES (2, 'Mystery', '2024-02-27 15:01:07.000', '2024-02-27 15:01:08.000');",
    "INSERT INTO public.genres (id, name, \"createdAt\", \"updatedAt\") VALUES (3, 'Romance', '2024-02-27 13:02:31.841', '2024-02-27 15:02:30.000');",
    "INSERT INTO public.genres (id, name, \"createdAt\", \"updatedAt\") VALUES (4, 'Thriller', '2024-02-27 13:02:31.841', '2024-02-27 15:02:30.000');",
    "INSERT INTO public.genres (id, name, \"createdAt\", \"updatedAt\") VALUES (7, 'Poetry', '2024-02-27 13:02:31.841', '2024-02-27 15:02:29.000');",
    "INSERT INTO public.genres (id, name, \"createdAt\", \"updatedAt\") VALUES (8, 'Historical Fiction', '2024-02-27 13:02:31.841', '2024-02-27 15:02:28.000');",
    "INSERT INTO public.genres (id, name, \"createdAt\", \"updatedAt\") VALUES (9, 'Biography', '2024-02-27 15:02:27.000', '2024-02-27 15:02:28.000');",
    "INSERT INTO public.genres (id, name, \"createdAt\", \"updatedAt\") VALUES (10, 'Horror', '2024-02-27 15:02:27.000', '2024-02-27 15:02:26.000');",
    "INSERT INTO public.genres (id, name, \"createdAt\", \"updatedAt\") VALUES (6, 'Non-Fiction', '2024-02-27 13:02:31.841', '2024-02-27 15:02:29.000');",
    "INSERT INTO public.genres (id, name, \"createdAt\", \"updatedAt\") VALUES (5, 'Fantasy', '2024-02-27 13:02:31.841', '2024-02-27 15:02:30.000');",
    "INSERT INTO public.genres (id, name, \"createdAt\", \"updatedAt\") VALUES (12, 'Thriller213123', '2024-02-27 14:20:14.790', '2024-02-27 14:20:14.790');",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (1, 'Dune', 'Frank Herbert', '2024-02-27 15:03:30.000', '2024-02-27 15:03:31.000', 1)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (3, 'The Da Vinci Code', 'Dan Brown', '2024-02-27 15:04:21.000', '2024-02-27 15:04:22.000', 2)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (4, 'Gone Girl', 'Gillian Flynn', '2024-02-27 15:04:32.000', '2024-02-27 15:04:33.000', 2)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (5, 'Pride and Prejudice', 'Jane Austen', '2024-02-27 15:04:46.000', '2024-02-27 15:04:46.000', 3)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (6, 'Outlander', 'Diana Gabaldon', '2024-02-27 15:05:00.000', '2024-02-27 15:05:01.000', 3)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (7, 'The Girl with the Dragon Tattoo', 'Stieg Larsson', '2024-02-27 15:05:40.000', '2024-02-27 15:05:41.000', 4)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (8, 'The Silent Patient', 'Alex Michaelides', '2024-02-27 15:05:55.000', '2024-02-27 15:05:56.000', 4)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (9, 'The Hobbit', 'J.R.R. Tolkien', '2024-02-27 15:06:11.000', '2024-02-27 15:06:12.000', 5)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (10, 'Harry Potter and the Sorcerer''s Stone', 'J.K. Rowling', '2024-02-27 15:06:27.000', '2024-02-27 15:06:27.000', 5)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (11, 'Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', '2024-02-27 15:06:44.000', '2024-02-27 15:06:45.000', 6)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (12, 'Educated', 'Tara Westover', '2024-02-27 15:06:57.000', '2024-02-27 15:06:57.000', 6)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (13, 'Leaves of Grass', 'Walt Whitman', '2024-02-27 15:07:10.000', '2024-02-27 15:07:10.000', 7)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (14, 'Milk and Honey', 'Rupi Kaur', '2024-02-27 13:07:29.884', '2024-02-27 15:07:28.000', 7)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (15, 'The Book Thief', 'Markus Zusak', '2024-02-27 13:08:03.249', '2024-02-27 15:08:01.000', 8)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (16, 'All the Light We Cannot See', 'Anthony Doerr', '2024-02-27 13:08:23.855', '2024-02-27 15:08:20.000', 8)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (17, 'Steve Jobs', 'Walter Isaacson', '2024-02-27 13:08:50.153', '2024-02-27 15:08:35.000', 9)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (18, 'The Diary of a Young Girl', 'Anne Frank', '2024-02-27 13:08:50.153', '2024-02-27 15:08:48.000', 9)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (19, 'Dracula', 'Bram Stoker', '2024-02-27 13:09:25.582', '2024-02-27 15:08:58.000', 10)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (20, 'The Shining', 'Stephen King', '2024-02-27 13:09:25.582', '2024-02-27 15:09:20.000', 10)",
    "INSERT INTO public.book_data (id, name, author, \"createdAt\", \"updatedAt\", genre_id) VALUES (21, 'The Maidens', 'Alex Michaelides', '2024-02-27 15:11:41.000', '2024-02-27 15:11:42.000', 4)",
  ];

  for (const row of rows) {
    await prisma.$queryRawUnsafe(row);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
