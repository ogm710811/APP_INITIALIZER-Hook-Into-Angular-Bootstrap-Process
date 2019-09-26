# How to Use the APP_INITIALIZER Token to Hook Into the Angular Bootstrap Process

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Description

The APP_INITIALIZER token is used when you want to get the application's configuration details from an API and keep it ready before the application renders the page. For example, you would want to load the necessary language files before rendering any of the templates or you would want to resolve a remote API which provides information on the environment that the application is being run on. It's similar to how the resolve attribute in the router's configuration is used to get data from the remote API and feed it into the route's data source. In this case, the remote API is resolved first and then the application continues with the bootstrap process.

Here's an example of how the APP_INITIALIZER token is included in the application.
