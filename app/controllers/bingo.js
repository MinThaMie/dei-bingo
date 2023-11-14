import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import ContributeModal from '../components/contribute-modal';

export default class BingoController extends Controller {
  @service modals;
  @tracked selected = { title: '', icon: '' };
  dialog = document.querySelector('dialog');

  get squares() {
    return this.model.filter((i) => !i.completed);
  }

  get roles() {
    return this.model.filter((i) => i.completed);
  }

  @action
  selectSquare(cell) {
    this.selected = cell;
    this.modals.open(ContributeModal, {
      selected: this.selected,
      completeSquare: this.completeSquare,
      removeSquare: this.removeSquare,
    });
  }

  @action
  removeSquare(close) {
    this.selected.completed = false;
    const completedCells = this.model
      .filter((i) => i.completed)
      .map((i) => i.title);
    localStorage.setItem('completed', JSON.stringify(completedCells));
    close();
  }

  @action
  completeSquare(close) {
    this.selected.completed = true;
    const completedCells = this.model
      .filter((i) => i.completed)
      .map((i) => i.title);
    localStorage.setItem('completed', JSON.stringify(completedCells));
    close();
  }
}
