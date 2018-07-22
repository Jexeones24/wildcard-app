import { durations } from '../constants/durations';

export const calculateDuration = (time) => durations.filter(d => d.range.includes(Number(time)))[0].name;

export const timeInSeconds = (t) => t * 60;

