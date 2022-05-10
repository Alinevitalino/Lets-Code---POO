import { Animal } from "./Animal.js";

class Papagaio extends Animal {
    constructor(idade='', nome='', cor='', som='') {
        super(idade, nome, cor);
        this.#som = "curupacu";
    }

    #som;

    get som() {
        return this.#som;
    }

    comunicar() {
        return `${this.nome} pode se comunicar com o som ${this.som}.`
    }

    voar() {
        return "Voar voar, subir subir"
        }

    comer() {
            return `O ${this.nome} ama comer semente de girassol`
        }
}

export { Papagaio };