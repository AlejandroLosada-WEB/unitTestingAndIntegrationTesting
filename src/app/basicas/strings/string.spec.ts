import { mensaje } from "./string";

describe("Pruebas de strings",()=>{
    
    it("Debe retornar un string", () =>  {
        const resp=mensaje("LOSA")
        expect( (typeof resp) ).toBe('string')
    })

    it("Debe retornar un nombre", () =>  {
        const nombre="Pedro";
        const resp=mensaje(nombre)
        expect(resp).toContain(nombre)
    })
});