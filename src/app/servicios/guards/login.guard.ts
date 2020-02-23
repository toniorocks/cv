import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {

  constructor(private _us:UsuarioService, private router:Router){}
  canActivate(){
    console.log('Guard validado!');
    if(!this._us.getUsuario()){
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
