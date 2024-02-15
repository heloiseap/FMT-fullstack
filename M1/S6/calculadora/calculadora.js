function calcular(){

    let a = document.getElementById("n1")
    let b = document.getElementById("n2")
    let operacao = document.getElementById("operacao").value
    
    switch (operacao) {
        case soma:
            return a+b
        case subtracao:
            return a-b
    }
    function soma(a,b) {
        return a+b
    }

    function subtracao(a,b) {
        return a-b
    }

    function multiplicacao(a,b) {
        return a*b
    }

    function divisao(a,b) {
        if (b==0) {
            return NaN
        }
        return a/b
    }
}

