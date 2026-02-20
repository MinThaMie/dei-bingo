import Route from '@ember/routing/route';
import { service } from '@ember/service';
import translationsForDe from 'virtual:ember-intl/translations/de';
import translationsForEn from 'virtual:ember-intl/translations/en';
import translationsForNl from 'virtual:ember-intl/translations/nl';
import translationsForFr from 'virtual:ember-intl/translations/fr';
import translationsForEs from 'virtual:ember-intl/translations/es';


export default class ApplicationRoute extends Route {
  @service intl;

  beforeModel() {
    this.intl.addTranslations('de', translationsForDe);
    this.intl.addTranslations('en', translationsForEn);
    this.intl.addTranslations('nl', translationsForNl);
    this.intl.addTranslations('fr', translationsForFr);
    this.intl.addTranslations('es', translationsForEs);

    this.intl.setLocale(localStorage.getItem('locale') || ['en']);
  }
}
