import {
  durations,
  calculateDuration,
  timeInSeconds,
} from '../time.js'

describe('durations', () => {
  it('returns an array of 3 objects', () => {

    expect(Array.isArray(durations)).toBe(true);
    expect(durations.length).toEqual(3);
    expect(typeof durations[0]).toBe('object');
  });

  describe('when the duration name is "short"', () => {
    it('should have a range from 5-12', () => {
      const values = [5, 6, 7, 8, 9, 10, 11, 12];
      const short = durations[0].range;

      expect(values).toEqual(short);
    });
  });

  describe('when the duration name is "moderate"', () => {
    it('should have a range from 13-25', () => {
      const values = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
      const moderate = durations[1].range;

      expect(values).toEqual(moderate);

    });
  });

  describe('when the duration name is "long"', () => {
    it('should have a range from 26-60', () => {
      const values = [
        26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
        36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
        46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
        56, 57, 58, 59, 60
      ];
      const long = durations[2].range;

      expect(values).toEqual(long);

    });
  });
});

describe('calculateDuration', () => {
  describe('when the argument is not of type number', () => {
    it('throws an error', () => {
      const time = '5';

      expect(() => { calculateDuration(time) }).toThrowError();
    });
  });

  it('returns a string value', () => {
    const time = 18;
    const duration = calculateDuration(time);

    expect(typeof duration).toBe('string');
    expect(['short', 'moderate', 'long'].includes(duration)).toBe(true);
  });
});
