import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '@app/servicios/usuario.service';
import { NgForm } from '@angular/forms';
import { Acceso } from '@app/modelos/acceso.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() anexo = new EventEmitter<boolean>();

  acceso: Acceso;

  constructor(
    private _usuarioService: UsuarioService,
    private router: Router
  ) {

    if(this._usuarioService.getUsuario() != undefined){
      this.router.navigate(['/exito'])
    }

    this.acceso = new Acceso;
    this.acceso.email = '';
    this.acceso.password = '';
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let error: boolean = false;
    const regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.acceso.email == undefined) {
      form.controls.email.setErrors({ 'incorrect': true });
      error = true;
    } else {
      if (!this.acceso.email.match(regex_email)) {
        form.controls.email.setErrors({ 'incorrect': true });
        error = true;
      }
    }

    if (this.acceso.password == undefined) {
      form.controls.password.setErrors({ 'incorrect': true });
      error = true;
    } else {

      if (this.acceso.password.length < 6) {
        form.controls.password.setErrors({ 'incorrect': true });
        error = true;
      }

    }

    if (form.status == 'INVALID' || error == true) {

      Swal.fire({
        title: 'Error',
        text: 'Hay errores en el formulario, favor de revisar',
        icon: 'error'
      });

    } else {
      this._usuarioService.logIn(this.acceso).subscribe((resp: any) => {
        if (resp.ok == true) {
          console.log("Pendejos");
          this.anexo.emit(true);
          this.router.navigate(['/exito']);
        } else {
          this.errorDesconocido();
        }
      }, ((error: any) => {
        if (error.ok == false) {
          Swal.fire({
            title: '¡Vaya!',
            text: error.error.mensaje,
            icon: 'warning'
          });
        } else {
          this.errorDesconocido();
        }
      }));
    }

  }
  errorDesconocido() {
    Swal.fire({
      title: '¡Error!',
      text: 'Error desconocido, intente más tarde.',
      icon: 'error'
    });
  }

}
