const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const targetWord = "apple";
let attempts=0;
let maxattempts=6;

function askGuess(){
rl.question("Enter your guess: ", function(guess) {

    guess = guess.toLowerCase();

    if (guess.length !== 5) {
        console.log("Please enter exactly 5 letters.");
        askGuess();
        return;
    }
    attempts++;
    let result="";

    for (let i = 0; i < 5; i++) {

        if (guess[i] === targetWord[i]) {
            result+="✓";
        }
        else if (targetWord.includes(guess[i])) {
            result+="y";
        }
        else {
            result+="x";
        }

    }
    console.log(result);
    if(guess===targetWord){
        console.log("Yayy! You Won!");
        rl.close();
        return;
    }
    if(attempts===maxattempts){
        console.log("You Lost!");
        console.log("The word was: "+targetWord);
        rl.close();
        return;
    }
    console.log("Attempts left: "+maxattempts-attempts);
    askGuess();

    rl.close();
});
}
console.log("***WORDLE***");
console.log("Guess the five letter word!");
console.log("You have 6 attempts!");
