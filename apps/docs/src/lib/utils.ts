import { clsx as stylx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function createClasses(...inputs: ClassValue[]) {
  return twMerge(stylx(inputs));
}
