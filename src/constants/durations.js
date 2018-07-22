import { range } from '../util/range';

export const SHORT = 'short';
export const MODERATE = 'moderate';
export const LONG = 'long';

export const durations = [
  {
    name: SHORT,
    range: range(8, 12)
  },
  {
    name: MODERATE,
    range: range(13, 25)
  },
  {
    name: LONG,
    range: range(26, 60)
  }
];

