let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-el")
let guestScoreEl = document.getElementById("guest-el")


function homeBtn1() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore; 
}

function homeBtn2() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function homeBtn3() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function guestBtn1() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function guestBtn2() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function guestBtn3() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0; 
}