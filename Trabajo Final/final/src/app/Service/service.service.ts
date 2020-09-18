import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/backend/Usuario';

  getUsuarios(){
    return this.http.get<Usuario[]>(this.Url);
  }

  addUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.Url,Usuario);
  }
}
