

function increaseHomeScoreBy(value) {
    if (homeScore + value < 100) { homeScore += value }
    else { homeScore = 99 }
    homeScoreElem.innerText = homeScore; 
}


function increaseGuestScoreBy(value) {
    if (guestScore + value < 100) { guestScore += value }
    else { guestScore = 99 }
    guestScoreElem.innerText = guestScore;
}


function renderInitialScores() {
    homeScore = 0;
    guestScore = 0;
    homeScoreElem.innerText = homeScore;
    guestScoreElem.innerText = guestScore;
}


function activateEventListeners() {
    document.getElementById("js-home-score-1").
        addEventListener("click", () => {increaseHomeScoreBy(1)});
    document.getElementById("js-home-score-2").
        addEventListener("click", () => {increaseHomeScoreBy(2)});
    document.getElementById("js-home-score-3").
        addEventListener("click", () => {increaseHomeScoreBy(3)});
    document.getElementById("js-guest-score-1").
        addEventListener("click", () => {increaseGuestScoreBy(1)});
    document.getElementById("js-guest-score-2").
        addEventListener("click", () => {increaseGuestScoreBy(2)});
    document.getElementById("js-guest-score-3").
        addEventListener("click", () => {increaseGuestScoreBy(3)});
    document.getElementById("js-btn-reset").
        addEventListener("click", renderInitialScores);
}


// if __name__ == "__main__":
let homeScore;
let guestScore;

const homeScoreElem = document.getElementById("home-score");
const guestScoreElem = document.getElementById("guest-score");

activateEventListeners();
renderInitialScores();
