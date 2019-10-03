import Round from "./round";
import Turn from "./Turn";

class Game {
  constructor(clues) {
    this.clues = clues;
    this.players = [];
    this.roundNum = 1;
    this.round;
  }

  startRound() {
    this.clues.shuffleCategories();
    this.clues.pickCategories();
    this.clues.findMatchingQuestions();
  }

  gameStart() {
    this.round = new Round(this.players, this);
    this.round.beginRound();
  }
}

export default Game;
