import { amrap } from '../amrap';

describe('amrap', () => {
  describe('when the duration is short', () => {
    it('should return an object with a movementCount of 2 or 3', () => {
      const options = [2, 3];
      const result = amrap('short').movementCount;

      expect(options.includes(result)).toBe(true);
    });
  });

  describe('when the duration is moderate', () => {
    it('should return an object with a movementCount between 2-4', () => {
      const options = [2, 3, 4];
      const result = amrap('moderate').movementCount;

      expect(options.includes(result)).toBe(true);
    });
  });

  describe('when the duration is long', () => {
    it('should return an object with a movementCount between 3-5', () => {
      const options = [3, 4, 5];
      const result = amrap('long').movementCount;

      expect(options.includes(result)).toBe(true);
    });
  });
});
