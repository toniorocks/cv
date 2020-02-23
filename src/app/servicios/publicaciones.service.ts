import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Publicacion } from '@app/modelos/publicacion.model';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(
    private http:HttpClient
  ) {}

  obtenPublicaciones(){
    return this.http.get(`${environment.api_url}/publicacion`, {}).pipe(retry(2));
  }

  nuevaPublicacion(publicacion:Publicacion){
    return this.http.post(`${environment.api_url}/publicacion`, publicacion);
  }

  editaPublicacion(publicacion:Publicacion){
    return this.http.put(`${environment.api_url}/publicacion`, publicacion);
  }

  eliminaPublicacion(publicacion:Publicacion){
    return this.http.request("delete",`${environment.api_url}/publicacion`, {body:publicacion});
  }

}
