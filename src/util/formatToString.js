import { amrapTitle } from './amrap';
import { intervalTitle } from './interval';
import { roundsForTimeTitle } from './roundsForTime';
import { chipperTitle } from './forTime';
import { maxRepsTitle } from './maxReps';
import { AMRAP, FT, MAX, RFT } from '../constants/workoutStyles';

export const formattedRepsToString = (formattedReps) => {
  // console.log(formattedReps);
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
