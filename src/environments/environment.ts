// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDcCGZLFCap7O4uYIPJ4dzT0AO4kBG3A0Q',
    authDomain: 'jana-jurakova-makup-artist.firebaseapp.com',
    databaseURL: 'https://jana-jurakova-makup-artist.firebaseio.com',
    projectId: 'jana-jurakova-makup-artist',
    storageBucket: 'jana-jurakova-makup-artist.appspot.com',
    messagingSenderId: '48435006149'
  }
};
