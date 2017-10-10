import {expect} from 'chai'
import {millisToMinutesAndSeconds} from '../../app/scripts/api.js'

describe('#millisToMinutesAndSeconds', function() {



    xit('Converts millisecond notation to a minute and second notation', function () {
        const birthMoment = new Date(1990, 3, 11, 5, 30, 30);
        const expectedTime = "30:30";
        const birthTime = millisToMinutesAndSeconds(birthMoment);
        expect(birthTime.slice(6)).to.equal(expectedTime);
    });

    it('Converts the bottom of a minute correctly', function () {
        const birthMoment = new Date(1990, 3, 11, 5, 25, 0);
        const expectedTime = "25:00";
        const birthTime = millisToMinutesAndSeconds(birthMoment.getTime());
        // console.log(birthTime);
        // expect(birthTime.slice(6)).to.equal(expectedTime);
    });

});
