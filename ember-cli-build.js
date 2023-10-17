'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('node_modules/modern-normalize/modern-normalize.css');

  return app.toTree();
};
