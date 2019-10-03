import Turn from "./Turn";

class Round {
  constructor(players, game) {
    this.players = players;
    this.currentTurn;
    this.currentPlayer = 0;
    this.game = game;
    this.roundCards = 20;
  }

  returnDailyDouble() {
    return Array.from({ length: this.numberOfRounds }, () =>
      Math.floor(Math.random() * 20)
    );
  }

  returnGameWinner(players) {
    return players.sort((a, b) => b.score - a.score)[0].name;
  }

  beginRound() {
    this.currentTurn = new Turn(this.players[0], this);
  }

  findPlayer() {
    this.currentPlayer++;
    return this.players[this.currentPlayer];
  }

  changePlayer() {
    if (this.currentPlayer < 2) {
      this.currentPlayer++;
    } else {
      this.currentPlayer = 0;
    }
  }

  continueRound() {
    this.currentTurn = new Turn(this.players[this.currentPlayer], this);
  }
}

export default Round;
