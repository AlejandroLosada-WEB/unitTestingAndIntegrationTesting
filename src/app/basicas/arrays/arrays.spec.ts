import { obtenerRobots } from "./arrays";

describe("Pruebas de Arrays",()=>{
    
    it("Debe retornar un array", () =>  {
        const resp=obtenerRobots()
        expect( resp.length ).toBeGreaterThanOrEqual(3)
    })
    it("Debe existir Megaman y Jarvis", () =>  {
        const resp=obtenerRobots()
        expect( resp ).toContain("Megaman")
        expect( resp ).toContain("Jarvis")
    })

});