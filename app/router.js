import EmberRouter from '@embroider/router';
import config from 'dei-nedap/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('glossary');
  this.route('contribute');
  this.route('resources');
  this.route('trusted-ten');
  this.route('privilege-walk');
});
