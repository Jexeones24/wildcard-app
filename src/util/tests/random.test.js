import {
  getNRandom,
  getRandom,
  getRandomXToY,
  shuffleArray,
} from '../random.js';

describe('getNRandom', () => {
  it('returns an array of n random elements from the array', () => {
    const n = 3;
    const arr = [24, 10, 6, 14, 30];
    const result = getNRandom(n, arr);

    expect(result.length).toEqual(n);
    expect(arr).toEqual(expect.arrayContaining(result));
  });
});

describe('getRandom', () => {
  describe('when argument is not an array', () => {
    it('should throw an error', () => {
      expect(() => { getRandom(5) }).toThrowError();
    });
  });

  describe('when the array is empty', () => {
    it('should return', () => {
      expect(getRandom([])).toEqual(undefined);
    });
  });

  describe('when the array contains 1 element', () => {
    it('should return that element', () => {
      expect(getRandom([12])).toEqual(12);
    });
  });

  describe('when the array is greater than 1', () => {
    it('should return one element at random', () => {
      const arg = [30, 10, 25];
      const result = getRandom(arg);

      expect(arg.includes(result)).toBe(true);
    });
  });
});

describe('getRandomXToY', () => {
  describe('when x or y is a negative number', () => {
    it('should throw an error', () => {
      expect(() => { getRandomXToY(-1, 10) }).toThrowError();
      expect(() => { getRandomXToY(2, -5) }).toThrowError();
    });
  });

  describe('when x and y are >= 0', () => {
    it('should return a random number between x and y', () => {
      const result = getRandomXToY(0, 12);
      const range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

      expect(result > 13).toBe(false);
      expect(result < 0).toBe(false);
      expect(range.includes(result)).toBe(true);
    });
  });
});

describe('shuffleArray', () => {
  describe('when the argument is not an array', () => {
    it('should throw an error', () => {
      expect(() => { shuffleArray('hello') }).toThrowError();
    });
  });

  describe('when the argument array is empty', () => {
    it('should throw an error', () => {
      expect(() => { shuffleArray([]) }).toThrowError();
    });
  });

  describe('when the argument array > 1', () => {
    it('should return a shuffled array containing the same values', () => {
      const arr = ['hi', 'hello', 'bye', 'yo'];
      const result = shuffleArray(arr);

      expect(arr).toEqual(expect.arrayContaining(result));
    });
  });
});
