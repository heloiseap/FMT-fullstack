let data = new Date();
// let mes = data.getMonth()
// let dia = data.getDate()
let mes = 1
let dia = 20

if (dia<10) {
    dia = "0" + String(dia)
}

let codigo = Number(String(mes)+String(dia))

function qualEstacao(codigo) {
    if (codigo <= 221 || codigo >= 1122) {
        estacao = "verao"
    }
    else if (codigo <= 521) {
        estacao = "outono"   
    }
    else if (codigo <= 821){
        estacao = "inverno"
    }
    else {
        estacao = "primavera"
    }


}

window.onload = (event) => {
    qualEstacao(codigo)
    console.log(estacao)
    
    const canvas = document.querySelector("#imagem")
    const context = canvas.getContext("2d")
    let imagem_estacao = new Image()
    imagem_estacao.src = "imgs/verao.jpg"
    context.drawImage(imagem_estacao,0,0)   
};

    // switch (estacao) {
    //     case "verao":
    //         imagem_estacao.src = "imgs/verao.jpg"
    //         break
    //     case "outono":
    //         imagem_estacao.src = "imgs/outono.jpg"
    //         break
    //     case "inverno":
    //         imagem_estacao.src = "imgs/inverno.jpg"
    //         break
    //     case "primavera":
    //         imagem_estacao.src = "imgs/primavera.jpg"
    //         break
    
    // }



