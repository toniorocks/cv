import { Component, OnInit, Input } from '@angular/core';
import { Paquete } from '../modelos/paquete';

@Component({
  selector: 'app-bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.css']
})
export class BootstrapModalComponent implements OnInit {

  paquetes: Paquete[]; 
  
  @Input() paquete: number;

  constructor() { 

    this.paquetes[0] = new Paquete();
    this.paquetes[0].id = 1;
    this.paquetes[0].nombre = "Básica";
    this.paquetes[0].descripcion = "La consultoría básica provee de soluciones a problemas comunes en organizaciones que implementan alguna(s) de las siguientes tecnologías.";
    this.paquetes[0].soporte = "Soporte";
    //this.paquetes[0].soporte = "Lunes a Viernes de 9am a  6pm (Horario de la ciudad de México)";
    /* this.paquetes[0].servicio[0].id = 1;
    this.paquetes[0].servicio[0].titulo = "Asesoría PHP";
    this.paquetes[0].servicio[0].descripcion = "Planear, implementar, optimizar y/o analizar soluciones completas con PHP, HTML5, MySQL. Detectar oportunidades de mejora en código, base de datos, lógica de programación, documentación, planeación y metodología de trabajo";
    this.paquetes[0].servicio[1].id = 2;
    this.paquetes[0].servicio[1].titulo = "Asesoría Javascript";
    this.paquetes[0].servicio[1].descripcion = "Planear, implementar, optimizar y/o analizar soluciones completas con Javascript, Jquery, Bootstrap, Apis o Servicios Web. Detectar oportunidades de mejora en código, base de datos, lógica de programación, documentación y planeación";

    this.paquetes[0].servicio[1].id = 3;
    this.paquetes[0].servicio[1].titulo = "Asesoría Maquetado HTML5";
    this.paquetes[0].servicio[1].descripcion = "Planear, implementar, optimizar y/o analizar soluciones completas con HTML5, Google Pencil, Bootstrap, Apis o Servicios Web. Detectar oportunidades de mejora en código, base de datos, lógica de programación, documentación y planeación";

    this.paquetes[0].servicio[1].id = 4;
    this.paquetes[0].servicio[1].titulo = "Asesoría de diseño Web y experiencia de usuario";
    this.paquetes[0].servicio[1].descripcion = "Diseñar e implementar interfases amigables con el usuario"; */

  }

  ngOnInit() {
  }

}
