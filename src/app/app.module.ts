import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosComponent } from "./intermedio/espias/medicos.component";
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RUTAS } from './avanzado/app.routes';


@NgModule({
    declarations: [
        AppComponent,
        MedicoComponent,
        HospitalComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MedicosComponent,
        RouterModule.forRoot(RUTAS)
    ]
})
export class AppModule { }
