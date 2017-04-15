export function getWeekArray(date: Date, firstDayOfWeek: number): (Date | null)[][];
export function getYear(date: Date): number;
export function setYear(date: Date, year: number): Date;
export function addDays(date: Date, days: number): Date;
export function addMonths(date: Date, months: number): Date;
export function addYears(date: Date, years: number): Date;
export function getFirstDayOfMonth(date: Date): Date;
export function monthDiff(date1: Date, date2: Date): number;

export interface PersianUtils {
  getWeekArray: typeof getWeekArray;
  getYear: typeof getYear;
  setYear: typeof setYear;
  addDays: typeof addDays;
  addMonths: typeof addMonths;
  addYears: typeof addYears;
  getFirstDayOfMonth: typeof getFirstDayOfMonth;
  monthDiff: typeof monthDiff;
}

const utils: PersianUtils;

export default utils;
