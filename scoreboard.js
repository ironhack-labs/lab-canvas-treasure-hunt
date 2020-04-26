class Scoreboard {
  constructor(game) {
    this.game = game;
    this.score = game.score;
  }

  drawScoreboard() {
    const context = this.game.context;
    const score = this.game.score;
    console.log(score); //sólo para ver en la consola que el score esté funcionando
    context.fillStyle = 'red';
    context.font = '24px "Roboto", sans-serif';
    context.fillText = (`${score} points`, 50, 20);
  }
}
