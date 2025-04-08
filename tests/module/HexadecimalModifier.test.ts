import { describe, it, expect } from 'vitest';
import HexadecimalModifier from '../../src/HexadecimalModifier';

describe('hexadecimal modifier ', () => {
  it('Should return 7 digit color code', () => {
    expect(HexadecimalModifier('000000').color).toBe('#000000');
    expect(HexadecimalModifier('111111').color.length != 7).toBe(false);
  });
});
