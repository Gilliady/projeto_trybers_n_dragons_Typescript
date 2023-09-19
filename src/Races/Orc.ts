import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  protected static _instances = 0;
  get maxLifePoints(): number {
    return this._maxLifePoints;       
  }
  
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    Orc._instances += 1;
  }

  static override createdRacesInstances():number {
    return Orc._instances;
  }
}