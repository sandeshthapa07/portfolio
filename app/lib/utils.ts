import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// this is function which is used to merge tailwind classes with other classes
// which combines the classes in a single string and if if has double value then the last value will be used

/**
 * Merge tailwind classes with other classes.
 *
 * It combines the classes in a single string and if if has double value then the last value will be used
 *
 * @param inputs - A list of class names, or objects mapping class names to booleans
 * @returns A single class name string
 * @example
 *
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
