let listaTarefas = [["Estudar HTML e CSS",false], ["Estudar JS",true], ["Fazer exercícios",false]]
window.onload = mostrarListaTarefas

function mostrarListaTarefas() {
    let divToDoList = document.querySelector("#todo-list")
    divToDoList.innerHTML = ""

    listaTarefas.forEach(tarefa => {
        const idTarefa = listaTarefas.indexOf(tarefa)

        const divTarefa = document.createElement("div")
        divTarefa.classList.add("items")

        const btnCheck = document.createElement("input")
        btnCheck.type = "checkbox"
        btnCheck.id = "check-" + idTarefa
        btnCheck.classList.add("item")
        
        btnCheck.addEventListener("change", function () {
            if (btnCheck.checked) {
                lblTarefa.style.textDecorationLine = "line-through";
                tarefa[1] = true;
            } else {
                lblTarefa.style.textDecorationLine = "none";
                tarefa[1] = false;

            }
        })

        const lblTarefa = document.createElement("label")
        lblTarefa.htmlFor = "check-" + idTarefa
        lblTarefa.innerHTML = tarefa[0]
        lblTarefa.classList.add("item")

        btnExcluir = document.createElement("button")
        btnExcluir.id = "btnCheck-" + idTarefa
        btnExcluir.innerHTML = "<i class='bi bi-trash'></i>"

        document.querySelector("#todo-list").appendChild(divTarefa)
        divTarefa.appendChild(btnCheck)
        divTarefa.appendChild(lblTarefa)
        divTarefa.appendChild(btnExcluir)
    }
    )
}

//marcar tarefa


// const tarefas = document.querySelectorAll(".item") 
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
            listaTarefas.push(novaTarefa)
            console.log(listaTarefas)
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