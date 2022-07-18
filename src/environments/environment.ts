// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMomxE8GR4HSUwiQdwdOEudkT7UOeWEsM",
  authDomain: "heroe-93825.firebaseapp.com",
  projectId: "heroe-93825",
  storageBucket: "heroe-93825.appspot.com",
  messagingSenderId: "1065290400751",
  appId: "1:1065290400751:web:12f7703d75fff8fe812c1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);