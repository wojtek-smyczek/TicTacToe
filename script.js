function playerPick() {
    const myRows = null;
    const myColumns = null;

    return { myRows, myColumns };

}


function Gameboard() {
    const board = [];
    const rows = 3;
    const columns = 3;


    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i][j] = 0;
        }
    }

    return { board, rows, columns };
}

const { board, rows, columns } = Gameboard();

// funkcja sprawdzajaca czy po ostatnim dodaniu elementu do gry 
// ktoras z opcji wygrywa
function checkBoard(playerPick) {
    let playerToken = board[myRows, myColumns]; //tutaj bedzie liczba (albo 1 albo 2)

    function rowMatch() {
        for (let element of board[myRows]) {
            if (element !== playerPick) {
                return false;
            }
        }
        return true;
    }

    function columnMatch() {
        for (let element of board[myColumns]) {
            if (element !== playerPick) {
                return false
            }
        }
        return true;
    }

    function firstDiagonalMatch() {
        for (let i = 0; i < rows; i++) {
            if (board[i][i] !== playerPick) {
                return false;
            }
        }
        return true;
    }

    function secondDiagonalMatch() {
        for (let i = 0; i < rows; i++) {
            if (board[i][columns - 1 - i] !== playerPick) {
                return false;
            }
        }
        return true;
    }

    return (function () {
        secondDiagonalMatch();
        firstDiagonalMatch();
        columnMatch();
        rowMatch();
    }())
}

function pickToken() {
    console.log("Type 1 for circle or 2 for cross.")

    let input = prompt("Pick your hero! Player 1 - circle. Player 2 - cross. Type '1' to pick player 1 or '2' for player 2.");

    while (input !== "1" && input !== "2") {
        console.log("Type '1' or '2'");
        input = prompt("Pick your hero! Player 1 - circle. Player 2 - cross. Type '1' to pick player 1 or '2' for player 2.");
    }

    return { input };
}

function drawBoard() {
    for (let i = 0; i < rows; i++) {
        console.log(board[i]);
    }
};


drawBoard();

