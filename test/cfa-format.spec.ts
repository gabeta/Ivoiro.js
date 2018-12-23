import { expect } from 'chai';
import 'mocha';
import Ivoiro from '../src/ivoiro';

describe('CFA Format unit test', () => {
  it('should translate 1000 to 1.000', () => {
    const ivoiro = new Ivoiro({
      className: 'cfa-format'
    });
    const value = ivoiro.translateNumber('1000', '.');
    expect(value).to.equal('1.000');
  });
});
