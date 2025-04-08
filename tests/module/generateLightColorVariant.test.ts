import { describe, it, expect, test } from 'vitest';
import generateLightColorVariant from '../../src/generateLightColorVariant';

describe('Dark Color Array', () => {
  it('should return array of dark Hexadecimal color', () => {
    expect(generateLightColorVariant(123)).toHaveLength(123);
    // expect(generateDarkColorVariant(123)).toBe([]);
  });
});

describe('Dark Color Array', () => {
  it(' 6 digit in color ', () => {
    expect(generateLightColorVariant(123)[0].main.color).toHaveLength(7);
  });
});

describe('Dark Color Array', () => {
  const dataArray = generateLightColorVariant(500).map((item) => {
    return [item.main.color, 7];
  });

  test.each(dataArray)(
    'color code (%s) should have length of %s',
    (input, expected) => {
      expect(input).toHaveLength(Number(expected));
    },
  );
});
