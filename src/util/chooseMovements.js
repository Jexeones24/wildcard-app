import { getNRandom } from './random';
import { movements } from '../constants/movements';

export const getMovements = (movementCount) => getNRandom(movementCount, movements);
export const allCardio = movements.filter(m => m.type === 'cardio');
export const allWeightlifting = movements.filter(m => m.type === 'weightlifting');
export const allGymnastics = movements.filter(m => m.type === 'gymnastics');
