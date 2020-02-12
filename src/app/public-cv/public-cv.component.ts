import { Component, OnInit, EventEmitter } from '@angular/core';
import { UsuarioService } from '@app/servicios/usuario.service';
import { Usuario } from '@app/modelos/usuario.model';

@Component({
  selector: 'app-public-cv',
  templateUrl: './public-cv.component.html',
  styleUrls: ['./public-cv.component.css']
})

export class PublicCvComponent implements OnInit {

  usuario:Usuario;
  autenticado:boolean = false;

  constructor(private _usuario: UsuarioService) { 
    this.verificaUsuario();
    this._usuario.usr.subscribe((usuario:Usuario)=>{
      this.usuario = usuario;
    });
  }

  verificaUsuario(){
    let usuario = this._usuario.getUsuario();
    if(usuario){
      this.usuario = usuario;
      this.autenticado = true;
    }
  }

  logOut(logedIn:boolean){
    this.autenticado = logedIn;
  }

  logIn(componentReference){
    console.log("component",componentReference);
  }

  ngOnInit() {
  }

  

}
