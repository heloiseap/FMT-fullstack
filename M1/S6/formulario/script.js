function validaNome() {
    let nome = document.querySelector("nome")
}

function validaEmail() {
    let email = document.querySelector("email")
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validaSenha() {
    let senha = document.querySelector("senha")
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    return re.test(password);
}

function validaSenhaVal() {
    
}

function validaDataNasci() {
    
}

function filhos() {

}
form.addEventListener(
    "submit",
    function (event) {
        event.preventDefault()
    }
)