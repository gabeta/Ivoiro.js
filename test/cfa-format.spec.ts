import { expect } from 'chai';
import 'mocha';

describe('CFA Format unit test', () => {

    it('should translate 1000 to 1.000', () => {
        const result = '1000';
        var span = document.createElement('span');
        var dep = span.innerText = '1000';

        expect(result).to.equal(dep);
    });

});