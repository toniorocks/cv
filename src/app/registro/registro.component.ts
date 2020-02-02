import { Component, OnInit } from '@angular/core';
import { Usuario } from '@app/modelos/usuario.model';
import { UsuarioService } from '@app/servicios/usuario.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario;
  confirma_: string;

  constructor(private _usuarioService: UsuarioService) {
    this.usuario = new Usuario;
    this.confirma_ = '';
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    let error: boolean = false;
    const regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (this.usuario.nombre == undefined) {
      form.form.controls.nombre.setErrors({ 'incorrect': true });
      error = true;
    }

    if (this.usuario.email == undefined) {
      form.form.controls.email.setErrors({ 'incorrect': true });
      error = true;
    } else {
      if (!this.usuario.email.match(regex_email)) {
        form.form.controls.email.setErrors({ 'incorrect': true });
        error = true;
      }
    }

    if (this.usuario.password == undefined) {
      form.form.controls.password.setErrors({'incorrect': true});
      error = true;
    }else{

      if(this.usuario.password.length < 6){
        form.form.controls.password.setErrors({'incorrect': true});
        error = true;
      }

      if(this.usuario.password != this.confirma_){
        form.form.controls.confirma.setErrors({'incorrect': true});
        error = true;
      }

    }

    if(this.confirma_ == ''){
      form.form.controls.confirma.setErrors({'incorrect': true});
      error = true;
    }

    if (form.form.status == 'INVALID' || error == true) {

      Swal.fire({
        title:'Error',
        text: 'Hay errores en el formulario, favor de revisar',
        icon:'error'
      });

    }else{

      console.log(error);

    }

  }

}
