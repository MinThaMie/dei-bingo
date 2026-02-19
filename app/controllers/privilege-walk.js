import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PrivilageWalkController extends Controller {
  @tracked scores =
    JSON.parse(localStorage.getItem('privilege-scores')) ??
    new Array(16).fill(null);

  get privilegeScore() {
    return this.scores.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  }

  @action
  isChecked(id) {
    let [index, type] = id.split('-');
    return (
      type == this.scores[index - 1] ||
      (type == 2 && this.scores[index - 1] == 0)
    );
  }

  squareClass(score) {
    switch (score) {
      case null:
        return 'neutral';
      case 1:
        return 'positive';
      case 0:
        return 'negative';
      default:
        break;
    }
  }

  @action
  clickRadio(e) {
    this.scores[e.target.name - 1] = Number(e.target.value);
    localStorage.setItem('privilege-scores', JSON.stringify(this.scores));
    // eslint-disable-next-line no-self-assign
    this.scores = this.scores;
  }
}
