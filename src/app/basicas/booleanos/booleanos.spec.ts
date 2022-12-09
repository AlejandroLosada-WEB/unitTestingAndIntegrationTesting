import { usuarioIngresado } from "./booleanos";

describe("Pruebas de Booleanos",()=>{
    
    it("Debe retornar un true", () =>  {
        const resp=usuarioIngresado()
        expect( resp ).toBeTruthy()
        expect( resp ).not.toBeFalsy()
        expect( !resp ).toBeFalsy()
        expect( !resp ).not.toBeTruthy()
    })

});