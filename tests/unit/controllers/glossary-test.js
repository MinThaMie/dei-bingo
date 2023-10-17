import { module, test } from 'qunit';
import { setupTest } from 'dei-bingo/tests/helpers';

module('Unit | Controller | glossary', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:glossary');
    assert.ok(controller);
  });
});
