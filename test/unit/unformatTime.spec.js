import {expect} from 'chai'
import {unformatTime} from '../../app/scripts/api.js'

describe('#unformatTime', function() {
  it('Returns time in the XX.X format when supplied with a formatted time string', function() {
    const formattedTime = '3:30';
    const expectedUnformattedTime = 3.5;
    const actualUnformattedTime = unformatTime(formattedTime);
    expect(actualUnformattedTime).to.equal(expectedUnformattedTime);
  });
});
