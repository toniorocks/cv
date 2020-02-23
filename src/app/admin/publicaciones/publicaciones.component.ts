import { Component, OnInit } from '@angular/core';
import { Publicacion } from '@app/modelos/publicacion.model';

export interface Publicaciones{
  ok:boolean
  data:Publicacion[];
}

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})

export class PublicacionesComponent implements OnInit, Publicaciones {

  ok: boolean;
  data: Publicacion[];

  constructor() { }
  ngOnInit() {}

}


