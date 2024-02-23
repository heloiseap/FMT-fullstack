let nomeCliente = document.querySelector("#nome-cliente")
let numeroConta = document.querySelector("#numero-conta")
let saldoConta = document.querySelector("#saldo-conta")

class Cliente {

    #nomeCliente
    #numeroConta //linkar a conta
    #saldoConta //linkar a conta

    constructor(nome,conta,saldo) {
        this.#nomeCliente = nome
        this.#numeroConta = conta
        this.#saldoConta = saldo
    }

    get nomeCliente() {
        return this.#nomeCliente
    }
    set nomeCliente(nomeCliente) {
        this.#nomeCliente = nomeCliente
    }

    get numeroConta() {
        return this.#numeroConta
    }

    set numeroConta(numeroConta) {
        if (numeroContaCadastrado.includes(numeroConta)) {
            return alert("Esse número não está disponível")
        }
        else {
            this.#numeroConta = numeroConta
        }
    }

    get saldoConta() {
        return this.#saldoConta
    }

    set saldoConta(saldoConta) {
        this.#saldoConta += saldoConta
      
    }

}


class Conta{ 
    #numeroConta
    #saldoConta
    #ativo

    constructor(numeroConta,saldoConta,ativo){
        this.#numeroConta = numeroConta
        this.#saldoConta = saldoConta
        this.#ativo = ativo
    }


}

//todo salvar contas no array
let numeroContaCadastrado = []