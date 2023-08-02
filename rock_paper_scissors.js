const VALID_MOVES = ["ROCK", "PAPER", "SCISSORS"]
const PLAYERS = {
    COMPUTER: 0,
    PLAYER: 1
};

let score = [0, 0];

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

function createScoreBoardDiv() {
    let scoreboard = document.createElement('div');
    scoreboard.classList.add('scoreboard');

    let playerDiv = document.createElement('div');
    let computerDiv = document.createElement('div');
    let outcomeDiv = document.createElement('div');
    
    playerDiv.classList.add('playerChoice');
    computerDiv.classList.add('computerChoice');
    outcomeDiv.classList.add('outcome');

    scoreboard.appendChild(playerDiv);
    scoreboard.appendChild(computerDiv);
    scoreboard.appendChild(outcomeDiv);

    Array.from(scoreboard.children).forEach(div => div.style["white-space"] = "pre-wrap");
    return scoreboard;
}

function displayResults(playerSelection, computerSelection, result) {
    let scoreboard = document.querySelector('.scoreboard');
    if (!scoreboard) {
        scoreboard = createScoreBoardDiv();
        document.querySelector('.game').appendChild(scoreboard);
    }
    scoreboard.querySelector('.playerChoice').textContent = "Player choice:\t\t" + playerSelection;
    scoreboard.querySelector('.computerChoice').textContent = "Computer choice:\t" + computerSelection;
    scoreboard.querySelector('.outcome').textContent = "Result:\t\t\t" + result;
}

function updateScoreBoard() {

}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = chooseWinner(playerSelection, computerSelection);
    displayResults(playerSelection, computerSelection, result)
}

const buttons = document.querySelectorAll('.choices > button');
buttons.forEach(button => 
    button.addEventListener('click', () =>
        playRound((button.textContent).toUpperCase())
));