import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  protected static _instances = 0;
  get maxLifePoints(): number {
    return this._maxLifePoints;       
  }
    
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    Halfling._instances += 1;
  }
  
  static override createdRacesInstances():number {
    return Halfling._instances;
  }
}