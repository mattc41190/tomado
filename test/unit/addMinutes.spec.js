import {expect} from 'chai'
import {addMinutes} from '../../app/scripts/api.js'

describe('#addMinutes', function() {

    const birthMoment = new Date(1990, 3, 11, 5, 0, 0);

    it('Adds specifed minutes to a moment', function () {
        const expectedTime = birthMoment.getTime() + 60000;
        const cryMoment = addMinutes(birthMoment, 1);
        expect(cryMoment.getTime()).to.equal(expectedTime)
    });

});
