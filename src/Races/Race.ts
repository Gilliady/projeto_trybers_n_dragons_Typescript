export default abstract class Race {
  constructor(
    protected _name: string,
    protected _dexterity: number,
  ) { }

  static createdRacesInstances():number {
    throw new Error('Not implemented');
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;
}
