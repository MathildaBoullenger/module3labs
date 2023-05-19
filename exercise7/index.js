const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    foul() {
        this.fouls += 1;
        return this;
    },
    halfTime() {
        console.log(`Halftime score is ${this.score} and ${this.fouls} fouls`);
    },
    finalScore() {
        console.log(`Final score is ${this.score} and ${this.fouls} fouls`);
    }
}

//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().foul().freeThrow().freeThrow().basket().foul().threePointer().halfTime();
basketballGame.basket().threePointer().foul().freeThrow().basket().freeThrow().basket().foul().threePointer().freeThrow().finalScore();

/*to see the final score, we will need to know which actions happen.
Imagining that the game stopped half time, we could simply call line 29.
Otherwise, the sucession of scoring will be chained in order until 'finalScore()' as seen in an example on line 30.*/
