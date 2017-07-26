# RaffleApp

Este proyecto fue generado utilizando  [Angular CLI](https://github.com/angular/angular-cli) version 1.2.3.

## Componentes

Utilizando Angular podemos realizar aplicaciones web con el enfoque a componentes.
RaffleApp Web es una aplicacion sencilla la cual se divide de la siguiente manera.

- **App [Component Raiz]**
  - Este componente es el componente principal de la aplicacion, la funcion de este va a hacer el esquema de toda la aplicacion web.

  - **Jumbotron [Componente]**
  - Componente encargado de mostrar el tiulo y la invitacion a participar en el sorteo. 

- **Awards [Componente]**
  - Este componente es el encargado de mostrar los premios a sortear y mediante la accion del boton sortear el cual mostrar un ganador. 

- **Customer [Componente]**
  - Este componente es el encargado de agregar o eliminar clientes de la base de datos.
    Por medio de este nos conectamos a la API Restful construida para la aplicacion (https://github.com/SebasG22/RobusRaffleApp).

## Arrancar Servidor Web

1.  Instalar las dependencias `npm install` localmente
2.  Ejecutar `ng serve` para iniciar el servidor de desarollo. En el navegador ir a  `http://localhost:4200/`. La aplicacion va a cambiar automaticamente cada vez que detecte un cambio en los archivos.
3. Si angularCLI no es capaz de inciar el servidor. Debido a ciertas restricciones, usar
`npm start`

**Captura de Pantalla**

![Raffle Web App - Inicio](https://firebasestorage.googleapis.com/v0/b/splot3-31f45.appspot.com/o/imagesRaffle%2FInicio.PNG?alt=media&token=343710c5-85fa-4e04-9aa5-abc03178783b)

![Raffle Web App - Panel de Clientes](https://firebasestorage.googleapis.com/v0/b/splot3-31f45.appspot.com/o/imagesRaffle%2Fpanel%20Clientes.PNG?alt=media&token=4b3f270d-6a61-46eb-b75f-febdd1f5fa86)

![Raffle Web App - Eliminar Cliente](https://firebasestorage.googleapis.com/v0/b/splot3-31f45.appspot.com/o/imagesRaffle%2Fdelete%20users.PNG?alt=media&token=a4d0955f-29cb-4393-a845-948317f46aa0)

![Raffle Web App - Premios](https://firebasestorage.googleapis.com/v0/b/splot3-31f45.appspot.com/o/imagesRaffle%2FsorteoPremios.PNG?alt=media&token=b55049b2-2763-4424-96a7-8137cef0475a)

![Raffle Web App - Sorteo](https://firebasestorage.googleapis.com/v0/b/splot3-31f45.appspot.com/o/imagesRaffle%2Fraffle.PNG?alt=media&token=60c0a325-84d9-4eb8-9d2b-dad9d8cfa3a5)

**Recursos**

- **Tecnologias**
  - [ Node Js - NPM ](https://nodejs.org/es/)
  - Angular CLI (https://cli.angular.io/) [ Forms, Observables, Components, Services, Modules ]

- **Sintaxis Documentacion**
  - [ JSDocs ](http://usejsdoc.org/)

- **Responsive Design**
  - [ Bootstrap ](http://getbootstrap.com/)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
