import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DestinoViaje } from '../models/DestinoViaje.model';
import { Button } from 'protractor';


@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() lista_destinos: DestinoViaje;
  @HostBinding('attr.class') cssClass='col-md-4';  

  constructor() {
    
  }
    
  ngOnInit(): void {
  }

}
