// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appID: 'weather-app',
  opeanWeatherAPIKey: '7d279d3c4411357e88afbab0f5dfeb6e',
  config: {
    apiKey: "AIzaSyD60DEflbDbkQt5scc8bk-MctiA10x81ys",
    authDomain: "weather-f4b99.firebaseapp.com",
    databaseURL: "https://weather-f4b99.firebaseio.com",
    projectId: "weather-f4b99",
    storageBucket: "weather-f4b99.appspot.com",
    messagingSenderId: "803876472997",
    appId: "1:803876472997:web:169ef3d450aeff6e68654c",
    measurementId: "G-B9CF637RCC"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.