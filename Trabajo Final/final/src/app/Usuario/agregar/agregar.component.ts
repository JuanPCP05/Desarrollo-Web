import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private route:Router, private service:ServiceService) { }

  ngOnInit() {
  }
  
  Guardar(){
    this.service.addUsuario(this.usuario)
    .subscribe(data=>{
      alert("se agrego con exito...!!!");
      this.route.navigate(["Listar"]);
    })
  }
}
