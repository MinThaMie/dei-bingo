import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service intl;

  @tracked activeLocale = this.intl.primaryLocale;

  locales = this.intl.locales.slice(1);

  @action
  changeLocale(locale) {
    this.activeLocale = locale.target.value;
    this.intl.setLocale(this.activeLocale);
    localStorage.setItem('locale', this.activeLocale);
  }
}
