import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _instances = 0;
  constructor(
    name: string,
    protected _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Warrior._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Warrior._instances;
  }
}
