function mudaImage(element){

    element.src = "../aula06/images/face.jpg"
    element.width = "250";

}

var nova = document.querySelector("#nova")


nova.addEventListener("click", function(){

    nova.setAttribute("src", "../aula06/images/face.jpg")

})

var lista = document.querySelector("#lista")

let qtde = lista.dataset.tamanho

for (let index = 1; index <= qtde; index++) {
    
    /**@type {HTMLLIElement} */
    let novoItem = document.createElement("li")
    novoItem.textContent = index

    document.body.appendChild(novoItem)
    
}

console.log(qtde)