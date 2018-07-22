import { getRandom } from './random';
import { getStepRange } from './range';

const closestOption = (val, opts) => {
  return opts.reduce((prev, curr) => (
    Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev
  ))
};

const optsForCalorie = [ ...getStepRange(10, 200, 10)];
const optsForMeter = [ ...getStepRange(200, 2000, 50) ];
const optsForOddObject = [ ...getStepRange(50, 200, 5) ];
const optsForSec = [25, 30, 35, 40];

const options = {
  calorie: optsForCalorie,
  odd: optsForOddObject,
  meter: optsForMeter,
  second: optsForSec
};

const nonWeightlifting = ['cardio', 'core', 'odd'];
export const chooseUnit = (movement) => (nonWeightlifting.includes(movement.type)) ? getRandom(movement.units) : null;

export const calculateDistance = (movement, reps) => {
  const unit = chooseUnit(movement);

  if (unit) {
    const rawDistance = reps * movement.multipliers[unit];

    if (movement.type === 'odd') {
      const opts = options[movement.type];
      const closest = closestOption(rawDistance, opts);
      return convertRepsToUnits(unit, closest);
    }

    const opts = options[unit];
    const closest = closestOption(rawDistance, opts);
    return convertRepsToUnits(unit, closest);
  };

  return;
};

const strUnit = (unit) => {
  switch(unit) {
    case 'meter':
      return 'm';
    case 'calorie':
      return 'Cal';
    default:
      return 'Second';
  }
};

export const convertRepsToUnits = (unit, distance) => `${distance} ${strUnit(unit)}`;
