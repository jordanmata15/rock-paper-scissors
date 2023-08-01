const VALID_MOVES = ["ROCK", "PAPER", "SCISSORS"]

function getPlayerChoice() {
    let playerSelection = null;
    while (!VALID_MOVES.includes(playerSelection)) {
        playerSelection = prompt("Please enter one of the following options:\n" +
                                    "ROCK, PAPER, or SCISSORS").toUpperCase();
    }
    return playerSelection;
}

function getComputerChoice() {
    let numPossibleMoves = VALID_MOVES.length;
    let choice = Math.ceil(Math.random() * numPossibleMoves) - 1;
    return VALID_MOVES[choice];
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