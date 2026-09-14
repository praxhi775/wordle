const readline = require("readline");
const words= require("./dictionary.json");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const randomIndex = Math.floor(Math.random() * words.length);


const targetWord = words[randomIndex];
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
    let result=["x","x","x","x","x"];
    let remainingLetter=targetWord.split("");

    for (let i = 0; i < 5; i++) {

        if (guess[i] === targetWord[i]) {
            result[i]="✓";
            remainingLetter[i]=null;
        }
        
    }
    for(let i=0;i<5;i++){
        if (result[i]==="✓"){
            continue;
        }
        let index = remainingLetter.indexOf(guess[i]);
        if(index!==-1){
            result[i]="y";
            remainingLetter[i]=null;

            
        }
    }
    console.log(result.join(" "));
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
    console.log("Attempts left: "+(maxattempts-attempts));
    askGuess();

    
});
}
console.log("***WORDLE***");
console.log("Guess the five letter word!");
console.log("You have 6 attempts!");
askGuess();
