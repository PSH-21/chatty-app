### General

Chat-room style application that tracks user messages and behaviors(ie. changing name) through web-sockets. Displays the current number of users and renders the message thread between users in the chat room in real-time.


!['Screenshot of exchanging messages'](https://github.com/PSH-21/chatty-app/blob/master/docs/users-changing-names.png)
!['Screenshot of exchanging messages'](https://github.com/PSH-21/chatty-app/blob/master/docs/exchanging-messages.png)


Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* wss

### Server Dependencies
* React
* Express
* Uuid
