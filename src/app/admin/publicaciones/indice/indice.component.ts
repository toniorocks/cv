import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacionesService } from '@app/servicios/publicaciones.service';
import { UsuarioService } from '@app/servicios/usuario.service';
import { Publicaciones } from '../publicaciones.component';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit, Publicaciones {
  ok: boolean;
  data: import("../../../modelos/publicacion.model").Publicacion[];

  constructor(
    private _us: UsuarioService, 
    private _ps:PublicacionesService, 
    private router:Router
  ) {
    this._ps.obtenPublicaciones().subscribe((resp:Publicaciones) => {
      this.ok = resp.ok;
      this.data = resp.data;
    });
   }

  ngOnInit() {
  }

}
