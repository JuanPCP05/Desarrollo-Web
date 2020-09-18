import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  usuario:Usuario = new Usuario();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getUsuarioid(+id)
    .subscribe(data=>{
      this.usuario=data;
    })
  }

  Actulizar(usuario:Usuario){
    this.service.updateUsuario(usuario)
    .subscribe(data=>{
      alert("se actulizo con exito....!!");
      this.router.navigate(["listar"]);
    })

  }

}
