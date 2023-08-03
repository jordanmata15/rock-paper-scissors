const VALID_MOVES = ["ROCK", "PAPER", "SCISSORS"];
const OUTCOME = {
    COMPUTER_WON: "COMPUTER WON",
    PLAYER_WON: "PLAYER WON",
    TIE: "TIE"
}
const GAMES_UNTIL_VICTORY = 5;
const VICTORY_GREEN = '#23de55';

const scoreBoardDiv = document.querySelector(".scoreboard");
const playerChoiceDiv = scoreBoardDiv.querySelector(".player > .choice");
const computerChoiceDiv = scoreBoardDiv.querySelector(".computer > .choice");
const roundOutcomeDiv = scoreBoardDiv.querySelector(".result > .outcome");
const playerScoreDiv = scoreBoardDiv.querySelector(".player > .score-counter");
const computerScoreDiv = scoreBoardDiv.querySelector(".computer > .score-counter");
const tieScoreDiv = scoreBoardDiv.querySelector(".tie > .score-counter");
const playerDivList = Array.from(scoreBoardDiv.querySelectorAll(".player"));
const computerDivList = Array.from(scoreBoardDiv.querySelectorAll(".computer"));

function getComputerChoice() {
    let numPossibleMoves = VALID_MOVES.length;
    let choice = Math.ceil(Math.random() * numPossibleMoves) - 1;
    return VALID_MOVES[choice];
}

function chooseWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return OUTCOME.TIE;
    }
    if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        return OUTCOME.PLAYER_WON;
    }
    return OUTCOME.COMPUTER_WON;
}


function updateScoreBoard(playerSelection, computerSelection, result) {
    // hide scoreboard originally since it's missing any scores
    if (scoreBoardDiv.style.visibility === "hidden") {
        scoreBoardDiv.style.visibility = "visible";
    }

    playerChoiceDiv.textContent = playerSelection;
    computerChoiceDiv.textContent = computerSelection;
    roundOutcomeDiv.textContent = result;

    // make all text on the scoreboard black again
    Array.from(scoreBoardDiv.children).forEach(scoreBoardItem => {
        scoreBoardItem.style.color = 'black';
    });

    if (result === OUTCOME.PLAYER_WON) {
        playerDivList.forEach(divItem => divItem.style.color = VICTORY_GREEN);
        playerScoreDiv.textContent = +(playerScoreDiv.textContent) + 1;
    } else if (result === OUTCOME.COMPUTER_WON) {
        computerDivList.forEach(divItem => divItem.style.color = VICTORY_GREEN);
        computerScoreDiv.textContent = +(computerScoreDiv.textContent) + 1;
    } else {
        tieScoreDiv.textContent = +(tieScoreDiv.textContent) + 1;
    }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = chooseWinner(playerSelection, computerSelection);
    updateScoreBoard(playerSelection, computerSelection, result);
}

const buttons = document.querySelectorAll(".choices > button");
buttons.forEach(button =>
    button.addEventListener("click", () =>
        playRound((button.textContent).toUpperCase())
    ));