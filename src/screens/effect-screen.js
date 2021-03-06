/** @constructor */
var HorizontalWipe = function(game) {
  this.game = game;
  this.originalSpeed = game.timeStep;
  game.timeStep = 40;
  this.x = 0;
  this.actions = {};
};
HorizontalWipe.prototype.update = function() {
  if (this.x > 32) {
    this.manager.closeCurrent();
    this.game.timeStep = this.originalSpeed;
    return;
  }
  this.x++;
};
HorizontalWipe.prototype.render = function(display) {
  display.drawVerticalLine(this.x, 0, 16, true);
  display.drawVerticalLine(32 - this.x, 0, 16, true);
  display.drawVerticalLine(this.x - 1, 0, 16, false);
  display.drawVerticalLine(32 - this.x + 1, 0, 16, false);
  display.outputBuffer();
};

/** @constructor */
var VerticalWipe = function(game) {
  this.game = game;
  this.originalSpeed = game.timeStep;
  game.timeStep = 80;
  this.y = 0;
  this.actions = {};
};
VerticalWipe.prototype.update = function() {
  if (this.y > 16) {
    this.manager.closeCurrent();
    this.game.timeStep = this.originalSpeed;
    return;
  }
  this.y++;
};
VerticalWipe.prototype.render = function(display) {
  display.drawHorizontalLine(0, this.y, 32, true);
  display.drawHorizontalLine(0, 16 - this.y, 32, true);
  display.drawHorizontalLine(0, this.y - 1, 32, false);
  display.drawHorizontalLine(0, 16 - this.y + 1, 32, false);
  display.outputBuffer();
};