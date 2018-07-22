import { getRandom, getRandomXToY } from './random';
import { HI, MOD } from '../constants/intensity';
import { EMOM, E2MOM, E3MOM } from '../constants/workoutStyles';
import { SHORT, LONG } from '../constants/durations';

const getIntervalType = (timeDomain, duration) => {
  if (timeDomain % 2 === 0) {
    if (duration === LONG) { return E2MOM; }
    if (duration === SHORT) { return EMOM; }
    return getRandom([EMOM, E2MOM])
  } else if ((timeDomain % 2 !== 0) && duration === SHORT) {
    return EMOM;
  }

  return E3MOM;
};

export const interval = (timeDomain, duration) => {
  const intervalType = getIntervalType(timeDomain, duration);

  switch (intervalType) {
    case EMOM:
      return {
        length: EMOM,
        intensity: HI,
        movementCount: getRandomXToY(1, 2),
      };
    case E2MOM:
      return {
        length: E2MOM,
        intensity: MOD,
        movementCount: 2,
      };
    default:
      return {
        length: E3MOM,
        intensity: MOD,
        movementCount: getRandomXToY(2, 3),
      };
  }
};

export const intervalTitle = ({ intervalLength, timeDomain }) => `${intervalLength} for ${timeDomain} Minutes`;
