import groceriesList from './9-groceries_list.js';

describe('groceriesList', () => {
  it('should return a map of groceries with correct quantities', () => {
    const groceries = groceriesList();
    expect(groceries.get('Apples')).toBe(10);
    expect(groceries.get('Tomatoes')).toBe(10);
    expect(groceries.get('Pasta')).toBe(1);
    expect(groceries.get('Rice')).toBe(1);
    expect(groceries.get('Banana')).toBe(5);
  });

  it('should have all the specified keys', () => {
    const groceries = groceriesList();
    expect(groceries.has('Apples')).toBe(true);
    expect(groceries.has('Tomatoes')).toBe(true);
    expect(groceries.has('Pasta')).toBe(true);
    expect(groceries.has('Rice')).toBe(true);
    expect(groceries.has('Banana')).toBe(true);
  });
});

