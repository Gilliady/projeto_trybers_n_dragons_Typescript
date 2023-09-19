import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  protected static _instances = 0;
  get maxLifePoints(): number {
    return this._maxLifePoints;       
  }
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instances += 1;
  }

  static override createdRacesInstances():number {
    return Elf._instances;
  }
}