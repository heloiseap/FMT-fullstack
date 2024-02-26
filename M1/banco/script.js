import {Cliente,Conta} from "./classes.js"

const conta1 = new Conta(1234,40,true,"Joao")

const arrayClientes = []
const arrayContas = [conta1]
const btnCadastro = document.querySelector("#btn-cadastro")
btnCadastro.addEventListener("click",cadastrarCliente)
    
function cadastrarCliente() {
    const nomeCliente = document.querySelector("#nome-cliente").value
    const numeroConta = document.querySelector("#numero-conta").value
    const saldoConta = document.querySelector("#saldo-conta").value

    const conta = new Conta(numeroConta,saldoConta,true,nomeCliente) 
    const cliente = new Cliente(nomeCliente,numeroConta,saldoConta)
    arrayClientes.push(cliente)
    arrayContas.push(conta)
}

const btnTransacao = document.querySelector("#btn-transacao")
btnTransacao.addEventListener("click",transacaoEscolhida)

function transacaoEscolhida() {

    const acaoEscolhida = document.querySelector("#acao-escolhida").value
    const numeroConta = document.querySelector("#numero-conta-transacao")
    const contaTransacao = arrayContas.find(item => item.numeroConta == numeroConta)


    switch (acaoEscolhida) {
        case "saldo":


        case "deposito":
        
        case "saque":

    }
}




