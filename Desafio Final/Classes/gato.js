import { Animal } from "./Animal.js";

class Gato extends Animal {
    constructor(idade='', nome='', cor='', som='') {
        super(idade, nome, cor);
        this.#som = "miau";
    }

    #som;

    get som() {
        return this.#som;
    }

    comunicar() {
        return `${this.nome} pode se comunicar com o som ${this.som}.`
    }

    pular() {
        return "Pular pode ser uma grande diversão"
        }

    dormir() {
            return `Corre ${this.nome}`
        }
}

export { Gato };