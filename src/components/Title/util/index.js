import { amrapTitle } from '../../Amrap/util';
import { intervalTitle } from '../../Interval/util';
import { roundsForTimeTitle } from '../../RoundsForTime/util';
import { chipperTitle } from '../../Chipper/util';
import { maxRepsTitle } from '../../MaxReps/util';
import { AMRAP, FT, MAX, RFT } from '../../../util/workoutStyle';

export const formattedRepsToString = (formattedReps) => {
  if (typeof formattedReps === 'string') { return formattedReps; }
  if (formattedReps.reps === null) {
    return `${formattedReps.movement[0].name}`;
  }

  if (typeof formattedReps === 'object' && !Array.isArray(formattedReps)) {
    return `${formattedReps.reps} ${formattedReps.movement}`;
  }

  return formattedReps.map(obj => `${obj.reps} ${obj.movement}`);
};

export const getWorkoutFormatToString = (workout) => {
  switch(workout.style) {
    case AMRAP:
      return amrapTitle(workout);
    case RFT:
      return roundsForTimeTitle(workout);
    case FT:
      return chipperTitle;
    case MAX:
      return maxRepsTitle(workout);
    default:
      return intervalTitle(workout);
  }
};
