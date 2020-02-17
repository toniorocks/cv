import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificaGuard implements CanActivate  {
  canActivate(){
    console.log('Pasó por el login guard');
    return true;
  }
}
