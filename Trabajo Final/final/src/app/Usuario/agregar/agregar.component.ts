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

  constructor(private route:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Agregar(usuario:Usuario){
    this.service.addUsuario(usuario)
    .subscribe(data=>{
      alert("Agregó con exito");
      this.route.navigate(["listar"]);
    })
  }

}
