import { HttpClientModule } from "@angular/common/http";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { MedicoComponent } from "./medico.component"
import { MedicoService } from "./medico.service";

describe( 'Medico component',()=>{
    let component:MedicoComponent;
    let fixture:ComponentFixture<MedicoComponent>

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [
                MedicoComponent
            ],
            providers: [MedicoService],
            imports: [HttpClientModule]
        })
        fixture = TestBed.createComponent( MedicoComponent )
        component = fixture.componentInstance;
    });

    it('Debe crearse el componente' ,()=>{
        expect(component).toBeTruthy();
    })

    it('Debe de retornar el nombre del médico' ,()=>{
        const nombre = 'nombre';
        const resp=component.saludarMedico(nombre)
        expect(resp).toContain(nombre)
    })

    it('Obtener medicos' ,()=>{
        const nombre = 'nombre';
        const resp=component.saludarMedico(nombre)
        expect(resp).toContain(nombre)
    })
})