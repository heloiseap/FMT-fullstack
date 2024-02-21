let array = [
    {
        nome: "Rayane",
        sobrenome: "Cristina",
        idade: 21
    },
    {
        nome: "Carlos",
        sobrenome: "Henrique",
        idade: 17
    },
    {
        nome: "Julio",
        sobrenome: "Cesar",
        idade: 19
    },
    {
        nome: "Camila",
        sobrenome: "Fernandes",
        idade: 18
    },
  {
        nome: "Julia",
        sobrenome: "Fernandes",
        idade: 10
    },
    {
        nome: "Bruno",
        sobrenome: "Albuquerque",
        idade: 31
    },
    {
        nome: "Túlio",
        sobrenome: "Bastos",
        idade: 22
    },
    {
        nome: "Cristiane",
        sobrenome: "Maria",
        idade: 41
    },
];

// console.log(array.filter((pessoa)=>pessoa.idade>=18));
// let maiorIdade = array.filter((pessoa)=>pessoa.idade>=18);
// console.log(maiorIdade.find((pessoa) => pessoa.idade>30))

let menorDeIdade = array.filter((pessoa)=>pessoa.idade<18);

function faltaQuantoPara18(pessoa) {
    diferenca = 18 - pessoa.idade
    pessoa.anosParaMaioridade = diferenca
    return diferenca
}

console.log(menorDeIdade.map(faltaQuantoPara18))
console.log(array[1])