import { Jugador2 } from "./jugador2";

describe("Jugador 2 Emit",()=>{
    let jugador:Jugador2;
    beforeAll(()=>{
        //ANTES DE QUE SE EJECUTEN TODAS 
        //SOLO SE HACE UNA VEZ
    })

    beforeEach(()=>{
        //SE EJECUTA ANTES DE CADA PRUEBA
        jugador=new Jugador2();
        jugador.hp=100;
    })

    afterAll(()=>{
        //DESPUES DE QUE SE EJECUTEN TODAS 
        //SOLO SE HACE UNA VEZ
    })

    afterEach(()=>{
        //SE EJECUTA CADA VEZ QUE SE TERMINA UNA PRUEBA
    })

    
    it("Debe emitir un evento cuando recibe un daño", () =>  {
        let nuevoHP=0;
        jugador.hpCambia.subscribe((hp)=>{
            nuevoHP=hp;
        })
        jugador.recibeDano(1000)
        expect( nuevoHP ).toBe(0)
    })

    it("Debe emitir un evento cuando recibe un daño y sobrevivir si es menos de 100", () =>  {
        let nuevoHP=0;
        jugador.hpCambia.subscribe((hp)=>{
            nuevoHP=hp;
        })
        jugador.recibeDano(50)
        expect( nuevoHP ).toBe(50)
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