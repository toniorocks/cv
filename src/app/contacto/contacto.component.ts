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
    this.email_error = "No es un email válido";
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    
    var email = f.controls['email'].value;
    var mensaje = f.controls['cuerpo'].value;
    var error: boolean = false;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)!) {
      
      f.controls['email'].setErrors({ 'incorrect': true });
      error = true;

    }
    

    



  }

}
