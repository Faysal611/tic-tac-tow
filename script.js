//Created 2 players and turn function
let createPlayer = function(symbol) {
    let point = 0;
    let name = "";
    symbol = symbol.toUpperCase();

    if(symbol === "X") {
        name = "PLAYER 1";
    }
    else {
        name = "PLAYER 2";
    }

    let turn = function(index) {
        if(board[index] === "") {
            board[index] = symbol;
        }
        else {
            alert("You can't do that!");
            return "error";
        }

        let count = 0;

        for(let i = 0; i < 9; i += 3) {
            let check = board[i];
            for(let j = 0; j < 3; j++) {
                if(board[i + j] !== "" && board[i + j] === check) {
                    count++;
                }
            }

            if(count === 3) {
                this.point++;
                return true; //to print score
            }
            else {
                count = 0;
            }
        }


        for(let i = 0; i < 3; i++) {
            let check = board[i];
            for(let j = 0; j < 9; j += 3) {
                if(board[i + j] !== "" && board[i + j] === check) {
                    count++;
                }
            }

            if (count === 3) {
                this.point++;
                return true; //to print score
            }
            else {
                count = 0;
            }
        }


        let temp = board[0];

        for(let i = 0; i < 9; i += 4) {
            if(board[i] == temp && temp !== "") {
                count++;
            }
        }

        if (count === 3) {
            this.point++;
            return true; //to print score
        }
        else {
            count = 0;
        }

        temp = board[2];

        for (let i = 2; i < 7; i += 2) {
            if (board[i] == temp && temp !== "") {
                count++;
            }
        }

        if (count === 3) {
            this.point++;
            return true; //to print score
        }
        else {
            return false;
        }
    }

    return {symbol, name, point, turn};
}

//Player objects
let p1 = createPlayer("X");
let p2 = createPlayer("O");

//Made game board
let makeBoard = function() {
    return ["", "", "", "", "", "", "", "", ""];
};

let updateBoard = function() {
    for(let i = 0; i < 9; i++) {
        items[i].textContent = board[i];
    }
}




const btn = document.querySelector(".btn");
const score1 = document.querySelector(".p1Score");
const score2 = document.querySelector(".p2Score");
const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
const item3 = document.querySelector(".item-3");
const item4 = document.querySelector(".item-4");
const item5 = document.querySelector(".item-5");
const item6 = document.querySelector(".item-6");
const item7 = document.querySelector(".item-7");
const item8 = document.querySelector(".item-8");
const item9 = document.querySelector(".item-9");
const itemsNodeList = document.querySelectorAll(".item");
const items = Array.from(itemsNodeList);
const result = document.querySelector(".result");

let board = makeBoard();
let toggle = true;

function newGame() {
    board = makeBoard();
    updateBoard();
}

function resetGame() {
    board = makeBoard();
    updateBoard();
    score1.textContent = "PLAYER 1 score: 0";
    score2.textContent = "PLAYER 2 score: 0";
}

btn.addEventListener("click", resetGame);

for(let item of items) {
    item.addEventListener("click", (e) => {
        if(toggle) {
            toggle = false;
            let firstResult = p1.turn(Number.parseInt(e.target.dataset.value));
            if(firstResult === "error") {
                toggle = true;
            }
            
            if (firstResult === true) {
                toggle = true;
                result.style.opacity = "1";
                result.textContent = "PLAYER 1 has won!";
                setTimeout(() => {
                    result.style.opacity = "0";
                }, 2000);
                score1.textContent = `PLAYER 1 score: ${p1.point}`;
                setTimeout(() => {
                    newGame();
                }, 2000);
            }
            updateBoard();
        }
        else {
            toggle = true;
            let secondResult = p2.turn(Number.parseInt(e.target.dataset.value));
            if(secondResult === "error") {
                toggle = false;
            }
            
            if(secondResult === true) {
                toggle = true;
                result.style.opacity = "1";
                result.textContent = "PLAYER 2 has won!";
                setTimeout(()=> {
                    result.style.opacity = "0";
                }, 2000);
                score2.textContent = `PLAYER 2 score: ${p2.point}`;
                setTimeout(() => {
                    newGame();
                }, 2000);
            }
            updateBoard();
        }
    })
}