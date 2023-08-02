const VALID_MOVES = ["ROCK", "PAPER", "SCISSORS"]

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

function createResultsDiv() {
    resultsDiv = document.createElement('div');
    resultsDiv.classList.add('results');

    playerDiv = document.createElement('div');
    computerDiv = document.createElement('div');
    outcomeDiv = document.createElement('div');
    
    playerDiv.classList.add('playerChoice');
    computerDiv.classList.add('computerChoice');
    outcomeDiv.classList.add('outcome');

    resultsDiv.appendChild(playerDiv);
    resultsDiv.appendChild(computerDiv);
    resultsDiv.appendChild(outcomeDiv);

    Array.from(resultsDiv.children).forEach(div => div.style["white-space"] = "pre-wrap");
    return resultsDiv;
}

function displayResults(playerSelection, computerSelection, result) {
    let resultsDiv = document.querySelector('.results');
    if (!resultsDiv) {
        resultsDiv = createResultsDiv();
        document.querySelector('.game').appendChild(resultsDiv);
    }
    resultsDiv.querySelector('.playerChoice').textContent = "Player choice:\t\t" + playerSelection;
    resultsDiv.querySelector('.computerChoice').textContent = "Computer choice:\t" + computerSelection;
    resultsDiv.querySelector('.outcome').textContent = "Result:\t\t\t" + result;
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