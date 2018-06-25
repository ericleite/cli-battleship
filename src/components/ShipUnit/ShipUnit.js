class ShipUnit {
  constructor(x, y, health = 1) {
    if (isNaN(x)) {
      throw new Error('Initial x position is required.');
    }
    this.x = x;

    if (isNaN(y)) {
      throw new Error('Initial y position is required.');
    }
    this.y = y;

    this.state = {
      health
    }
  }

  getHealth() {
    return this.state.health;
  }

  damage(amount = 1) {
    let reducedHealth = this.state.health - amount;
    if (reducedHealth < 0) {
      reducedHealth = 0;
    }
    this.state.health = reducedHealth;
  }
}

module.exports = ShipUnit;