import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '@app/modelos/usuario.model';
import { UsuarioService } from '@app/servicios/usuario.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent implements OnInit {

  @Input() usuario:Usuario;
  @Output() logedIn = new EventEmitter<boolean>();

  constructor(private _usuario:UsuarioService) { }

  ngOnInit() {
    
  }

  logOut(){
    this.usuario = undefined;
    this.logedIn.emit(false);
    this._usuario.logOut();
  }

}
