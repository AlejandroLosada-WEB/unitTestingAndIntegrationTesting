import { Component } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: []
})
export class MedicoComponent {

  medicos:any[]=[];

  constructor(private medicoService: MedicoService){

  }

  saludarMedico( nombre: string ){
    return `Hola ${nombre}`
  }

  obtenerMedicos(){
    this.medicoService.getMedicos().subscribe(resp =>{
      this.medicos=<any[]>resp;
    })
  }
}
