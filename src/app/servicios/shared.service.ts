import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';   

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  logedIn = new Subject<boolean>();

  constructor() { }

  emitData(data:string){

  }

}
