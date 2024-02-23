let item1 = document.querySelector("#item1")
let label1 = document.querySelector("#label1")

item1.addEventListener("change", function(){
    if (item1.checked) {
        label1.style.textDecorationLine = "line-through"
    }
    else{
        label1.style.textDecorationLine = "none"
    }

})





