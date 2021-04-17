let board = ["","","","","","","","",""];
let playerTime = 0;
let symbols = ["o","x"];

function handleMove(position){

    if (board[position] === "") {
        board[position] = symbols[playerTime];
        playerTime = playerTime == 0 ? 1 : 0;     
    };
    
}