
export class Jugador{
    hp:number;

    constructor() {
        this.hp = 100;
    }

    recibeDano(dano:number){
        return this.hp = (dano>this.hp)? 0 : this.hp-dano;
    }

} 