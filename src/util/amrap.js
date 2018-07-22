import { getRandomXToY } from './random';
import { SHORT, MODERATE } from '../constants/durations';
import { HI, MOD, LO } from '../constants/intensity';

export const amrap = (duration) => {
  switch (duration) {
    case SHORT:
      return {
        intensity: HI,
        movementCount: getRandomXToY(2, 3),
      };
    case MODERATE:
      return {
        intensity: MOD,
        movementCount: getRandomXToY(2, 4),
      };
    default:
      return {
        intensity: LO,
        movementCount: getRandomXToY(3, 5),
      };
  }
};

export const amrapTitle = ({ timeDomain }) => `AMRAP ${timeDomain}`;
