import { range } from '../range';

describe('range', () => {
  describe('when one or both arguments are not numbers', () => {
    it('should throw an error', () => {
      expect(() => { range('4', 2) }).toThrowError();
    });
  });

  describe('when both arguments are 0', () => {
    it('should return 0', () => {
      expect(range(0, 0)).toBe(0);
    })
  });

  it('should return an array of numbers', () => {
    const result = range(2, 6);
    expect(Array.isArray(result)).toBe(true);
  });

  it('where the array starts from the first argument and ends at second argument', () => {
    const result = range(2, 12);

    expect(result[0]).toBe(2);
    expect(result[result.length -1]).toBe(12);
  });
});
