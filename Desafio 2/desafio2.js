let people = {
    nome: "Maria",
    altura: 1.75,
    peso: 68,
    idade: 29,
    profissao: "Eng. quimica",
    nacionalidade: "Brasil",
    kcalDiaria: {
        min: 0,
        max: 7000,
        atual: 0
    },

    comerMuito: function () {
        if (this.kcalDiaria.atual >= this.kcalDiaria.max){
            return "Você já comeu muito hoje, vá treinar!!";
        }
        if (this.kcalDiaria.atual < this.kcalDiaria.max) {
            this.kcalDiaria.atual += 600;
        }
        return this.engordar();
    },

    comerPouco: function () {
        if (this.kcalDiaria.atual < this.kcalDiaria.max) {
            return this.kcalDiaria.atual += 200;
        }
        console.log(this.kcalDiaria.atual);
        this.engordar();
    },

    engordar: function () {
        if (this.kcalDiaria.atual < 7000) {
            return "Kcal atual: " + this.kcalDiaria.atual;
        }
        return "Peso: " + (this.peso += 1);
    },

    treinar: function () {
        if (this.peso <= 67) {
            return "Calma ai!! Vá descansar e treine mais amanhã...";
        }
        return "Peso: " + (this.peso -= 1);
    }
}

console.log(pessoa)