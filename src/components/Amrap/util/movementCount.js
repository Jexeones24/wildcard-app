import { getRandom, getRandomXToY } from '../../../util/random';
import { SHORT, MODERATE } from '../../../constants/durations';
import { LO, MOD, HI } from '../../../constants/intensity';

export const movementCountForAmrap = (duration) => {
  switch (duration) {
    case SHORT:
    return {
      intensity: HI,
      movementCount: getRandomXToY(2, 3)
    };

    case MODERATE:
    return {
      intensity: MOD,
      movementCount: getRandomXToY(2, 4)
    };

    default:
    return {
      intensity: LO,
      movementCount: getRandomXToY(3, 4)
    };
  };
};
