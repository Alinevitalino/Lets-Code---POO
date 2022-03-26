const pessoa = {};

pessoa.genero = "fem";
pessoa.nacionalidade = "brasileira";
pessoa["estado civil"] = "casada";
pessoa.altura = 1.65;
pessoa.peso = 60 + "kg";
pessoa.cabelo = "longo";
pessoa.medo = "calango"; 

pessoa["funções motoras"] = ["enxergar", "ouvir", "andar", "falar", "tocar"];
pessoa.dormir = function() {};
pessoa.estudar = function () {};
pessoa.comer = function() {};

console.log(pessoa)