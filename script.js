let user = 0;
let comp = 0;
const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");
const message=document.querySelector(".message");
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    let options = ['rock', 'paper', 'scissor'];
    const index = Math.floor(Math.random() * 3);
    return options[index];
};
const showWinner = (userWin,compChoice,userChoice) => {
    if (userWin) {
        user++;
        console.log("You won");
        msg.innerText=`You won the game. AI chose ${compChoice}`;
        message.style.backgroundColor="green";
        user_score.innerText=user;
    } else {
        comp++;
        console.log("AI won");
        msg.innerText=`AI won. AI chose ${compChoice} `;
        message.style.backgroundColor="red";
        comp_score.innerText=comp;
    }
}
const drawGame = () => {
    console.log("Draw game ");
    msg.innerText=`Draw game`;
    message.style.backgroundColor="chocolate";
};
const playGame = (userChoice) => {
    console.log("user choice=", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer  choice=", compChoice);
    if (userChoice == compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice == "rock" && compChoice == "paper") {
            userWin = false;
        } else if (userChoice == "paper" && compChoice == "scissor") {
            userWin = false;
        } else if (userChoice == "scissor" && compChoice == "rock") {
            userWin = false;
        }
        showWinner(userWin,compChoice,userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
