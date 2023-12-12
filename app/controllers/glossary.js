import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
export default class GlossaryController extends Controller {
  @service intl;
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
    return model
      .sort((a, b) =>
        this.intl
          .t(a.title)
          .localeCompare(this.intl.t(b.title), this.intl.primaryLocale),
      )
      .map((e) => {
        if (caps.includes(this.intl.t(e.title)[0])) {
          return { ...e, link: this.intl.lookup(e.title, 'en'), caps: '' };
        } else {
          caps.push(this.intl.t(e.title)[0]);
          return {
            ...e,
            link: this.intl.lookup(e.title, 'en'),
            caps: this.intl.t(e.title)[0],
          };
        }
      });
  }
}
