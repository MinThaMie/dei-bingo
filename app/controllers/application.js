import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service intl;
  @service media;

  @tracked activeLocale = this.intl.primaryLocale;

  locales = this.intl.locales;

  get isDesktop() {
     return this.media.matches.has('desktop');
  }

  @action
  changeLocale(locale) {
    this.activeLocale = locale.target.value;
    this.intl.setLocale(this.activeLocale);
    localStorage.setItem('locale', this.activeLocale);
  }
}
