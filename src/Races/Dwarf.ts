import Race from './Race';

export default class Dwarf extends Race {
  protected _maxLifePoints = 80;
  protected static _instances = 0;
  get maxLifePoints(): number {
    return this._maxLifePoints;       
  }

  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instances += 1;
  }

  static override createdRacesInstances():number {
    return Dwarf._instances;
  }
}
