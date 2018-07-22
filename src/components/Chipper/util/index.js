import { getRandomXToY } from '../../../util/random';
import { SHORT, MODERATE } from '../../../constants/durations';
import { HI, MOD, LO } from '../../../constants/intensity';

export const forTime = (duration) => {
  switch (duration) {
    case SHORT:
      return {
        intensity: HI,
        movementCount: getRandomXToY(2, 3),
      };
    case MODERATE:
      return {
        intensity: MOD,
        movementCount: getRandomXToY(2, 5),
      };
    default:
      return {
        intensity: LO,
        movementCount: getRandomXToY(3, 6),
      };
  }
};

export const chipperTitle = 'For Time';
