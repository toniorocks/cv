import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Contacto } from '@app/modelos/contacto';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(
    private http:HttpClient
  ) { }
  sendMessage(contacto:Contacto){

    const params = new HttpParams()
    .set('email', contacto.email)
    .set('mensaje', contacto.mensaje);

    //Access-Control-Allow-Origin: *
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Access-Control-Allow-Origin', '*');
    
    return this.http.get(`${environment.api_url}/mail`, {params, headers});
  }
}
