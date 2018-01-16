import {expect} from 'chai'
import {formatTime} from '../../app/scripts/api.js'

describe('#formatTime', function() {
  it('Returns time in the MM:SS format when supplied with a number of seconds', function() {
    const seconds = 630;
    const expectedFormattedTime =  '10:30'
    const actualFormattedTime = formatTime(seconds);
    expect(actualFormattedTime).to.equal(expectedFormattedTime);
  });

  it('Returns time in the M:SS format when supplied with a number of seconds that is below 10 minutes', function() {
    const seconds = 190;
    const expectedFormattedTime =  '3:10'
    const actualFormattedTime = formatTime(seconds);
    expect(actualFormattedTime).to.equal(expectedFormattedTime);
  });

  it('Returns time in the MM:0S format when supplied with a number of seconds that is below 10 seconds', function() {
    const seconds = 185;
    const expectedFormattedTime =  '3:05'
    const actualFormattedTime = formatTime(seconds);
    expect(actualFormattedTime).to.equal(expectedFormattedTime);
  });
});
