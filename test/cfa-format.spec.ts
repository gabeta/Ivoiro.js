import { expect } from 'chai';
import 'mocha';
import Ivoiro from '../src/ivoiro';

describe('CFA Format unit test', () => {

    it('should translate 1000 to 1.000', () => {
        const dep = '1000';  
        const result = '1.000';      
        var ivoiro = new Ivoiro({
            className: 'cfa-format'
        });
        const value = ivoiro.translateNumber(dep, '.');
        expect(result).to.equal(value);
    });

});