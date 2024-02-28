import {Cliente,Conta} from "./classes.js"

const conta1 = new Conta(1234,40,true,"Joao")
const arrayClientes = []
const arrayContas = [conta1]

//mostrar menus
const opcaoCadastro = document.querySelector("#opcao-cadastro")
const opcaoSaldo = document.querySelector("#opcao-saldo")
const opcaoDeposito = document.querySelector("#opcao-deposito")
const opcaoSaque = document.querySelector("#opcao-saque")

opcaoCadastro.addEventListener("click",mostrarMenuCadastro)
opcaoSaldo.addEventListener("click", mostrarMenuSaldo)
opcaoDeposito.addEventListener("click",mostrarMenuDeposito)
opcaoSaque.addEventListener("click", mostrarMenuSaque)

function mostrarMenuCadastro() {
    const inputNomeCliente = document.createElement("input")
    const inputNumeroConta = document.createElement("input") 
    const inputSaldoConta = document.createElement("input")
    const btnCadastro = document.createElement("button")

    inputNomeCliente.type = "text"
    inputNumeroConta.type = "number"
    inputSaldoConta.type = "number"
    
    inputNomeCliente.id = "nome-cliente"
    inputNumeroConta.id = "numero-conta"
    inputSaldoConta.id = "saldo-conta" 
    btnCadastro.id = "btn-cadastro"

    inputNomeCliente.placeholder = "Nome completo"
    inputNumeroConta.placeholder = "Número da conta"
    inputSaldoConta.placeholder = "Saldo inicial"
    
    btnCadastro.innerHTML = "Cadastrar"

    document.body.appendChild(inputNomeCliente)
    document.body.appendChild(inputNumeroConta)
    document.body.appendChild(inputSaldoConta)
    document.body.appendChild(btnCadastro)

}

function mostrarMenuSaldo() {
    const inputNumeroConta = document.createElement("input")
    inputNumeroConta.type = "number"
    inputNumeroConta.id = "numero-conta"
    inputNumeroConta.placeholder = "Número da conta"

    const btnSaldo = document.createElement("button")
    btnSaldo.id = "btn-saldow"
    btnSaldo.innerHTML = "Consultar"

    document.body.appendChild(inputNumeroConta)
    document.body.appendChild(btnSaldo)

}

function mostrarMenuDeposito() {

}

function mostrarMenuSaque() {

}

//fazer operacao
// const btnCadastro = document.querySelector("#btn-cadastro")
// const btnSaldo = document.querySelector("#btn-saldo")
// const btnDeposito = document.querySelector("#btn-deposito")
// const btnSaque = document.querySelector("#btn-saque")

// btnCadastro.addEventListener("click",cadastrarCliente)
// btnDeposito.addEventListener("click",depositarConta)
// btnSaldo.addEventListener("click",mostrarSaldo)
// btnSaque.addEventListener("click",fazerSaque)

//acoes
// function cadastrarCliente() {
//     const nomeCliente = document.querySelector("#nome-cliente").value
//     const numeroConta = document.querySelector("#numero-conta").value
//     const saldoConta = document.querySelector("#saldo-conta").value

//     const conta = new Conta(numeroConta,saldoConta,true,nomeCliente) 
//     const cliente = new Cliente(nomeCliente,numeroConta,saldoConta)
//     arrayClientes.push(cliente)
//     arrayContas.push(conta)
//}

function depositarConta() {

}

function mostrarSaldo() {

}

function fazerSaque() {

}

// const btnTransacao = document.querySelector("#btn-transacao")
// btnTransacao.addEventListener("click",transacaoEscolhida)

// function transacaoEscolhida() {

//     const acaoEscolhida = document.querySelector("#acao-escolhida").value
//     const numeroContaTransacao = document.querySelector("#numero-conta-transacao").value
//     const contaTransacao = arrayContas.find(item => item.numeroConta == numeroContaTransacao)
    
//     switch (acaoEscolhida) {
//         case "saldo":
//             console.log(contaTransacao.saldoConta)
//             break
//         case "deposito":
//             //pedir valor
//         case "saque":
//             //pedir valor
//     }
// }




