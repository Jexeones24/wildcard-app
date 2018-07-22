import { getRandomXToY } from './random';
import { SHORT, MODERATE } from '../constants/durations';
import { HI, MOD, LO } from '../constants/intensity';

export const roundsForTime = (duration) => {
  if (typeof duration !== 'string') {
    throw new Error ('argument must be a string');
  }

  switch (duration) {
    case SHORT:
      return {
        movementCount: getRandomXToY(2, 3),
        rounds: getRandomXToY(2, 3),
        intensity: HI,
      };
    case MODERATE:
      return {
        movementCount: getRandomXToY(2, 3),
        rounds: getRandomXToY(2, 4),
        intensity: MOD,
      };
    default:
      return {
        movementCount: getRandomXToY(3, 5),
        rounds: getRandomXToY(3, 5),
        intensity: LO,
      };
  }
};

export const roundsForTimeTitle = ({ rounds, style, timeDomain }) => `${rounds} ${style}`;
