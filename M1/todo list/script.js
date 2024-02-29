// let item1 = document.querySelector("#item1")
// let label1 = document.querySelector("#label1")

// item1.addEventListener("change", function(){
//     if (item1.checked) {
//         label1.style.textDecorationLine = "line-through"
//     }
//     else{
//         label1.style.textDecorationLine = "none"
//     }

// })
let listaTarefas = ["Estudar HTML e CSS","Estudar JS","Fazer exercícios"]

document.onload = mostrarListaTarefas()

function mostrarListaTarefas() {

    listaTarefas.forEach(tarefa => {

        let btnCheck = document.createElement("input")
        btnCheck.type = "checkbox"

        let lblTarefa = document.createElement("label")
        // lblTarefa.for = "btn-check"
        
        document.body.appendChild(lblTarefa)
        document.body.appendChild(btnCheck)
        
    } )
    

}



let componentes = document.querySelectorAll("div .items input")
componentes.forEach(elemento => elemento.addEventListener("change", function(){
    let label =document.querySelector("label[for=" + elemento.id + "]")

    if (elemento.checked) {
        label.style.textDecorationLine = "line-through"
    }
    else {
        label.style.textDecorationLine = "none"
    }
}))

let btnAddTarefa = document.querySelector("#btn-add")
btnAddTarefa.addEventListener("click", function() {
    let novaTarefa = document.querySelector("#add-item").value
    if (novaTarefa!="") {
        if (!listaTarefas.includes(novaTarefa)) {
            listaTarefas.push(novaTarefa)
        }
        else {
            alert("Tarefa já adicionada") //fazer balaozinho
        }
    }
    else{
        alert("Campo vazio")
    }
})