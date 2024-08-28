import { module, test } from 'qunit';
import { setupTest } from 'dei-bingo/tests/helpers';

module('Unit | Route | trusted-ten', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:trusted-ten');
    assert.ok(route);
  });
});
