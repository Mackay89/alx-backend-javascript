import setFromArray from './6-set.js';

describe('setFromArray', () => {
  it('should create a Set from the given array', () => {
    const array = [12, 32, 15, 78, 98, 15];
    const expectedSet = new Set([12, 32, 15, 78, 98]);
    expect(setFromArray(array)).toEqual(expectedSet);
  });

  it('should create an empty Set from an empty array', () => {
    expect(setFromArray([])).toEqual(new Set());
  });

  it('should create a Set with unique elements only', () => {
    const array = [1, 1, 1, 1, 1];
    const expectedSet = new Set([1]);
    expect(setFromArray(array)).toEqual(expectedSet);
  });
});
