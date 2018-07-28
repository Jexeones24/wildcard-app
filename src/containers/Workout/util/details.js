import { buildAmrapDetails } from '../../../components/Amrap/util/details';
import { buildBookEndDetails } from '../../../components/BookEnds/util/details';
import { buildChipperDetails } from '../../../components/Chipper/util';
import { buildIntervalDetails } from '../../../components/Interval/util';
import { maxReps } from '../../../components/MaxReps/util';
import { roundsForTime } from '../../../components/RoundsForTime/util';
import { AMRAP, BOOK_ENDS, EMOM, E2MOM, E3MOM, FT, RFT } from '../../../util/workoutStyle';

export const getWorkoutDetails = (duration, style, time) => {
  switch (style) {
    case AMRAP:
      return buildAmrapDetails(duration);
    case BOOK_ENDS:
      return buildBookEndDetails(duration);
    case FT:
      return buildChipperDetails(duration);
    case EMOM:
      return buildIntervalDetails(duration, style);
    case E2MOM:
      return buildIntervalDetails(duration, style);
    case E3MOM:
      return buildIntervalDetails(duration, style);
    case RFT:
      return roundsForTime(duration);
    default:
      return maxReps();
  }
};
