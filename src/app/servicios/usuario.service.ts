import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';   
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';

import { Usuario } from '@app/modelos/usuario.model';
import { Acceso } from '@app/modelos/acceso.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usr = new Subject<Usuario>();

  constructor(private http:HttpClient, private router:Router) {}

  nuevoUsuario(usuario:Usuario){
    return this.http.post(`${environment.api_url}/usuario`, usuario);
  }

  logIn(acceso:Acceso){
    return this.http.post(`${environment.api_url}/login`, acceso).pipe(map((res:any) => {
      localStorage.setItem("usuario", JSON.stringify(res));
      this.usr.next(res);
      return res;
    }));
  }

  logOut(){
    localStorage.removeItem("usuario");
    this.usr.next(undefined);
    this.router.navigate(['/']);
  }

  getUsuario(){
    return JSON.parse(localStorage.getItem("usuario"));
  }

  

  

}
