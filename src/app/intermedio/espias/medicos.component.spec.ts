import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { from } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

class HttpClientMock {
    get = jasmine.createSpy('httpClient.get');
}

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    let servicio: MedicosService;

    beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [
            MedicosService,
            {
            provide: HttpClient,
            useClass: HttpClientMock
            }
        ]
        });
        servicio = TestBed.get(MedicosService);
    });


    xit('Debe cargar los médicos', () => {
        const medicos = ['medico1','medico2','medico3'];

        spyOn( servicio, 'getMedicos').and.callFake( ()=> {
            return from([medicos]);
        });

        componente.ngOnInit();
        expect( componente.medicos.length).toBeGreaterThan(0);
   
    });


});
