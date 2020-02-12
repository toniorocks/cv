import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '@app/servicios/usuario.service';
import { Usuario } from '@app/modelos/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exito',
  templateUrl: './exito.component.html',
  styleUrls: ['./exito.component.css']
})
export class ExitoComponent implements OnInit {

  usuario:Usuario;
  nombre:string;

  constructor(
    private _usuarioService:UsuarioService,
    private router:Router) { 
    let resp:any = this._usuarioService.getUsuario();
    this.usuario = resp.usuario;
    if(this.usuario){
      this.nombre = this.usuario.nombre;
    }else{
      this.router.navigate(['/acceso']);
    }
  }

  ngOnInit() {
  }

}
