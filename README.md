# WeatherApp
Install and run  
`npm i`  
`npx ng serve -o`

If port is already taken run  
`lsof -t -i tcp:4200 | xargs kill -9`

# Firebase settings
## Create new project in Firebase
Get config values for app from `Project Settings > General > Config`  

It should look like this  
```
const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "weather-xxxxx.firebaseapp.com",
  databaseURL: "https://weather-xxxxx.firebaseio.com",
  projectId: "weather-xxxxx",
  storageBucket: "weather-xxxxx.appspot.com",
  messagingSenderId: "xxxxxxxxxxxx",
  appId: "1:xxxxxx:web:xxxxxxxxxxxx",
  measurementId: "xxxxxxxxxxxx"
};
```
## Firebase auth
Allow desired sign in methods. Thats all you need to configure.

## Firestore
Firestore database rules allow to read and write only to logged in userand only for collections where collection name matches `uid`  
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{collectionID}/{documentID} {
      allow read, write: if collectionID == request.auth.uid;
    }
  }
}
```


# Info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
