// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlApiDxE:"http://192.168.0.150:3300/docentes/?correo=",
  urlApiD:"http://192.168.0.150:3300/docentes",
  urlApiA:"http://192.168.0.150:3300/asignaturas",
  urlApiF:"http://192.168.0.150:3300/fechasEvaluaciones",
  urlApiQRG:"http://192.168.0.150:3300/clases"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
