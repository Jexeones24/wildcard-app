import { getRandom } from '../../../util/random';
import { getIntervalType } from '../../../components/Interval/util';

export const AMRAP = 'AMRAP';
export const BOOK_ENDS = 'BOOK_ENDS';
export const EMOM = 'EMOM';
export const E2MOM = 'E2MOM';
export const E3MOM = 'E3MOM';
export const FT = 'FT';
export const INT = 'INT';
export const MAX = 'MAX';
export const RFT = 'RFT';

const styles = {
  short: [AMRAP, FT, INT, MAX, RFT],
  moderate: [AMRAP, BOOK_ENDS, RFT, FT, INT],
  long: [AMRAP, BOOK_ENDS, RFT, FT, INT]
};

const checkForInterval = (duration, type, time) => type.includes(INT) ? getIntervalType({ time, duration }) : type;

export const getWorkoutStyle = ({ duration }, time) => {
  const type = getRandom(styles[duration]);
  return checkForInterval(duration, type, time);
};
