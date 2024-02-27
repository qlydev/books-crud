# Books CRUD

CRUD приложение для управления книгами.

## Установка

1. Склонируйте репозиторий:

    ```bash
    git clone https://github.com/qlydev/books-crud.git
    cd books-crud
    ```

2. Установите зависимости:

    ```bash
    pnpm install
    ```

3. Запустите контейнер с базой данных:

    ```bash
    docker-compose up -d
    ```

4. Сгенерируйте файлы Prisma:

    ```bash
    pnpm run prisma:generate
    ```

5. Примените миграции к базе данных:

    ```bash
    pnpm run prisma:update
    ```
6. Заполните базу данных начальными данными:

    ```bash
    pnpm run prisma:seed
    ```

## Запуск

Запустите приложение:

```bash
pnpm start
