import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    protected player: Character | Fighter,
    protected opponent: Character | Fighter,
  ) {
    super(player);
  }

  override fight(): number {
    while (this.player.lifePoints > 0 && this.opponent.lifePoints > 0) {
      this.player.attack(this.opponent);
      this.opponent.attack(this.player);
    }
    const result = this.player.lifePoints === -1 ? -1 : 1;
    return result;
  }
}