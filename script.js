// initialize empty strings
var userInput = ""
var gameresults ="";
var playAgainChoice = true;



while(playAgainChoice){
    // take in a user's choice, also change potential lower case entries into uppercase
    userInput = prompt("Let's play rock paper scissors. Please Enter R, P, or S.").toUpperCase();

    // setup a random number generator
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    // use random number generator to generate a random number either 0, 1, or 2
    var compRandom = getRandomInt(0, 3);

    // word bank for computer's choice
    var compInput = "RPS";

    // winning scenarios
    if(userInput=="R" && compInput[compRandom]=="S"){
        alert("You win.");
        gameresults += "Win";
        prompt("Play again? Y or N")
    }else if(userInput=="P" && compInput[compRandom]=="R"){
        alert("You win.");
        gameresults += "Win";
    }else if(userInput=="S" && compInput[compRandom]=="P"){
        alert("You win.");
        gameresults += "Win";

    // losing scenarios
    }else if(userInput=="R" && compInput[compRandom]=="P"){
        alert("You Lose.");
        gameresults += "Loss";
    }else if(userInput=="P" && compInput[compRandom]=="S"){
        alert("You Lose.");
        gameresults += "Loss";
    }else if(userInput=="S" && compInput[compRandom]=="R"){
            alert("You Lose.");
    gameresults += "Loss";

    // tie scenario
    }else{
        alert("Game was a tie.");
    }
}

var scoreBoard = document.createElement("div");
scoreBoard.textContent = gameresults;


console.log(gameresults);