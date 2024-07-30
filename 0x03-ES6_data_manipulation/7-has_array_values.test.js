import hasValuesFromArray from './7-has_array_values.js';

describe('hasValuesFromArray', () => {
  it('should return true if all array values are in the set', () => {
    expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 2, 3])).toBe(true);
  });

  it('should return false if any array value is not in the set', () => {
    expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 6])).toBe(false);
  });

  it('should return false if none of the array values are in the set', () => {
    expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [6, 7, 8])).toBe(false);
  });

  it('should return true for an empty array', () => {
    expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [])).toBe(true);
  });
});
