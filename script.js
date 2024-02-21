let compScore = 0;
let userScore = 0;

const choices = document.querySelectorAll(".option");

const score_user = document.querySelector("#you-score");
const score_comp = document.querySelector("#comp-score");

const gencompChoice = () => {
    const choices = ["rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

const showWinner = (userWin) => {
    if (userWin) {
        score_user.textContent = userScore++;
        //score_user.innerHTML += "<span class='green'>You Win!</span>";
    } else {
        score_comp.textContent= compScore++;
       // score_comp.innerHTML += "<span class='red'>Comp Wins!</span>";
    }
};

const playGame = (userChoice) => {
    const compChoice = gencompChoice();
    let userWin = false;  // Initialize userWin to false by default

    if (userChoice === compChoice) {
        console.log("It's a draw");
    } else {
        switch (userChoice) {
            case "rock":
                userWin = compChoice === "scissors";
                break;
            case "paper":
                userWin = compChoice === "rock";
                break;
            case "scissors":
                userWin = compChoice === "paper";
                break;
        }
    }

    showWinner(userWin);
};

choices.forEach((option) => {
    option.addEventListener("click", () => {
        const userChoice = option.getAttribute("alt");
        playGame(userChoice);
    });
});
