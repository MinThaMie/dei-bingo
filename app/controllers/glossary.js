import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class GlossaryController extends Controller {
  @tracked query = '';

  get results() {
    let model = this.model;
    let query = this.query.toLowerCase();
    if (query) {
      model = model.filter((item) => {
        return (
          item.title.toLowerCase().includes(query) ||
          item.definition.toLowerCase().includes(query)
        );
      });
    }
    const caps = [];
    return model.map((e) => {
      if (caps.includes(e.title[0])) {
        return { ...e, caps: '' };
      } else {
        caps.push(e.title[0]);
        return { ...e, caps: e.title[0] };
      }
    });
  }
}
