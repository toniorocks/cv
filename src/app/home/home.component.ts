import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numero_paquete:number;

  constructor() { 
    this.numero_paquete = 0;
  }

  ngOnInit() {
  }

  paqueteUno(){ this.numero_paquete = 1; }
  paqueteDos(){ this.numero_paquete = 2; }
  paqueteTres(){ this.numero_paquete = 3; }

}
