// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}
// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}
// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    const attacker = Math.floor(Math.random()) * this.vikingArmy.length;
    const victim = Math.floor(Math.random()) * this.saxonArmy.length;
    const damage = this.vikingArmy[attacker].attack();
    const saxonDam = this.saxonArmy[victim].receiveDamage(damage);
    if (this.saxonArmy[victim].health <= 0) {
      this.saxonArmy.splice(victim, 1);
    }
    return saxonDam;
  }
  saxonAttack() {
    const attacker = Math.floor(Math.random()) * this.saxonArmy.length;
    const victim = Math.floor(Math.random()) * this.vikingArmy.length;
    const damage = this.saxonArmy[attacker].attack();
    const vikingDam = this.vikingArmy[victim].receiveDamage(damage);
    if (this.vikingArmy[victim].health <= 0) {
      this.vikingArmy.splice(victim, 1);
    }
    return vikingDam;
  }
}
