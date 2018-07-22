import { calculateDuration } from './time';
import { getRandom } from './random';
import { formatReps, getRepsAndLoad } from './reps';
import { getWorkoutStyle } from './workoutStyle';
import { getMovementCount } from './movementCount';
import { getMovements } from './chooseMovements';
import { mapLoadToReps } from './weightLoad';
import { movements as allMovements } from '../constants/movements';
import { titles } from '../constants/titles';
import { getWorkoutFormatToString } from './formatToString';
import { INT, RFT } from '../constants/workoutStyles';

export const buildWorkoutObject = (timeDomain) => {
  const duration = calculateDuration(timeDomain);
  const style = getWorkoutStyle(duration, timeDomain);
  const details = getMovementCount(duration, style, timeDomain);
  const intensity = details.intensity;
  const movementCount = details.movementCount;
  const rounds = style === RFT ? details.rounds : null;
  const intervalLength = style === INT ? details.length : null;
  const movements = getMovements(movementCount, allMovements);
  const repsAndLoad = getRepsAndLoad(timeDomain, style, movementCount, rounds, intervalLength, intensity, movements);
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
    timeDomain,
  };

  const workoutFormatToString = getWorkoutFormatToString(workout);

  workout.workoutFormatToString = workoutFormatToString;

  return workout;
};


