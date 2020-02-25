import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | climb', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /climb', async function(assert) {
    await visit('/climb');

    assert.equal(currentURL(), '/climb');
  });
});
