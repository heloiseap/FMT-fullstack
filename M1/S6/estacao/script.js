let data = new Date();
let mes = String(data.getMonth())
let dia = String(data.getDay())

function estacao(dia,mes) {
    codigo = Number(mes+dia)
    if (codigo <= 221)
        return "verao"
    

}