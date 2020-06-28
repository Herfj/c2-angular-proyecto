import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from './../models/DestinoViaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  lista_destinos :DestinoViaje[];
  constructor() {
    this.lista_destinos=[];
  }

  ngOnInit(): void {
  }

  guardar(nombre:string,url:string):boolean{
    this.lista_destinos.push(new DestinoViaje(nombre,url));
    console.log ();
    return false;
  }

}
