/**
 * Takes a year number and returns whether it is a leap year.
 *
 * @param {number} year The year to identify as leap year
 */
export const isLeapYear = (year: number): boolean => {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
};
