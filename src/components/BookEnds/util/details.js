import { getRandom } from '../../../util/random';
import { INTENSITY_MAP } from '../../../constants/intensity';

const counts = {
  moderate: getRandom([2, 3]),
  long: getRandom([3, 4])
};

export const buildBookEndDetails = (duration) => ({
  intensity: INTENSITY_MAP[duration],
  movementCount: counts[duration]
});
