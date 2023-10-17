import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class GlossaryController extends Controller {
  @tracked query = '';

  get results() {
    let query = this.query.toLowerCase();
    if (query) {
      return this.model.filter((item) => {
        return (
          item.title.toLowerCase().includes(query) ||
          item.definition.toLowerCase().includes(query)
        );
      });
    }
    return this.model;
  }
}
