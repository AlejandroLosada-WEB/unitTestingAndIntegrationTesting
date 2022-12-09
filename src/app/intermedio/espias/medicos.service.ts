import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export interface MedicoArray{
    medicos:string[];
    medico:string;
}

@Injectable()
export class MedicosService {

  constructor( public http: HttpClient ) { }

  getMedicos() {
    return this.http.get<MedicoArray>('...')
    .pipe(
          map( resp => resp['medicos'] )
    );
  }

  agregarMedico( medico: any ) {
    return this.http.post<MedicoArray>('...', medico ).pipe(
        map( resp => resp['medico'] )
    );
  }

  borrarMedico( id: string ) {
    return this.http.delete<MedicoArray>('...' ).pipe(
        map( resp => resp['medico'] )
    );
  }


}
