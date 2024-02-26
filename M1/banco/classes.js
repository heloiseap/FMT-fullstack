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
    #status
    #cliente

    constructor(numeroConta,saldoConta,status,cliente){
        this.#numeroConta = numeroConta
        this.#saldoConta = saldoConta
        this.#status = status
        this.#cliente = cliente 
    }

    get numeroConta() {
        return this.#numeroConta
    }

    set numeroConta(numero) {
        //if not in array
        this.#numeroConta = numero
    }
    
    get saldoConta() {
        return this.#saldoConta 
    }

    set saldoConta(numero) {
        this.#saldoConta = numero

    }

    get status() {
        return this.#status
    }

    set status(boolean) {
        this.#status = boolean
    }
    
    get cliente() {
        return this.#cliente
    }

    set cliente(nomeCliente){
        this.#cliente = nomeCliente

    }

    saque(valorSaque) {
        if (valorSaque <= this.#saldoConta) {
            this.#saldoConta -= Math.abs(valorSaque)
        }
        else {
            alert("Saldo insuficiente")
        }
    }

    deposito(valorDeposito) {
        this.#saldoConta += Math.abs(valorDeposito)

    }

}

export {Cliente, Conta};


// let criarClienteBotao = document.querySelector("#submit-criar-conta")
// console.log(criarClienteBotao)
// criarClienteBotao.addEventListener("click", function(event) {
//     event.preventDefault()
//     let nomeCliente = document.querySelector("#nome-cliente")
//     let numeroConta = document.querySelector("#numero-conta")
//     let saldoConta =  document.querySelector("saldo-conta")
//     let cliente = new Cliente(nomeCliente, numeroConta, saldoConta)
//     clientes.push(cliente)
//     console.log(clientes)
// })