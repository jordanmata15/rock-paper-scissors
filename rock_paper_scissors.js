const EnumToMove = {
    0: "ROCK",
    1: "PAPER",
    2: "SCISSORS"
}

const MoveOptions = Object.values(EnumToMove);

function getPlayerChoice() {
    let playerSelection = null;
    while (!MoveOptions.includes(playerSelection)) {
        playerSelection = prompt("Please enter one of the following options:\nROCK, PAPER, or SCISSORS").toUpperCase();
    }
    return playerSelection;
}

function getComputerChoice() {
    let numPossibleMoves = MoveOptions.length;
    let choice = Math.ceil(Math.random() * numPossibleMoves) - 1;
    return EnumToMove[choice];
}

function chooseWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "TIE";
    }
    if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        return "PLAYER WON";
    }
    return "COMPUTER WON";
}

function printResult(playerSelection, computerSelection, result) {
    console.log("Player choice:\t\t" + playerSelection +
        "\nComputer choice:\t" + computerSelection +
        "\nResult:\t\t\t\t" + result);
}

function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let result = chooseWinner(playerSelection, computerSelection);
    printResult(playerSelection, computerSelection, result);
}

function game() {
    for (let i = 0; i < 5; ++i) {
        playRound();
    }
}

game();