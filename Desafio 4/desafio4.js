const CALCULAR = (function () {

    const calculadora = {
        count: 0
    };

    calculadora.clearCount = function () {
        return calculadora.count = 0;
    }

    calculadora.somar = function (valor) {
        calculadora.count += valor;
        return calculadora.count;
    }

    calculadora.subtrair = function (valor) {
        calculadora.count -= valor;
        return calculadora.count;
    }

    calculadora.multiplicar = function (valor) {
        calculadora.count *= valor;
        return calculadora.count;
    }

    calculadora.dividir = function (valor) {
        calculadora.count /= valor;
        return calculadora.count;
    }

    calculadora.final = function (valor) {
        return calculadora.count;
    }

    return {
        clear: calculadora.clearCount,
        soma: calculadora.somar,
        subtracao: calculadora.subtrair,
        multiplicacao: calculadora.multiplicar,
        divisao: calculadora.dividir,
        fim: calculadora.final
    };

})();

console.log(CALCULAR);