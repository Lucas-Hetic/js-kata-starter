import { v4 as uuidv4 } from 'uuid';

interface StaminaSession {
  id: string;
  distance?: number; /* meters */
  duration?: number; /* seconds */
  speed?: number; /* meters/seconds */
  date: Date;
  comments: string;
}

export function createStaminaSession():StaminaSession {
  return {
    id: uuidv4(),
    date: new Date(),
    comments:"",
  }
}