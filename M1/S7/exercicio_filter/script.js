idades = [21,17,19,18,10,31,22,41,5]

idades.filter(idade => idade >= 18)

primeiroMaiorDeTrinta = maioresDeDezoito.find((numero) => numero > 30)

menorDe18 = idades.filter(idade => idade<18)

faltaQuantoPara18 = menorDe18.map(idade => 18-idade)

viu7a1 = idade.map(function(idades) {
    return idade>=10
})

numeros = [1,22,31,40,3,5]

numeros.reduce(
                (x,y) => (y>x?y:x)
)

// const maiorValor = array.reduce((anterior, atual) => (atual > anterior ? atual : anterior));

// console.log(`O maior valor é ${maiorValor}`);