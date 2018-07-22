import { forTime } from '../forTime';

describe('forTime', () => {
  describe('when the duration is short', () => {
    it('should return an object with a movementCount of 3 or 4', () => {
      const options = [3, 4];
      const result = forTime('short').movementCount;

      expect(options.includes(result)).toBe(true);
    });
  });

  describe('when the duration is moderate', () => {
    it('should return an object with a movementCount between 3-5', () => {
      const options = [3, 4, 5];
      const result = forTime('moderate').movementCount;

      expect(options.includes(result)).toBe(true);
    });
  });

  describe('when the duration is long', () => {
    it('should return an object with a movementCount between 3-6', () => {
      const options = [3, 4, 5, 6];
      const result = forTime('long').movementCount;

      expect(options.includes(result)).toBe(true);
    });
  });
});
