import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';

import { Usuario } from '@app/modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) {}

  nuevoUsuario(usuario:Usuario){
    return this.http.post(`${environment.api_url}/usuario`, usuario);
  }

  

  

}
