import { Component, OnInit } from '@angular/core';
import { Contacto } from '@app/modelos/contacto';
import { NgForm } from '@angular/forms';

import { EmailService } from '@app/servicios/email.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contacto : Contacto;
  email_error: string;
  mensaje_error : string;

  constructor(private _emailService:EmailService) {
    this.contacto = new Contacto();
    this.contacto.email = 'marco@marco.com';
    this.contacto.mensaje = 'DE PRUEBA EN FIJO';
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm){

    let error:boolean = false;

    const email = f.controls['email'].value;
    const mensaje = f.controls['mensaje'].value;
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {

      f.controls['email'].setErrors({ 'incorrect': true });
      error = true;

    }

    if(mensaje === undefined){
      f.controls['mensaje'].setErrors({ 'incorrect': true });
      error = true;
    }

    if(!error){

      console.log("Se enviará el formulario");
      this._emailService.sendMessage(this.contacto).subscribe((resp:any)=>{
        console.log(resp);
      });

    }else{

      console.log('Error en el formulario');

    }

  }

}
