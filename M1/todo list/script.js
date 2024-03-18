let listaTarefas = [["Estudar HTML e CSS", false], ["Estudar JS", true], ["Fazer exercícios", false]]
window.onload = mostrarListaTarefas

function mostrarListaTarefas() {
    let divToDoList = document.querySelector("#todo-list")
    divToDoList.innerHTML = ""

    listaTarefas.forEach(tarefa => {
        let idTarefa = listaTarefas.indexOf(tarefa)

        let divTarefa = document.createElement("div")
        divTarefa.classList.add("items")

        let btnCheck = document.createElement("input")
        btnCheck.type = "checkbox"
        btnCheck.id = "check-" + idTarefa
        btnCheck.checked = tarefa[1]
        btnCheck.classList.add("item")

        btnCheck.addEventListener("change", function () {
            checkTarefa(idTarefa)
        })

        let lblTarefa = document.createElement("label")
        lblTarefa.htmlFor = "check-" + idTarefa
        lblTarefa.innerHTML = tarefa[0]
        lblTarefa.classList.add("item")
        lblTarefa.id = "lbl-" + idTarefa
        lblTarefa.style.textDecoration = (tarefa[1] == true ? "line-through" : "none")

        btnExcluir = document.createElement("button")
        btnExcluir.id = "btnCheck-" + idTarefa
        btnExcluir.innerHTML = "<i class='bi bi-trash'></i>"

        btnExcluir.addEventListener("click", function () {
        })

        document.querySelector("#todo-list").appendChild(divTarefa)
        divTarefa.appendChild(btnCheck)
        divTarefa.appendChild(lblTarefa)
        divTarefa.appendChild(btnExcluir)
    })
}

//evento de apertar na checkbox
function checkTarefa(idTarefa) {
    let tarefa = listaTarefas[idTarefa]
    let lblTarefa = document.querySelector("#lbl-"+idTarefa)

    if (tarefa[1] == false) {
        tarefa[1] = true
        lblTarefa.style.textDecoration = "line-through"
        console.log(tarefa[1])
    } else {
        tarefa[1] = false
        lblTarefa.style.textDecoration = "none"
        console.log(tarefa[1])

    }
}

//excluir
function excluirTarefa(idtarefa) {
    // listaTarefas.filter(tarefa[0] !==)

}

//  let tarefas = document.querySelectorAll(".item") 
// tarefas.forEach(elemento => elemento.addEventListener("change", function () {
//     let label = document.querySelector("label[for=" + elemento.id + "]")

//     if (elemento.checked) {
//         label.style.textDecorationLine = "line-through"
//     }
//     else {
//         label.style.textDecorationLine = "none"
//     }
// }))

//adicionar tarefas
let btnAddTarefa = document.querySelector("#btn-add")
btnAddTarefa.addEventListener("click", function () {

    let novaTarefa = document.querySelector("#add-item").value
    if (novaTarefa != "") {
        if (!listaTarefas.includes(novaTarefa)) {
            listaTarefas.push([novaTarefa, false])
            let inputTarefa = document.querySelector("#add-item")
            inputTarefa.value = ""
            mostrarListaTarefas()

        } else {
            alert("Tarefa já adicionada") //fazer balaozinho
        }
    } else {
        alert("Campo vazio")
    }
})