document.addEventListener("DOMContentLoaded", ()=> {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    })
})

function handleClick(event) {

    if (event.target.className === "square") {
        let square = event.target;
        let position = square.id;
    
        console.log(event);
        handleMove(position);
        updateSquares();
    }

    
}

function updateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != ""){
            console.log(symbol);
            square.innerHTML = `<div class="${symbol}"></div>`
        }
    })
}