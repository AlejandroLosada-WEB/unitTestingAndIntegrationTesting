import { FormBuilder } from "@angular/forms";
import { formularioRegister } from "./formulario";

describe('FormularioRegistro', () => {

    let componente: formularioRegister;

    beforeEach(() => {
        componente=new formularioRegister(new FormBuilder());
    })

    it('Debe crear un formulario con dos campos', () => {
        expect( componente.form.contains('email')).toBeTruthy();
        expect( componente.form.contains('password')).toBeTruthy();
    });

    it('El email tiene que ser obligatorio', () => {
        const control=componente.form.get('email');
        control?.setValue('');
        expect(control?.valid).toBeFalsy();
    });

    it('El email tiene que ser un correo valido', () => {
        const control=componente.form.get('email');
        control?.setValue('fernado@gmail.com');
        expect(control?.valid).toBeTruthy();
    });
});