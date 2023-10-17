import { module, test } from 'qunit';
import { setupTest } from 'dei-bingo/tests/helpers';

module('Unit | Route | bingo', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:bingo');
    assert.ok(route);
  });
});
