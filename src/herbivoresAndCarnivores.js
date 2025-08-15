'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  checkIfAlive() {
    if (this.health <= 0) {
      const index = Animal.alive.indexOf(this);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animalToBite) {
    if (animalToBite instanceof Herbivore && animalToBite.hidden === false) {
      animalToBite.health -= 50;
      animalToBite.checkIfAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
