import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["Listar"]);
  }

  Agregar(){
    this.router.navigate(["Agregar"]);
  }

  Editar(){
    this.router.navigate(["Editar"]);
  }

}
