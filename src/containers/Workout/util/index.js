import { calculateDuration } from '../../../util/time';
import { getRandom } from '../../../util/random';
import { formatReps, getRepsAndLoad } from '../../../util/reps';
import { getWorkoutStyle, EMOM, E2MOM, E3MOM, INT, RFT } from './style';
import { getWorkoutDetails } from './details';
import { getMovements } from '../../../util/chooseMovements';
import { mapLoadToReps } from '../../../util/weightLoad';
import { movements as allMovements } from '../../../constants/movements';
import { titles } from '../../../constants/titles';
import { getWorkoutFormatToString } from '../../../components/Title/util';

export const buildWorkoutObject = (time) => {
  const duration = calculateDuration(time);
  const style = getWorkoutStyle({ duration, time });
  const details = getWorkoutDetails(duration, style, time);
  const intensity = details.intensity;
  const movementCount = details.movementCount;
  const rounds = style === RFT ? details.rounds : null;
  const intervalLength = ([EMOM, E2MOM, E3MOM].includes(style)) ? details.length : null;
  const movements = getMovements(movementCount, allMovements);
  const repsAndLoad = getRepsAndLoad(time, style, movementCount, rounds, intervalLength, intensity, movements);
  const loads = repsAndLoad.loads || {};
  const reps = repsAndLoad.reps;
  const formattedReps = formatReps(reps, movements);
  const repsWithLoads = mapLoadToReps(loads, formattedReps);
  const title = getRandom(titles);
  let workout = {};

  workout = {
    duration,
    formattedReps,
    intensity,
    intervalLength,
    loads,
    movements,
    movementCount,
    reps,
    repsWithLoads,
    rounds,
    style,
    title,
    time,
  };

  const workoutFormatToString = getWorkoutFormatToString(workout);

  workout.workoutFormatToString = workoutFormatToString;

  return workout;
};


