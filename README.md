# Partyup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

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


## Crear el proyecto:
`ng new Partyup --prefix party`<br>

## Crear los modulos core y shared en la app:
Primer hay que ir a la carpeta app y después crear los módulos con los siguientes comandos:<br>
`ng g module core`<br>
`ng g module shared`<br>

## Crear header y nav en core:
Para ello hay que ir a la carpete core que está dentro de carpeta app, y una vez allí ejecutaremos los siguientes comandos:<br>
`ng g component header`<br>
`ng g component nav`<br>

## Exportar los componentes header y nav:
Una vez que se han creado esos componentes, hay que exportarlos desde el core.module.ts dentro de la directiva @NgModule:

`@NgModule({
  ...
  exports: [ HeaderComponent, NavComponent ]

})`

## Agregar el core en la App module:

Se añaden los 

`import { CoreModule } from './core/core.module';

@NgModule({
  ...
  imports: [ CoreModule ]

})`

## Comproobar si funciona core:
Se copia el selector del header y del nav component en app.component.html como si fuera una etiqueta personalizada.

## Lanzar el servidor en local desde la raíz del proyecto:

Ejecutar `ng serve` <br>
[Para visualizar en el navegador](https://localhost:4200/).

