import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { task, timeout } from 'ember-concurrency';

export default class BingoController extends Controller {
  @tracked selected = null;

  get squares() {
    return this.model;
  }

  @action
  selectSquare(cell) {
    if (this.selected == cell) {
      this.selected = null;
    } else {
      this.selected = cell;
    }
  }

  @task *completeSquare(item) {
    yield timeout(1000);
    item.completed = true;
    const completedCells = this.model
      .filter((i) => i.completed)
      .map((i) => i.title);
    localStorage.setItem('completed', JSON.stringify(completedCells));
  }
}
