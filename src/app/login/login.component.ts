import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '@app/servicios/usuario.service';
import { NgForm } from '@angular/forms';
import { Acceso } from '@app/modelos/acceso.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  acceso:Acceso;

  constructor(private _usuarioService:UsuarioService) {
    this.acceso = new Acceso;
    this.acceso.email = '';
    this.acceso.password = '';
  }

  ngOnInit() {
  }

  // onSubmit(form:NgForm){

  //   // let error:boolean = false;

  //   // if(){
  //   //   error = true;
  //   // }
  
  //   // if(form.form.status == 'INVALID' || error == true){

  //   // }
    
  // }

}
