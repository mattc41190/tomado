import {expect} from 'chai'
import {convertMinutesToSeconds} from '../../app/scripts/api.js'

describe('#convertMinutesToSeconds', function() {
  it('Converts minutes to it\'s seconds equivalent', function() {
    const minutes = 3;
    const expectedSeconds = 180;
    const actualSeconds = convertMinutesToSeconds(minutes);
    expect(actualSeconds).to.equal(expectedSeconds);
  });
});
