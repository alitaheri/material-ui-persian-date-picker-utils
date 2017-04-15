export declare function getWeekArray(date: Date, firstDayOfWeek: number): (Date | null)[][];
export declare function getYear(date: Date): number;
export declare function setYear(date: Date, year: number): Date;
export declare function addDays(date: Date, days: number): Date;
export declare function addMonths(date: Date, months: number): Date;
export declare function addYears(date: Date, years: number): Date;
export declare function getFirstDayOfMonth(date: Date): Date;
export declare function monthDiff(date1: Date, date2: Date): number;

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

declare const utils: PersianUtils;

export default utils;
