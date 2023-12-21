'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.addAnimal(this);
  }

  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static removeAnimal(animal) {
    this.alive.splice(this.alive.indexOf(animal), 1);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden && prey.health > 0) {
      prey.health -= 50;
    }

    if (prey.health === 0) {
      Animal.removeAnimal(prey);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
