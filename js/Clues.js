class Clues {
  constructor(data) {
    this.data = data;
    this.randomCat;
    this.categories;
    this.cards;
  }

  shuffleCategories() {
    let categories = Object.entries(this.data.categories);
    let random = categories.sort(() => Math.random() - 0.5);
    this, (randomCat = random);
  }

  pickCategories() {
    this.categories = this.randomCat.splice(0, 4);
  }

  findMatchingQuestions() {
    let allQuestions = [];
    let points = [100, 200, 500, 1000, 2000];
    let clues = this.data.clues;
    let categoryIds = this.categories.map(category => category[1]);
    categoryIds.map(id => {
      points.forEach(point => {
        allQuestions.push(
          clues
            .filter(clue => clue.categoryId === id)
            .find(clue => clue.pointValue === point)
        );
      });
    });

    this.cards = allQuestions.sort((a, b) => a.pointValue - b.pointValue);
  }
}
