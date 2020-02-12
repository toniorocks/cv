import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.css']
})
export class BootstrapModalComponent implements OnInit {

  
  @Input() paquete: number;

  constructor() { 
  }

  ngOnInit() {


  }

}
