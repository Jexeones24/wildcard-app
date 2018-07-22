import { amrap } from './amrap';
import { forTime } from './forTime';
import { interval } from './interval';
import { maxReps } from './maxReps';
import { roundsForTime } from './roundsForTime';
import { AMRAP, FT, INT, RFT } from '../constants/workoutStyles';

export const getMovementCount = (duration, style, timeDomain) => {
  switch (style) {
    case AMRAP:
      return amrap(duration);
    case FT:
      return forTime(duration);
    case INT:
      return interval(timeDomain, duration);
    case RFT:
      return roundsForTime(duration);
    default:
      return maxReps();
  }
};
