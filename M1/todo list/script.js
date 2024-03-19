import tarefas from "./tarefas.json" assert {type: 'json'}
let listaTarefas = tarefas.tarefas

// let listaTarefas = [["Estudar HTML e CSS", false], ["Estudar JS", true], ["Fazer exercícios", false]]
// console.log(listaTarefas)
// listaTarefas.forEach(tarefa=>{
//     console.log(tarefa.titulo)
// })
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
        btnCheck.checked = tarefa.concluido
        btnCheck.classList.add("item")

        btnCheck.addEventListener("change", function () {
            checkTarefa(idTarefa)
        })

        let lblTarefa = document.createElement("label")
        lblTarefa.htmlFor = "check-" + idTarefa
        lblTarefa.innerHTML = tarefa.titulo
        lblTarefa.classList.add("item")
        lblTarefa.id = "lbl-" + idTarefa
        lblTarefa.style.textDecoration = (tarefa[1] == true ? "line-through" : "none")

        let btnExcluir = document.createElement("button")
        btnExcluir.id = "btnCheck-" + idTarefa
        btnExcluir.innerHTML = "<i class='bi bi-trash'></i>"

        btnExcluir.addEventListener("click", function () {
            let confirma = window.confirm("Deseja excluir a tarefa selecionada?")
            if (confirma){excluirTarefa(idTarefa)}
        })

        document.querySelector("#todo-list").appendChild(divTarefa)
        divTarefa.appendChild(btnCheck)
        divTarefa.appendChild(lblTarefa)
        divTarefa.appendChild(btnExcluir)
    })

    contagemTarefas()

}

//evento de apertar na checkbox
function checkTarefa(idTarefa) {
    let tarefa = listaTarefas[idTarefa]
    let lblTarefa = document.querySelector("#lbl-"+idTarefa)

    if (tarefa[1] == false) {
        tarefa[1] = true
        lblTarefa.style.textDecoration = "line-through"
    } else {
        tarefa[1] = false
        lblTarefa.style.textDecoration = "none"
    }
}

//excluir
function excluirTarefa(idtarefa) {
    listaTarefas.splice(idtarefa,1)
    mostrarListaTarefas()
}

//adicionar tarefas

function adicionarTarefa(novaTarefa){
    if (!!novaTarefa) {
        let tarefa = {
            titulo: novaTarefa,
            concluido: false
        }

        console.log(listaTarefas.filter(tarefa=> tarefa.titulo == novaTarefa))
        //n esta reconhecendo quando ja foi add
        if (!listaTarefas.includes(tarefa)) {
            console.log(tarefa)
            console.log(listaTarefas)
            listaTarefas.push(tarefa)
            //limpa a tela e mostra lista atualizada:
            let inputTarefa = document.querySelector("#add-item")
            inputTarefa.value = ""
            mostrarListaTarefas()
        } else {
            alert("Tarefa já adicionada") //fazer balaozinho
        }
    } else {
        alert("Campo vazio")
    }   
}


let btnAddTarefa = document.querySelector("#btn-add")
btnAddTarefa.addEventListener("click", function () {
    let novaTarefa = document.querySelector("#add-item").value
    adicionarTarefa(novaTarefa)
    // if (!!novaTarefa) {
    //     if (!listaTarefas.includes(novaTarefa)) {
    //         listaTarefas.push([novaTarefa, false])
    //         let inputTarefa = document.querySelector("#add-item")
    //         inputTarefa.value = ""
    //         mostrarListaTarefas()

    //     } else {
    //         alert("Tarefa já adicionada") //fazer balaozinho
    //     }
    // } else {
    //     alert("Campo vazio")
    // }
})

//numero de tarefas
function contagemTarefas() {
    let divContagem = document.querySelector("#quantidade-tarefas")
    divContagem.innerHTML = ""
    let textoContagem = document.createElement("span")
    textoContagem.innerHTML ="Quantidade de tarefas: " + listaTarefas.length
    divContagem.appendChild(textoContagem)

}