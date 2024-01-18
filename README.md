# movies-explorer-api

# Проект: Навигатор фильмов (backend)

Дипломный проект выполненный в рамках курса "Веб-разработчик" от Яндекс Практикум.
Проект представляет из себя бэкенд часть для проекта [Навигатор фильмов](https://movie.julias.nomoredomainsrocks.ru/) также выполненного в рамках указанного выше учебного курса.

## Обзор проекта

### Задачи проекта

Проект был призван закрепить навыки backend-разработки, и способы развёртывания приложения на Node.js и Express, а также работе с БД MongoDB и ODM mongoose.

### Функциональность проекта

- В проекте созданы схемы и модели пользователей и карточек с контентом:
  - `movie` — схема карточки с контентом
  - `user` — схема пользователя
- В проекте созданы эндпоинты:
  - `/movies` — обрабатывает:
    - GET запросы — отдаёт все карточки из БД
    - POST запросы — создаёт новую карточку с контентом
  - `/movies/:cardId` — обрабатывает DELETE запросы, удаляет карточку по `cardId`
  - `/signin` — обрабатывает POST запросы, производит аутентификацию пользователя
  - `/signup` — обрабатывает POST запросы, производит регистрацию пользователя
  - `/signout` — обрабатывает POST запросы, производит выход пользователя
  - `/users/me` — обрабатывает:
    - GET запросы — отдаёт всех информацию о пользователе
    - PATCH запросы — обновляет информацию о пользователе
- Созданы мидлвары:
  - Авторизации пользователя
  - Валидации поступающих в запросе данных
  - Работе с CORS
  - Централизованной обработки ошибок
  - Ограничитель количества запросов (защита от DDoS атак)
  - Логирования
- Производится валидация поступающих данных:
  - до передачи информации контроллерам с помощью celebrate
  - на уровне схем с помощью validator и встроенных методов mongoose

### Директории проекта

- `/controllers` — директория с файлами контроллеров
- `/errors` — директория с файлами кастомных ошибок
- `/middlewares` — директория с мидлварами
- `/models` — директория с файлами описания схем и моделей
- `/routes` — директория с файлами роутера
- `/utils` — директория со вспомогательными файлами

### Запуск проекта

- `npm lint` — запускает проверку линтером
- `npm run start` — запускает приложение в режиме продакшн
- `npm run dev` — запускает приложение в режиме разработки с hot-reload

### Ссылки

- [Ссылка на API сервер проекта](https://api.movie.julias.nomoredomainsrocks.ru/##)

## Ход выполнения проекта

### Используемые технологии

- [Node.js](https://nodejs.org/ru)
- [nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [MongoDB](https://www.mongodb.com/)
- [mongoose](https://mongoosejs.com/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [celebrate](https://www.npmjs.com/package/celebrate)
- [validator](https://www.npmjs.com/package/validator)
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
- [helmet](https://helmetjs.github.io/)
- [winston](https://www.npmjs.com/package/winston)
- [express-winston](https://www.npmjs.com/package/express-winston)
- [ESLint](https://eslint.org/)

### Чему я научилась, работая над проектом

- Разворачивать приложение на Node.js
- Использовать в работе фреймворк Express
- Работать с БД MongoDB
- Использовать в работе с БД ODM mongoose
- Создавать схемы и модели для работы с БД
- Обрабатывать различные виды запросов
- Обрабатывать ошибки некорректных запросов
- Валидировать приходящую в запросе информацию
- Работать с JWT токеном
- Работать с cookies
- Базовой защите приложения
- Логированию
- Работе с CORS
- Деплою проекта на реальный хостинг

## Автор

**Симакина Юлия**

- e-mail: [simakina.js@yandex.ru](mailto:simakina.js@yandex.ru)
- Telegram: [@julili23](https://t.me/julili23)
