import { getRandom } from './random';
import { weightedMovements } from './types';
import { formattedRepsToString } from '../components/Title/util';

const mapLoadToMovement = (movement, intensity) => {
  const name = movement.name;
  const load = getRandom(movement.loadsByIntensity[intensity]);

  return { [name]: load };
};

const getLoads = (movementGroup, intensity) => movementGroup.map(group => mapLoadToMovement(group, intensity));

const addLoad = (group, intensity, loadsArray) => {
  if (group.length) {
    const loads = getLoads(group, intensity);
    return loadsArray.push(...loads);
  }

  return null;
};

const exists = (el) => !!el.length;

export const assignLoads = (movements, intensity) => {
  let weights = {};
  let loads = [];
  const dumbbell = weightedMovements(movements, 'dumbbell');
  const kettlebell = weightedMovements(movements, 'kettlebell');
  const weightlifting = weightedMovements(movements, 'weightlifting');

  if (exists(weightlifting)) {
    addLoad(weightlifting, intensity, loads);
  }

  if (exists(kettlebell)) {
    addLoad(kettlebell, intensity, loads);
  }

  if (exists(dumbbell)) {
    addLoad(dumbbell, intensity, loads);
  }

  if (!exists(loads)) {
    return weights;
  }

  weights.loads = loads;
  return weights;
};

const loadToString = (obj) => {
  const key = Object.keys(obj);
  const loads = obj[key];
  const f = Object.keys(loads)[0];
  const m = loads[f];

  return `${f}/${m} lbs.`;
};

const isEmpty = (obj) => {
  for (var key in obj) {
    if(obj.hasOwnProperty(key))
      return false;
  }

  return true;
}

const mapSingleLoadAndMovement = (reps, loads) => {
  const name = reps.movement[0].name;
  const lbs = loadToString(loads[0]);
  return `${name} ${lbs}`;
};

const mapMultipleLoadsAndMovements = (reps, loads) => {
  let result = [];

  for (let i = 0; i < reps.length; i++) {
    let loadNames = loads.map(o => Object.keys(o)).join(', ').split(', ');
    let temp = reps[i];

    const match = loadNames.filter(n => reps[i].movement === n);
    if (match.length !== 0) {
      const name = reps[i].movement;
      const loadObj = loads.filter(l => Object.keys(l)[0] === name)[0];
      const lbs = loadToString(loadObj);

      temp = `${reps[i].reps} ${reps[i].movement} ${lbs}`;
    }

    result.push(formattedRepsToString(temp));
  }

  return result;
};

const formatLoadedRepsToString = (reps, loads) => {
  if ((loads.length) === 1 && (!Array.isArray(reps))) {
    return mapSingleLoadAndMovement(reps, loads)
  };

  return mapMultipleLoadsAndMovements(reps, loads);
};

export const mapLoadToReps = (loads, formattedReps) => {
  if (isEmpty(loads)) {
    return formattedRepsToString(formattedReps);
  }

  const loadsArr = loads.loads;
  return formatLoadedRepsToString(formattedReps, loadsArr);
};
