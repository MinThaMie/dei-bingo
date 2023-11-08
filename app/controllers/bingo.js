import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BingoController extends Controller {
  @tracked selected = null;
  dialog = document.querySelector('dialog');

  get squares() {
    return this.model.filter((i) => !i.completed);
  }

  get roles() {
    return this.model.filter((i) => i.completed);
  }

  @action
  selectSquare(cell) {
    if (this.selected == cell) {
      this.selected = null;
    } else {
      this.selected = cell;
    }
    document.querySelector('#modal-description').textContent =
      this.selected.description;
    document.querySelector('dialog').showModal();
    if (this.selected.completed) {
      document.querySelector('.button.complete').style.display = 'none';
    } else {
      document.querySelector('.button.complete').style.display = 'unset';
    }
  }

  @action
  completeSquare() {
    this.selected.completed = true;
    const completedCells = this.model
      .filter((i) => i.completed)
      .map((i) => i.title);
    localStorage.setItem('completed', JSON.stringify(completedCells));
    document.querySelector('dialog').close();
  }

  @action
  hideModal() {
    document.querySelector('dialog').close();
  }
}
