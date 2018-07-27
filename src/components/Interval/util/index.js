import { getRandom } from '../../../util/random';
import { INTENSITY_MAP } from '../../../constants/intensity';
import { EMOM, E2MOM, E3MOM } from '../../../util/workoutStyle';
import { SHORT, LONG } from '../../../constants/durations';

export const getIntervalType = ({ time, duration }) => {
  if (time % 2 === 0) {
    if (duration === LONG) { return E2MOM; }
    if (duration === SHORT) { return EMOM; }
    return getRandom([EMOM, E2MOM])
  } else if ((time % 2 !== 0) && duration === SHORT) {
    return EMOM;
  }

  return E3MOM;
};

const counts = {
  EMOM: getRandom([1, 2]),
  E2MOM: 2,
  E3MOM: getRandom([2, 3])
};

export const buildIntervalDetails = (duration, style) => {
  const length = style;
  const intensity = INTENSITY_MAP[duration];
  const movementCount = counts[style];

  return {
    length,
    intensity,
    movementCount
  };
};

export const intervalTitle = ({ intervalLength, time }) => `${intervalLength} for ${time} Minutes`;
