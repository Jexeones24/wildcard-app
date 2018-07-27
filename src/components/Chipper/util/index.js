import { getRandomXToY } from '../../../util/random';
import { SHORT, MODERATE } from '../../../constants/durations';
import { INTENSITY_MAP } from '../../../constants/intensity';

const counts = {
  short: getRandomXToY(3, 4),
  moderate: getRandomXToY(3, 5),
  long: getRandomXToY(3, 5)
};

export const buildChipperDetails = (duration) => ({
  intensity: INTENSITY_MAP[duration],
  movementCount: counts[duration]
});

export const chipperTitle = 'For Time';
