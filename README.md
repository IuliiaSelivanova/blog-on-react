# Blog React App (pet-project)

С использованием библиотеки React создано SPA десктопное приложение-блог с возможностью авторизации и аутентификации. 
Поскольку серверная часть приложения отсутствует,  для тестирования использовались сервисы REST API с фиктивными данными [Dummyjson](https://dummyjson.com/)
В связи с этим, некоторые функции приложения ограничены - просмотр нового поста в списке, созданного пользователем; смена аватарки пользователя.
Тестовые данные для аутентификации (LOGIN_SUCCESS) находятся по ссылке [Dummyjson](https://dummyjson.com/users) - username, password.

## Возможности приложения
<ol>
  <li>Регистрация пользователя</li>
  <li>Аутентификация пользователя при помощи логина и пароля</li>
  <li>Доступ в личный кабинет пользователя</li>
  <li>Получение и вывод постов всех пользователей</li>
  <li>Создание нового поста</li>
  <li>Редактирование и удаление существующего поста пользователя</li>
  <li>Редактирование личных данных (логин, mail, пароль) пользователя</li>
  <li>Удаление профиля пользователя</li>
</ol>

### ScreenShots
![HomePage](https://github.com/user-attachments/assets/8cf051c6-8a9a-4c8b-a672-66c6ad81c560)
![CreatePost](https://github.com/user-attachments/assets/72c2686c-c4c9-4037-9ab1-721e15ee9ee9)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
