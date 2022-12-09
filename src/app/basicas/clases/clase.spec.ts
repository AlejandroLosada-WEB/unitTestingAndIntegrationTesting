import { Jugador } from "./clase";

describe("Pruebas de Clase",()=>{
    const jugador=new Jugador()
    beforeAll(()=>{
        //ANTES DE QUE SE EJECUTEN TODAS 
        //SOLO SE HACE UNA VEZ
    })

    beforeEach(()=>{
        //SE EJECUTA ANTES DE CADA PRUEBA
        jugador.hp=100;
    })

    afterAll(()=>{
        //DESPUES DE QUE SE EJECUTEN TODAS 
        //SOLO SE HACE UNA VEZ
    })

    afterEach(()=>{
        //SE EJECUTA CADA VEZ QUE SE TERMINA UNA PRUEBA
    })

    
    it("Debe retornar 80 de hp si recibe 20", () =>  {
        jugador.recibeDano(20)
        expect( jugador.hp ).toBe(80)
    })

    it("Debe retornar 60 de hp si recibe 40", () =>  {
        jugador.recibeDano(40)
        expect( jugador.hp ).toBe(60)
    })

    it("Debe retornar 0 de hp si recibe 140", () =>  {
        jugador.recibeDano(140)
        expect( jugador.hp ).toBe(0)
    })

});