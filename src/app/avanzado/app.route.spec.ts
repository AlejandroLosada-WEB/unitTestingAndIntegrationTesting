import { HospitalComponent } from "../intermedio2/hospital/hospital.component";
import { IncrementadorComponent } from "../intermedio2/incrementador-integracion/incrementador.component";
import { MedicoComponent } from "../intermedio2/medico/medico.component";
import { RUTAS } from "./app.routes";

describe('Rutas principales', ()=> {
    it('Debe existir la ruta de medico:id', ()=>{
        expect(RUTAS).toContain(
            { path: 'medico/:id', component:MedicoComponent}
        );
    });
    it('Debe existir la ruta de hospital', ()=>{
        expect(RUTAS).toContain(
            { path: 'hospital', component:HospitalComponent},
        );
    });
    it('Debe existir la ruta de /', ()=>{
        expect(RUTAS).toContain(
            { path: '**', component:IncrementadorComponent}
        );
    });
})