import Archetype from './Archetypes/Archetype';
import Energy from './Energy';
import Race, { Elf } from './Races';
import Fighter from './Fighter';
import getRandomInt from './utils';
import { Mage } from './Archetypes';
import SimpleFighter from './Fighter/SimpleFighter';

const drainLife = (
  amount: number,
  strength: number,
  enemy: SimpleFighter,
): number => {
  const damage = Math.ceil(amount * 0.5) * strength;
  enemy.receiveDamage(damage);
  enemy.receiveDamage(damage);
  return damage;
};

const thunderBolt = (
  strength: number, 
  enemy: SimpleFighter,
): void => {
  enemy.receiveDamage(strength * getRandomInt(1, 3));
};

export default class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  constructor(name: string, race?: Race, archetype?: Archetype) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = race || new Elf('Elf', this._dexterity);
    this._archetype = archetype || new Mage('Mage');
    this._maxLifePoints = Math.ceil(this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._defense = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get name(): string {
    return this._name;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    this._lifePoints -= damage > 0 ? damage : 1;
    return this._lifePoints > 0 ? this._lifePoints : -1;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: SimpleFighter): void {
    switch (this.archetype.name) {
      case 'Mage':
        if (this._energy.amount > 2) {
          this._energy.amount -= 2;
          thunderBolt(this._strength, enemy);
        }
        break;
      default:
        if (this._energy.amount > 0) {
          const damage = drainLife(this._energy.amount, this._strength, enemy);
          this._lifePoints += damage * 0.5;
          this._energy.amount -= this._energy.amount;
        }
        break;
    }
  }

  levelUp(): void {
    const newMaxLifePoints = this._maxLifePoints + getRandomInt(1, 10);
    this._maxLifePoints = this._race.maxLifePoints > newMaxLifePoints
      ? newMaxLifePoints : this._race.maxLifePoints;
    this._lifePoints = this._maxLifePoints;
    this._defense += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
  }
}
