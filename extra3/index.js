function guessNum() {
    let guess = require('prompt-sync')()('Which number (between 1 and 10) are you guessing?: ');
    let result = Math.floor(Math.random() * 11); //We can change the range here
    if (guess == "exit") {
        process.exit();
    };
    if (guess == result) {
        return ("You guessed right!")
    }
    else {
        return ("You guessed wrong!")
    }
}

console.log(guessNum())

//;console.log(require('prompt-sync')()('tell me something about yourself: '))