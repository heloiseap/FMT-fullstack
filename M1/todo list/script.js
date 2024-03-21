// import tarefas from "./tarefas.json" assert {type: 'json'}
// let listaTarefas = tarefas.tarefas
let listaTarefas = JSON.parse(localStorage.getItem("listaTarefas"));
window.onload = mostrarListaTarefas;

function mostrarListaTarefas() {
  let divToDoList = document.querySelector("#todo-list");
  divToDoList.innerHTML = "";

  listaTarefas.forEach((tarefa) => {
    let idTarefa = listaTarefas.indexOf(tarefa);

    let divTarefa = document.createElement("div");
    divTarefa.classList.add("items");

    let btnCheck = document.createElement("input");
    btnCheck.type = "checkbox";
    btnCheck.id = "check-" + idTarefa;
    btnCheck.checked = tarefa.concluido;
    btnCheck.classList.add("item");

    btnCheck.addEventListener("change", function () {
      checkTarefa(idTarefa);
    });

    let lblTarefa = document.createElement("label");
    lblTarefa.htmlFor = "check-" + idTarefa;
    lblTarefa.innerHTML = tarefa.titulo;
    lblTarefa.classList.add("item");
    lblTarefa.id = "lbl-" + idTarefa;
    lblTarefa.style.textDecoration =
      tarefa.concluido == true ? "line-through" : "none";

    let btnExcluir = document.createElement("button");
    btnExcluir.id = "btnCheck-" + idTarefa;
    btnExcluir.innerHTML = "<i class='bi bi-trash'></i>";

    btnExcluir.addEventListener("click", function () {
      let confirma = window.confirm("Deseja excluir a tarefa selecionada?");
      if (confirma) {
        excluirTarefa(idTarefa);
      }
    });

    document.querySelector("#todo-list").appendChild(divTarefa);
    divTarefa.appendChild(btnCheck);
    divTarefa.appendChild(lblTarefa);
    divTarefa.appendChild(btnExcluir);
  });

  contagemTarefas();
}

//evento de apertar na checkbox
function checkTarefa(idTarefa) {
  let tarefa = listaTarefas[idTarefa];
  let lblTarefa = document.querySelector("#lbl-" + idTarefa);

  if (tarefa.concluido == false) {
    tarefa.concluido = true;
    lblTarefa.style.textDecoration = "line-through";
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
    
    } else {
    tarefa.concluido = false;
    lblTarefa.style.textDecoration = "none";
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));

  }
}

//excluir
function excluirTarefa(idtarefa) {
  listaTarefas.splice(idtarefa, 1);
  localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
  mostrarListaTarefas();
}

//adicionar tarefas
function adicionarTarefa(novaTarefa) {
  if (!!novaTarefa) {
    let tarefa = {
      titulo: novaTarefa,
      concluido: false,
    };

    if (listaTarefas.filter((item) => item.titulo == novaTarefa).length == 0) {
      // listaTarefas.push(tarefa)
      listaTarefas.push(tarefa);
      localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
      //limpa a tela e mostra lista atualizada:
      let inputTarefa = document.querySelector("#add-item");
      inputTarefa.value = "";
      mostrarListaTarefas();
    } else {
      alert("Tarefa já adicionada"); //fazer balaozinho
    }
  } else {
    alert("Campo vazio");
  }
}

let btnAddTarefa = document.querySelector("#btn-add");
btnAddTarefa.addEventListener("click", function () {
  let novaTarefa = document.querySelector("#add-item").value;
  adicionarTarefa(novaTarefa);
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
});

//numero de tarefas
function contagemTarefas() {
  let divContagem = document.querySelector("#quantidade-tarefas");
  divContagem.innerHTML = "";
  let textoContagem = document.createElement("span");
  textoContagem.innerHTML = "Quantidade de tarefas: " + listaTarefas.length;
  divContagem.appendChild(textoContagem);
}
