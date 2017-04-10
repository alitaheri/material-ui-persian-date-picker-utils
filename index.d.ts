export interface PersianUtils {
  getWeekArray: (date: Date, firstDayOfWeek: number) => (Date | null)[][];
  getYear: (date: Date) => number;
  setYear: (date: Date, year: number) => Date;
  addDays: (date: Date, days: number) => Date;
  addMonths: (date: Date, months: number) => Date;
  addYears: (date: Date, years: number) => Date;
  getFirstDayOfMonth: (date: Date) => Date;
  monthDiff: (date1: Date, date2: Date) => number;
}

const utils: PersianUtils;

export = utils;
