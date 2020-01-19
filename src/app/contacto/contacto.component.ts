import { Component, OnInit } from '@angular/core';
import { Contacto } from '../modelos/contacto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contacto : Contacto;
  email_error: string;
  mensaje_error : string;

  constructor() {
    this.contacto = new Contacto();
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

      console.log("Se enviará el formulario")

    }

  }

}
