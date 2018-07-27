import { getRandomXToY } from '../../../util/random';
import { SHORT, MODERATE } from '../../../constants/durations';
import { INTENSITY_MAP } from '../../../constants/intensity';

const counts = {
  short: getRandomXToY(2, 3),
  moderate: getRandomXToY(3, 4),
  long: getRandomXToY(3, 5)
};

export const roundsForTime = (duration) => ({
  intensity: INTENSITY_MAP[duration],
  movementCount: counts[duration],
  rounds: counts[duration]
});

export const roundsForTimeTitle = ({ rounds, style, time }) => `${rounds} ${style}`;
