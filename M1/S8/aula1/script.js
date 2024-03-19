import dados from "./receitas.json" assert {type: 'json'}

let indiceAtual = 0

const divReceitas = document.querySelector("#div-receitas")
const mostrarAnterior = document.querySelector("#anterior")
const mostrarProxima = document.querySelector("#proxima")

mostrarProxima.addEventListener("click", function() {
    if (indiceAtual==dados.receitas.length-1) {
        return
    }
    indiceAtual += 1
    renderizarReceita()
})

mostrarAnterior.addEventListener("click", function(){
    if (indiceAtual==0) {
        return
    }
    indiceAtual -= 1
    renderizarReceita()
})

function renderizarReceita() {
    const receita = dados.receitas[indiceAtual]
    divReceitas.innerHTML = ""

    let tituloReceita = document.createElement("h2")
    tituloReceita.innerText = receita.nome

    divReceitas.appendChild(tituloReceita)

}

renderizarReceita()