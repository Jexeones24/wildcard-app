import { getRandom } from './random';
import { SHORT, MODERATE } from '../constants/durations';

export const AMRAP = 'AMRAP';
export const EMOM = 'EMOM';
export const E2MOM = 'E2MOM';
export const E3MOM = 'E3MOM';
export const FT = 'FT';
export const INT = 'INT';
export const MAX = 'MAX';
export const RFT = 'RFT';
export const BUY_IN = 'BUY_IN';
export const CASH_OUT = 'CASH_OUT';
export const BOOK_ENDS = 'BOOK_ENDS';

const workoutStyles = [
  AMRAP,
  BOOK_ENDS,
  BUY_IN,
  CASH_OUT,
  EMOM,
  E2MOM,
  E3MOM,
  FT,
  INT,
  MAX,
  RFT
];

const shortStyles = getRandom([AMRAP, FT, INT, MAX, RFT]);
const moderateStyles = getRandom([AMRAP, BOOK_ENDS, RFT, FT, INT]);
const longStyles = getRandom([AMRAP, BOOK_ENDS, RFT, FT, INT]);

export const getWorkoutStyle = (duration) => {
  if (duration === SHORT) {
    return shortStyles;
  } else if (duration === MODERATE) {
    return moderateStyles;
  }

  return longStyles;
};
