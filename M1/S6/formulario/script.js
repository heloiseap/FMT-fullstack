function validaEmail() {
    let email = document.querySelector("#email")
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.value && !re.test(email)){
        alert("Email invalido")
    }

}

function validaSenha() {
    let senha = document.querySelector("#senha")
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    if(senha.value && !re.test(senha)){
        alert("Senha inválida")
    }
}

function validaSenhaRepetida() {
    let senha = document.querySelector("#senha")
    let senhaRepetida = document.querySelector("#senhaRepetida")
    if (senhaRepetida && senha!==senhaRepetida) {
        alert("Senhas não correspondem")
    }
}

function temFilhos() {
    let filhos = document.querySelector("#filhos")
    console.log(filhos)
    let numFilhos = document.querySelector("#numFilhos")
    if (filhos.checked){
        numFilhos.disabled = false
        numFilhos.required = true
    }
    else {
        numFilhos.disabled = true
        numFilhos.required = false
    }
}

let form = document.querySelector("#formulario")
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault()
    }
)
    
}
