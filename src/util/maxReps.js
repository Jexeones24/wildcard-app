import { HI } from '../constants/intensity';

export const maxReps = () => ({ intensity: HI, movementCount: 1 });

export const maxRepsTitle = ({ timeDomain }) => `Max Reps in ${timeDomain} Minutes`;
