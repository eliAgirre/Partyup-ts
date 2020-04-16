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

```ts
@NgModule({
  ...
  exports: [ HeaderComponent, NavComponent ]

})
```

## Agregar el core en la App module:

Se añaden el core de la siguiente forma:

```ts
import { CoreModule } from './core/core.module';


@NgModule({
  ...
  imports: [ CoreModule ]

})
```

## Comprobar si funciona core:
Se copia el selector del header y del nav component en app.component.html como si fuera una etiqueta personalizada.

## Crear el modulo dashboard en app:

`ng g module dashboard`<br>

Después se generará un componente dentro del dashboard:<br>

`ng g component dashboard --flat`<br>

Para exportar el componente dashboard se escribe en el @NgModule dicho componente:<br>

```ts

@NgModule({
  ...
  exports: [ DashboardComponent ]

})
```

Y se añade el modulo dashboard al app module:<br>

```ts
import { DashboardComponent } from './dashboard.component';


@NgModule({
  ...
  imports: [ DashboardComponent ]

})
```

## Componente party en shared:

Ir a la carpeta shared, crear una carpeta party y entrar dentro de la carpeta para crear el componente party-card con `ng g component party-card`<br>

Después de crearlo hay que hacer el export del dicho componente en shared module:

```ts
import { PartyCardComponent } from './party/party-card/party-card.component';


@NgModule({
  ...
  exports: [ PartyCardComponent ]

})
```

Y como este componente se va a utilizar en dashboard, en dashboard module hay que añadir lo siguiente:

```ts
import { SharedModule } from '../shared/shared.module';


@NgModule({
  ...
  imports: [ SharedModule ]

})
```

## Crear una clase dentro de la carpeta party:

Ir a la carpeta party que está dentro de shared, y ejecutar el siguiente comando:<br>

`ng g class party.model`<br>

Después de añaden los atributos de dicha clase.<br>

## Crear la clase Author en la carpeta author:

Crear una carpeta dentro de shared llamada 'author', entrar dentro de la carpeta y ejecutar el comando:<br>

`ng g class author.model`<br>

Después de añaden los atributos de dicha clase, y se importa en la clase party ya que contiene un atributo de esta clase.<br>

## Utilizar el modelo o clase party se importa en el componente party-card y en party-list:

Componente party-card:<br>

```ts
import { Party } from '../party.model';

...

export class PartyCardComponent {

  @Input() party: Party;

}
```

Componente party-list:<br>

```ts

import { Component, OnInit } from '@angular/core';
import { Party } from '../party.model';
import { Author } from '../../author/author.model';

...

export class PartyListComponent implements OnInit {

  text: string = 'Lorem ipsum dolor sit amet';
  authors: Author[] = [];
  parties: Party[] = [];

  ngOnInit(){
    this.authors.push(new Author(('1')));
    this.parties.push(new Party('1', '', this.authors[0], this.text+" 1", '16/04/2020'));
    this.parties.push(new Party('2', '', this.authors[0], this.text+" 2", '16/04/2020'));
    this.parties.push(new Party('3', '', this.authors[0], this.text+" 3", '16/04/2020'));
    this.parties.push(new Party('4', '', this.authors[0], this.text+" 4", '16/04/2020'));
  }

}

```

## Mostrar el array de party de forma dinámica con directivas estructurales en el component party-list:

```html
<section *ngFor="let party of parties" class="party_list">
  <partyup-party-card [party]="party"></partyup-party-card>
</section>
```

## Visualizar los party-cards:

Hay que añadir en el component dashboard html la siguiente etiqueta:

```html
<partyup-party-list></partyup-party-list>
```

## Crear los componentes login y profile en la app:

Crear los componentes en la carpeta app y ejecutar los siguientes comandos que generarán, html, css y los archivos .ts:<br>
`ng g component login`
`ng g component profile`


## Crear el componente author-car dentro de la carpeta author que está en el shared:

Crear los componentes en la carpeta app y ejecutar el siguiente comando:<br>
`ng g component author-card`


## Añadir rutas en la aplicación:

Primero añadiremos una archivo para gestionar las rutas de la app. Dentro del app se creará un archivo llamado 'app-routing.module.ts' con el siguiente contenido:<br>

```ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


```

Después de crearán archivos para profile, dashboard y login. Cada uno tendrá un archivo llamado ''xxxxx-routing.module.ts'. Ahora veremos el código del achivo 'login-routing.module.ts' para visualizar la diferencia con la de app-routing:<br>

```ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ]
})
export class LoginRoutingModule { }

```

Para utilizar cada routing hay que importarlos en cada modulo correspondiente, por ejemplo en login module:<br>

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

```

 Añadir routerLink al menu nav html:<br>

```html
<section class="section_menu">
	<nav class="menu_nav">
		<ul class="nav_list">
			<li class="nav_list_item" routerLinkActive="nav_list_item-selected">
				<a class="nav_list_link" routerLink="/dashboard">Party</a>
			</li>
			<li class="nav_list_item" routerLinkActive="nav_list_item-selected">
				<a class="nav_list_link" routerLink="/profile">Perfil</a>
			</li>
		</ul>
	</nav>
</section>
```
 Para que las rutas funcionen deben importarse en core module:<br>

```ts

import { RouterModule} from '@angular/router';

@NgModule({
  ...
  imports: [ RouterModule ]
  ...
})

```

Y por último hay que añadir los módulos al app module:

```ts

import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  ...
  imports: [
    ...
    LoginModule,
    ProfileModule,
    ...
  ]
})

```

## JSON-Server como una API-REST:

Se ha creado un archivo llamado 'db.json' que contiene datos de tipo JSON que hará de una base de datos. Al ejecutar dicho archivo obtendremos ciertos endpoints o url mediante http como get, post, delete... devolviendo una respuesta para utilizar esos datos en la aplicación.<br>

Para instalar JSON-Server desde la consola o cmd hay que ejecutar el siguiente comando:<br>

`npm install -g json-server`

Una vez instalado, con el archivo 'db.json' se lanza el siguiente comando:<br>

`json-server --watch db.json`

Con ese comando se visualizan los endpoints a utilizar.

## Lanzar el servidor en local desde la raíz del proyecto:

Ejecutar `ng serve` <br>
[Para visualizar en el navegador](http://localhost:4200/).

