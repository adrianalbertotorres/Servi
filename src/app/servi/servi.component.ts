import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../equipo.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-servi',
  templateUrl: './servi.component.html',
  styleUrls: ['./servi.component.css']
})
export class ServiComponent implements OnInit {

  equipo:any=[];

  constructor(private _servicio:EquipoService) { 

    this.equipo=_servicio.obtenerEquipo();
  }

  ngOnInit() {
  }

}
