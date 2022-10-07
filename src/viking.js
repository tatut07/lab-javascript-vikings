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
  genericAttack(attackers, victims) {
    const attacker = Math.floor(Math.random()) * attackers.length;
    const victim = Math.floor(Math.random()) * victims.length;
    const damage = attackers[attacker].attack();
    const result = victims[victim].receiveDamage(damage);
    if (victims[victim].health <= 0) {
      victims.splice(victim, 1);
    }
    return result;
  }
  vikingAttack() {
    return this.genericAttack(this.vikingArmy, this.saxonArmy);
    // const attacker = Math.floor(Math.random()) * this.vikingArmy.length;
    // const victim = Math.floor(Math.random()) * this.saxonArmy.length;
    // const damage = this.vikingArmy[attacker].attack();
    // const saxonDam = this.saxonArmy[victim].receiveDamage(damage);
    // if (this.saxonArmy[victim].health <= 0) {
    //   this.saxonArmy.splice(victim, 1);
    // }
    // return saxonDam;
  }
  saxonAttack() {
    return this.genericAttack(this.saxonArmy, this.vikingArmy);
    // const attacker = Math.floor(Math.random()) * this.saxonArmy.length;
    // const victim = Math.floor(Math.random()) * this.vikingArmy.length;
    // const damage = this.saxonArmy[attacker].attack();
    // const vikingDam = this.vikingArmy[victim].receiveDamage(damage);
    // if (this.vikingArmy[victim].health <= 0) {
    //   this.vikingArmy.splice(victim, 1);
    // }
    // return vikingDam;
  }
  showStatus() {
    if (this.saxonArmy == 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy == 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
