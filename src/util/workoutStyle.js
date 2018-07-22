import { getRandom } from './random';
import { SHORT, MODERATE } from '../constants/durations';
import { AMRAP, FT, INT, MAX, RFT } from '../constants/workoutStyles';

export const getWorkoutStyle = (duration, timeDomain) => {
  switch (duration) {
    case SHORT:
      return getRandom([AMRAP, RFT, FT, MAX, INT]);
    case MODERATE:
      return getRandom([AMRAP, RFT, FT, INT])
    default:
      return getRandom([AMRAP, RFT, FT, INT]);
  }
};
