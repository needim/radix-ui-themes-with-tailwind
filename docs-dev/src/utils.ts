import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// type safe object keys function
export const objKeys = <O extends object>(o: O): (keyof O)[] =>
  Object.keys(o) as (keyof O)[];
