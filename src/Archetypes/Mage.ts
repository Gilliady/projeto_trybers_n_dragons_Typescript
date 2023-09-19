import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _instances = 0;
  constructor(
    name: string,
    protected _energyType: EnergyType = 'mana',
  ) {
    super(name);
    Mage._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Mage._instances;
  }
}
