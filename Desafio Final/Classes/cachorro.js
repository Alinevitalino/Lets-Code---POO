import { Animal } from "./Animal.js";

class Cachorro extends Animal {
    constructor(idade='', nome='', cor='', som='') {
        super(idade, nome, cor);
        this.#som = "au-au";
    }

    #som;

    get som() {
        return this.#som;
    }

    comunicar() {
        return `${this.nome} pode se comunicar com o som ${this.som}.`
    }

    brincar() {
        return "Está na hora de brincar"
        }

    correr() {
            return `Corre ${this.nome}`
        }
}

export { Cachorro };