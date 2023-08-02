const VALID_MOVES = ["ROCK", "PAPER", "SCISSORS"];
const OUTCOME = {
    COMPUTER_WON: "COMPUTER WON",
    PLAYER_WON: "PLAYER WON",
    TIE: "TIE"
}

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
    let scoreboardDiv = document.querySelector(".scoreboard");
    // hide scoreboard originally since it's missing any scores
    if (scoreboardDiv.style.visibility === "hidden") {
        scoreboardDiv.style.visibility = "visible";
    }

    scoreboardDiv.querySelector(".player > .choice").textContent = playerSelection;
    scoreboardDiv.querySelector(".computer > .choice").textContent = computerSelection;
    scoreboardDiv.querySelector(".result > .outcome").textContent = result;

    // make all text on the scoreboard black again
    Array.from(scoreboardDiv.children).forEach(scoreBoardItem => {
        scoreBoardItem.style.color = 'black';
    });
    

    if (result === OUTCOME.PLAYER_WON) {
        // make the winner's text green
        scoreboardDiv.querySelector(".player").style.color = '#23de55';
        // update score
        let playerWinCount = scoreboardDiv.querySelector(".player > .score-counter").textContent;
        scoreboardDiv.querySelector(".player > .score-counter").textContent = +playerWinCount + 1;
    } else if (result === OUTCOME.COMPUTER_WON) {
        scoreboardDiv.querySelector(".computer").style.color = '#23de55';
        let computerWinCount = scoreboardDiv.querySelector(".computer > .score-counter").textContent;
        scoreboardDiv.querySelector(".computer > .score-counter").textContent = +computerWinCount + 1;
    } else {
        let currentTieCount = scoreboardDiv.querySelector(".tie > .score-counter").textContent;
        scoreboardDiv.querySelector(".tie > .score-counter").textContent = +currentTieCount + 1;
    }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = chooseWinner(playerSelection, computerSelection);
    updateScoreBoard(playerSelection, computerSelection, result)
}

const buttons = document.querySelectorAll(".choices > button");
buttons.forEach(button => 
    button.addEventListener("click", () =>
        playRound((button.textContent).toUpperCase())
));