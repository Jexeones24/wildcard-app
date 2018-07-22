import { assignLoads } from './weightLoad';
import { getRandom, getRandomXToY } from './random';
import { timeInSeconds } from './time';
import { toNearestTwo, toNearestFive, toNearestTen } from './nearest';
import { convertRepsToUnits, chooseUnit, calculateDistance } from './units';
import { movements as allMovements } from '../constants/movements';
import { AMRAP, FT, RFT, MAX, EMOM, E2MOM } from '../constants/workoutStyles';
import { COUNT_MAP } from './percent';
import { range } from './range';

const restFactor = (time) => time * 15;

const forAmrap = (time, count, movement, idx, percents) => {
  const totalSecs = time * 60;
  const multiplier = percents[idx] / 100;
  const secsPerMovement = Math.round((totalSecs * multiplier) / count);
  // const reps = toNearestTwo(getRandomXToY(5, 20));
  const reps = Math.floor(secsPerMovement / movement.secondsPerRep);
  const repsToDistance = calculateDistance(movement, reps);

  if (repsToDistance) {
    return repsToDistance;
  }

  return reps;
};

const forInterval = (length, count, movement) => {
  let totalWorkTime;
  let secondsPerRoundPerMovement;

  if (length === EMOM) {
    totalWorkTime = 60 - 10;
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

const perRound = (time, count, rds, movement, idx, percents) => {
  const totalSecondsPerRound = secsPerRound(time, rds);
  const multiplier = percents[idx] / 100;

  const secondsPerRoundPerMovement = Math.round((totalSecondsPerRound * multiplier) / count);
  const reps = Math.floor(secondsPerRoundPerMovement / movement.secondsPerRep);
  const repsToDistance = calculateDistance(movement, reps);

  if (repsToDistance) {
    return repsToDistance;
  }

  return toNearestFive(reps);
};


const forChipper = (time, count, movement, idx, intensity, percents) => {
  const totalSecs = (time * 60);
  const multiplier = percents[idx] / 100;
  const secsPerMovement = Math.ceil((totalSecs * multiplier) / count);
  const reps = Math.ceil(secsPerMovement / movement.secondsPerRep);
  const repsToDistance = calculateDistance(movement, reps);

  debugger;
  if (repsToDistance) {
    return repsToDistance;
  }

  return toNearestTen(reps);
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
        reps: movements.map((movement, idx) => forChipper(time, count, movement, idx, intensity, percents))
      };
    case MAX:
      return {
        loads: assignLoads(movements, intensity),
        reps: null
      };
    case RFT:
      return {
        loads: assignLoads(movements, intensity),
        reps: movements.map((movement, idx) => perRound(time, count, rds, movement, idx, percents))
      };
    case AMRAP:
      return {
        loads: assignLoads(movements, intensity),
        reps: movements.map((movement, idx) => forAmrap(randomTime, count, movement, idx, percents))
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
