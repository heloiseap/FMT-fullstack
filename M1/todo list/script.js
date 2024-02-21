let item1 = document.querySelector("#item1")

if (item1){
    item1.addEventListener("click",tachado())

}

function tachado() {
    if(item1) {
        let label = document.querySelector("#item1.label");
        label.style.textDecoration = "line-through";
    }

}




