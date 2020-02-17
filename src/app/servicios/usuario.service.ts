import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { environment } from '@environments/environment';

import { Usuario } from '@app/modelos/usuario.model';
import { Acceso } from '@app/modelos/acceso.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usr = new Subject<Usuario>();
  token:string;

  constructor(private http:HttpClient, private router:Router) {}

  renuevaToken(){
    return this.http.get(`${environment.api_url}/renueva-token?token=${this.token}`).pipe(retry(2),map((resp:any)=>{
      this.token = resp.token;
      localStorage.setItem('token', this.token); console.log('token renovado');
      return resp;
    }), catchError((error:any) => {
      console.error(error);
      Swal.fire({
        title: 'Error',
        text: 'No se pudo renovar el token, contacte al administrador o intente más tarde',
        icon: 'error'
      });
      return throwError("Error thrown from catchError");
    }));
  }

  nuevoUsuario(usuario:Usuario){
    return this.http.post(`${environment.api_url}/usuario`, usuario);
  }

  logIn(acceso:Acceso){
    return this.http.post(`${environment.api_url}/login`, acceso).pipe(retry(2),map((res:any) => {
      this.setStorage(res.token, res.usuario);
      this.usr.next(res.usuario);
      return res;
    }));
  }

  setStorage(token:string, usuario:Usuario){
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }

  removeStorage(){
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
  }

  logOut(){
    this.removeStorage();
    this.usr.next(undefined);
    this.router.navigate(['/']);
  }

  getUsuario(){
    return JSON.parse(localStorage.getItem("usuario"));
  }

}
