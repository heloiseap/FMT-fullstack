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
let listaTarefas = ["Estudar HTML e CSS", "Estudar JS", "Fazer exercícios"]
window.onload = mostrarListaTarefas

function mostrarListaTarefas() {
    listaTarefas.forEach(tarefa => {
        let idTarefa = listaTarefas.indexOf(tarefa)

        let divTarefa = document.createElement("div")
        divTarefa.classList.add("items")
        
        let btnCheck = document.createElement("input")
        btnCheck.type = "checkbox"
        btnCheck.id = "check-" + idTarefa
        btnCheck.classList.add("item")
         
        let lblTarefa = document.createElement("label")
        lblTarefa.htmlFor = "check-" + idTarefa
        lblTarefa.innerHTML = tarefa
        lblTarefa.classList.add("item")

        btnExcluir = document.createElement("button")
        btnExcluir.innerHTML = "<i class='bi bi-trash'></i>"        


        document.querySelector("#todo-list").appendChild(divTarefa)
        divTarefa.appendChild(btnCheck)
        divTarefa.appendChild(lblTarefa)
        divTarefa.appendChild(btnExcluir)
    })
}





let componentes = document.querySelectorAll("div .items input")
componentes.forEach(elemento => elemento.addEventListener("change", function () {
    let label = document.querySelector("label[for=" + elemento.id + "]")

    if (elemento.checked) {
        label.style.textDecorationLine = "line-through"
    }
    else {
        label.style.textDecorationLine = "none"
    }
}))

let btnAddTarefa = document.querySelector("#btn-add")
btnAddTarefa.addEventListener("click", function () {
    let novaTarefa = document.querySelector("#add-item").value
    if (novaTarefa != "") {
        if (!listaTarefas.includes(novaTarefa)) {
            listaTarefas.push(novaTarefa)
            console.log(listaTarefas)
            let inputTarefa = document.querySelector("#add-item")
            inputTarefa.value = ""

        }
        else {
            alert("Tarefa já adicionada") //fazer balaozinho
        }
    }
    else {
        alert("Campo vazio")
    }
})