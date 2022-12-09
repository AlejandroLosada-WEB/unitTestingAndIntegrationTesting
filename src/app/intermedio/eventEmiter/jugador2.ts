import { EventEmitter } from "@angular/core";

export class Jugador2{
    hp:number;
    hpCambia = new EventEmitter<number>();
    constructor() {
        this.hp = 100;
    }

    recibeDano(dano:number){
        this.hp = (dano>this.hp)? 0 : this.hp-dano;
        this.hpCambia.emit(this.hp)
    }

} 