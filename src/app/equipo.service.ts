import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any = [

    { nombre:'Adrian',
      especialidad:'HTML',
      descripcion:'wqwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
    },
    {
      nombre:'Elena',
      especialidad:'CSS',
      descripcion:'wqwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
    }
  ]

  constructor() {
    console.log('funcionando servicio');
   }

   obtenerEquipo(){
     return this.equipo;
   }
}
