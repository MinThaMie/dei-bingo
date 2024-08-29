import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TrustedTenController extends Controller {
  @tracked similarityScore = 0;
  @tracked amountOfCheckboxes = 0;
  name = '';

  @action
  clickCheckBox(e) {
    this.similarityScore += e.target.checked ? 1 : -1;
  }

  @action
  updatePeople() {
    let amountOfPeople = 0;
    document.querySelectorAll('input[type=input]').forEach((i) => {
      if (i.value !== '') {
        amountOfPeople++;
      }
    });
    this.amountOfCheckboxes = amountOfPeople * 7;
  }
}
