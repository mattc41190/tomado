import {expect} from 'chai'
import {_getSeconds} from '../../app/scripts/api.js'

describe('#_getSeconds', function() {
  it('Gets the number of seconds remaining after minutes (units of 60) have been accounted for', function() {
    const seconds = 190;
    const expectedRemainingSeconds = 10
    const actualRemainingSecond = _getSeconds(seconds);
    expect(actualRemainingSecond).to.equal(expectedRemainingSeconds);
  });
});
