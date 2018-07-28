import { assignLoads } from './weightLoad';
import { getRandom, getRandomXToY } from './random';
import { timeInSeconds } from './time';
import { toNearestTwo, toNearestFive, toNearestTen } from './nearest';
import { convertRepsToUnits, chooseUnit, calculateDistance } from './units';
import { movements as allMovements } from '../constants/movements';
import { AMRAP, BOOK_ENDS, FT, RFT, MAX, EMOM, E2MOM } from './workoutStyle';
import { COUNT_MAP } from './percent';
import { range } from './range';
import {
  allCardio,
  allWeightlifting,
  allGymnastics
} from './chooseMovements';

const restFactor = (time) => time * 15;

const TYPE_MAP = {
  cardio: allCardio,
  gymnastics: allGymnastics,
  weightlifting: allWeightlifting
};

const getEnds = (time) => {
  const totalTime = time * 60;
  const endsTime = (time * .12) * 60;
  const type = getRandom(['cardio', 'weightlifting', 'gymnastics']);
  const movement = getRandom(TYPE_MAP[type]);
  const reps = Math.floor(endsTime / movement.secondsPerRep);
  const repsToDistance = calculateDistance(movement, reps);

  if (repsToDistance) {
    return {
      reps: repsToDistance,
      movement
    };
  }

  return {
    reps: toNearestFive(reps),
    movement
  };
};

const forBookEnds = (time, count, movement, idx, percents) => {
  const timeInSecs = time * 60;
  const endsTimeInSecs = (time * 60) * .4;
  const middleWorkoutTimeInSecs = timeInSecs - endsTimeInSecs;
  const multiplier = percents[idx] / 100;
  const secsPerMovement = Math.round((middleWorkoutTimeInSecs * multiplier) / count);
  const reps = Math.floor(secsPerMovement / movement.secondsPerRep);
  const repsToDistance = calculateDistance(movement, reps);

  if (repsToDistance) {
    return repsToDistance;
  }

  return toNearestFive(reps);
};

const forAmrap = (time, count, movement, idx, percents) => {
  const totalSecs = time * 60;
  const multiplier = percents[idx] / 100;
  const secsPerMovement = Math.floor((totalSecs * multiplier) / count);
  const reps = Math.floor(secsPerMovement / movement.secondsPerRep);
  const repsToDistance = calculateDistance(movement, reps);

  if (repsToDistance) {
    return repsToDistance;
  }

  return toNearestFive(reps);
};

const forInterval = (length, count, movement) => {
  let totalWorkTime;
  let secondsPerRoundPerMovement;

  if (length === EMOM) {
    totalWorkTime = 60 - 15;
    secondsPerRoundPerMovement = totalWorkTime / count;
    const reps = Math.floor(secondsPerRoundPerMovement / movement.secondsPerRep);
    const repsToDistance = calculateDistance(movement, reps);

    if (repsToDistance) {
      return repsToDistance;
    }

    return toNearestTwo(reps);
  }

  if (length === E2MOM) {
    totalWorkTime = 120 - 30;
    secondsPerRoundPerMovement = totalWorkTime / count;
    const reps = Math.floor(secondsPerRoundPerMovement / movement.secondsPerRep);
    const repsToDistance = calculateDistance(movement, reps);

    if (repsToDistance) {
      return repsToDistance;
    }

    return toNearestTwo(reps);
  }

  totalWorkTime = 180 - 45;
  secondsPerRoundPerMovement = totalWorkTime / count;
  const reps = Math.floor(secondsPerRoundPerMovement / movement.secondsPerRep);
  const repsToDistance = calculateDistance(movement, reps);

  if (repsToDistance) {
    return repsToDistance;
  }

  return toNearestFive(reps);
};

const secsPerRound = (time, rds) => {
  const rest = time * 15;
  const workTime = (time * 60) - rest;

  return Math.floor(workTime / rds);
};

const perRound = (time, rds, movement, idx, percents) => {
  const totalSecondsPerRound = secsPerRound(time, rds);
  const multiplier = percents[idx] / 100;

  const secondsPerRoundPerMovement = Math.round((totalSecondsPerRound * multiplier));
  const reps = Math.floor(secondsPerRoundPerMovement / movement.secondsPerRep);
  const repsToDistance = calculateDistance(movement, reps);

  if (repsToDistance) {
    return repsToDistance;
  }

  return toNearestFive(reps);
};


const forChipper = (time, movement, idx, intensity, percents) => {
  const totalSecs = (time * 60) - (time * 15);
  const multiplier = percents[idx] / 100;
  const secsPerMovement = (totalSecs * multiplier);
  const reps = Math.ceil(secsPerMovement / movement.secondsPerRep);
  const repsToDistance = calculateDistance(movement, reps);

  // if intensity high???
  if (repsToDistance) {
    return repsToDistance;
  }

  return toNearestFive(reps);
};

export const getRepsAndLoad = (time, style, count, rds, intervalLength, intensity, movements) => {
  const percents = getRandom(COUNT_MAP[count]);

  const lo = time - 4;
  const hi = time - 1;
  const randomTime = getRandom(range(lo, hi));

  switch (style) {
    case FT:
      return {
        loads: assignLoads(movements, intensity),
        reps: movements.map((movement, idx) => forChipper(time, movement, idx, intensity, percents))
      };
    case MAX:
      return {
        loads: assignLoads(movements, intensity),
        reps: null
      };
    case RFT:
      return {
        loads: assignLoads(movements, intensity),
        reps: movements.map((movement, idx) => perRound(time, rds, movement, idx, percents))
      };
    case AMRAP:
      return {
        loads: assignLoads(movements, intensity),
        reps: movements.map((movement, idx) => forAmrap(randomTime, count, movement, idx, percents))
      };
    case BOOK_ENDS:
      const ends = getEnds(time);
      return {
        loads: assignLoads(movements, intensity),
        reps: movements.map((movement, idx) => forBookEnds(time, count, movement, idx, percents)),
        endsMovement: ends.movement,
        repsForEnds: ends.reps
      };
    default:
      return {
        loads: assignLoads(movements, intensity),
        reps: movements.map((movement) => forInterval(intervalLength, count, movement, intensity))
      };
  }
};

export const formatReps = (reps, movements) => {
  if (reps === null) {
    return {
      reps: null,
      movement: movements
    };
  }

  return reps.map((rep, idx) => ({
    reps: rep,
    movement: allMovements[idx].name,
  }))
};

export const formatBookEndReps = (reps, movements, endsReps, endsMovement) => {
  let result = [];

  const singleBookEnd = {
    reps: Math.floor(endsReps / 2),
    movement: endsMovement.name
  };

  result.push(singleBookEnd);

  reps.map((rep, idx) => result.push({
    reps: rep,
    movement: allMovements[idx].name
  }));

  result.push(singleBookEnd);
  return result;
};
