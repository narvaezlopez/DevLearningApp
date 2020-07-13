// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { key } from '../../private/key';
export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBp5BaKNTwZvZOSPfCeFfNJrKVY3cQfznA",
    authDomain: "devlearning-2c9c9.firebaseapp.com",
    databaseURL: "https://devlearning-2c9c9.firebaseio.com",
    projectId: "devlearning-2c9c9",
    storageBucket: "devlearning-2c9c9.appspot.com",
    messagingSenderId: "691460833347",
    appId: "1:691460833347:web:f2d0e94a5f9836386014f6",
    measurementId: "G-2FGRM6FEF2"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
