let nomeCliente = document.querySelector("#nome-cliente")
let numeroConta = document.querySelector("#numero-conta")
let saldoConta = document.querySelector("#saldo-conta")

class Cliente {

    #nome
    #conta
    #saldo

    constructor(nome,conta,saldo) {
        this.#nome = nome
        this.#conta = conta
        this.#saldo = saldo
    }

    get nome() {
        return this.nome
    }
    // get conta() {
    //     this.
    // }

}