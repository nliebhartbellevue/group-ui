class Player {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.score = 0;
  }

  addScore(pointValue) {
    this.score += pointValue;
  }

  minusScore(pointValue) {
    this.score -= pointValue;
  }
}

export default Player;
