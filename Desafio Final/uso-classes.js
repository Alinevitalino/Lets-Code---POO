import { Animal } from "./Classes/Animal.js";
import { Papagaio } from "./Classes/papagaio.js";
import { Cachorro } from "./Classes/cachorro.js";
import { Gato } from "./Classes/gato.js";

const papagaio = new Papagaio("7", "Loro", "verde");
const cachorro = new Cachorro("1", "Tito", "branco");
const gato = new Gato("8", "Maria Cristina", "caramelo");

console.log(papagaio.comunicar())
console.log(papagaio.voar())
console.log(papagaio.comer())

console.log(cachorro.comunicar())
console.log(cachorro.brincar())
console.log(cachorro.correr())

console.log(gato.comunicar())
console.log(gato.pular())
console.log(gato.dormir())

