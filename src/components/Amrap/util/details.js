import { getRandom, getRandomXToY } from '../../../util/random';
import { SHORT, MODERATE, LONG } from '../../../constants/durations';
import { INTENSITY_MAP } from '../../../constants/intensity';

const counts = {
  short: getRandom([2, 3]),
  moderate: getRandomXToY(2, 4),
  long: getRandom([3, 4])
};

export const buildAmrapDetails = (duration) => ({
  intensity: INTENSITY_MAP[duration],
  movementCount: counts[duration]
});
