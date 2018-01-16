import {expect} from 'chai'
import {_getMinutes} from '../../app/scripts/api.js'

describe('#_getMinutes', function() {
  it('Gets the number of full minutes (units of 60) from a number of seconds', function() {
    const seconds = 190;
    const expectedFullMinutes = 3
    const actualFullMinutes = _getMinutes(seconds);
    expect(actualFullMinutes).to.equal(expectedFullMinutes);
  });
});
