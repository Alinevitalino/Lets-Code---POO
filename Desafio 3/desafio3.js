function Conta(
    agencia = 0, 
    numero = 0, 
    digito = 0, 
    saldo = 0, 
    titular = null, 
    tipo = "CC",
    
    ) {
    this.agencia = agencia;
    this.numero = numero;
    this.digito = digito;
    this.saldo = saldo;
    this.titular = titular;
    this.tipo = tipo;
    this.lancamentos = new Array;
}

Conta.prototype.banco = "Lili Bank";

Conta.prototype.extrato = function () {
    console.log ("Seu extrato é: " + this.lancamentos)
    return this.saldo;
}

Conta.prototype.depositar = function (valor) {
    if (valor <= 0) {
        return "O valor do depósito deve ser maior que zero.";
    }
    this.lancamentos.push("Depósito efetuado: R$" + valor + "\n");
        return this.saldo += valor;
    }

Conta.prototype.sacar = function (valor) {
    if (this.saldo >= valor) {
        this.lancamentos.push("Saque efetuado: R$" + valor + "\n")
        return this.saldo -= valor;
    }

    return "Saldo Insuficiente!";
}

Conta.prototype.transferir = function (valor, conta) {
    this.saldo -= valor;
    conta.saldo += valor;
    this.lancamentos.push("Transferência de: R$" + valor + " efetuada para " + conta.titular);
    conta.lancamentos.push("Transferência de: R$" + valor + " recebida de " + this.titular)
    return this.saldo;
}

const contaLeo = new Conta(336, 2328, 0, 2300, "Leonardo Akio",);
const contaAline = new Conta(336, 1604, 8, 4000, "Aline",);

// Conta do Leo
console.log(contaLeo);
console.log(contaLeo.banco);
console.log(contaLeo.depositar(1));
console.log(contaLeo.sacar(1900));
console.log(contaLeo.transferir(200, contaAline));
