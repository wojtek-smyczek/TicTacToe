function gameboard() {

    let createBoard = (n, val = 0) => Array(n).fill(val);
    let board = createBoard(9, 0);

    // metoda do zmiany pola

    return {
        changeField: function (pick, number) {

            if (number > 8 || number < 0) {
                return "Out of range";
            }

            if (pick === 'o') {
                board[number] = 'o';
            } else if (pick === 'x') {
                board[number] = 'x';
            } else {
                return "You entered a wrong symbol."
            }
        },

        showBoard: function () {
            for (let i = 0; i < board.length; i += 3) {
                console.log(board.slice(i, i + 3));
            }
        },

    }
}

function player(name) {

    let score = 0;
    return {
        name,
        getScore: function () {
            return score;
        },
        incrementScore: function () {
            score += 1;
            return score;
        },
        printScore() {
            console.log(this.getScore());
        },
    }
}


let newGame = gameboard();
newGame.showBoard();

let newPlayer = player('Adam');

newPlayer.incrementScore();
newPlayer.printScore();