import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api/v1/usuarios';

  getUsuarios(){
    return this.http.get<Usuario[]>(this.Url);
  }

  addUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.Url , usuario);
  }

  getUsuarioid(id: number){
    return this.http.get<Usuario>(this.Url+"/"+id);
  }


  updateUsuario(usuario:Usuario) {
    return this.http.put(this.Url+"/"+usuario.id, usuario);
  }

  deleteUsuario(usuario:Usuario) {
    return this.http.delete(this.Url+"/"+usuario.id);
  }
}
