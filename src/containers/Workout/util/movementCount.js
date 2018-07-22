import { movementCountForAmrap } from '../../../components/Amrap/util/movementCount';
import { forTime } from '../../../components/Chipper/util';
import { interval } from '../../../components/Interval/util';
import { maxReps } from '../../../components/MaxReps/util';
import { roundsForTime } from '../../../components/RoundsForTime/util';
import { AMRAP, EMOM, E2MOM, E3MOM, FT, RFT } from '../../../util/workoutStyle';

export const getMovementCount = (duration, style, time) => {
  switch (style) {
    case AMRAP:
      return movementCountForAmrap(duration);
    case FT:
      return forTime(duration);
    case EMOM:
      return interval(duration, style, time);
    case E2MOM:
      return interval(duration, style, time);
    case E3MOM:
      return interval(duration, style, time);
    case RFT:
      return roundsForTime(duration);
    default:
      return maxReps();
  }
};
