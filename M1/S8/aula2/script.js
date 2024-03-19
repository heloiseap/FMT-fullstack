// setInterval(()=>console.log(new Date().toLocaleString()),3000)
let numero = 5
let intervalo

//declarar intervalo fora da funcao para 
//poder parar a execução com o clearInterval
intervalo = setInterval(function(){
    console.log(numero)
    numero -= 1
    if (numero==0){
        clearInterval(intervalo)
    }
},1000)