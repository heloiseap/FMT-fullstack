function calcular(){

    let a = Number(document.querySelector("#v1").value)
    let b = Number(document.querySelector("#v2").value)
    let operacao = document.getElementById("operacao").value

    switch (operacao) {
        case "soma":
            c = a+b
            break
        case "subtracao":
            c = a-b
            break
        case "multiplicacao":
            c = a*b
            break
        case "divisao":
            if (b==0){
                c = "NaN"
            }
            c = a/b
            break
    }
    document.querySelector("#resultado").value = c
    
}
