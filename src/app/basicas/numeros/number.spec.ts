import { incrementar } from "./number";

describe("Pruebas de Number",()=>{
    
    it("Debe retornar un number", () =>  {
        const resp=incrementar(1)
        expect( (typeof resp) ).toBe('number')
    })

    it("Debe retornar 100", () =>  {
        const number=200;
        const number2=2;
        const resp=incrementar(number)
        expect(resp).toBe(100)
        const resp2=incrementar(number2)
        expect(resp2).toBe(3)
    })
});