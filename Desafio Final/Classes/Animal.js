class Animal {
    constructor (idade='', nome='', cor=''){
        this.#idade = idade;
        this.#nome = nome;
        this.#cor = cor;
    }

    #idade;
    #nome;
    #cor;
    
  
    get idade() {
      return this.#idade;
    }
  
    get nome() {
      return this.#nome;
    }
  
    get cor() {
      return this.#cor;
    }

    comunicar() {
        return `${this.nome} pode se comunicar.`
    }
  }
  
  export { Animal };