"use strict";

var moment = require('moment-jalaali');

function addWeek(weekArray, week) {
  var emptyDays = 7 - week.length;

  for (var i = 0; i < emptyDays; ++i) {
    week[weekArray.length ? 'push' : 'unshift'](null);
  }

  weekArray.push(week);
};

function getWeekArray(d, firstDayOfWeek) {
  var daysInMonth = moment.jDaysInMonth(moment(d).jYear(), moment(d).jMonth());

  var dayArray = [];
  for (var i = 1; i <= daysInMonth; i++) {
    dayArray.push(moment(d).jDate(i).toDate());
  }

  var weekArray = [];
  var week = [];

  dayArray.forEach(function (day) {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      addWeek(weekArray, week);
      week = [];
    }

    week.push(day);

    if (dayArray.indexOf(day) === dayArray.length - 1) {
      addWeek(weekArray, week);
    }
  });

  return weekArray;
}

function getYear(date) {
  return moment(date).jYear();
}

function setYear(date, year) {
  return moment(date).jYear(year).toDate();
}

function addDays(date, days) {
  return moment(date).add(days, 'days').toDate();
}

function addMonths(date, months) {
  return moment(date).add(months, 'jMonth').toDate();
}

function addYears(date, years) {
  return moment(date).add(years, 'jYear').toDate();
}

function getFirstDayOfMonth(date) {
  return moment(date).jDate(1).toDate();
}

function monthDiff(date1, date2) {
  var months = (moment(date1).jYear() - moment(date2).jYear()) * 12;
  months += moment(date1).jMonth();
  months -= moment(date2).jMonth();
  return months;
}

var utils = {
  getWeekArray: getWeekArray,
  getYear: getYear,
  setYear: setYear,
  addDays: addDays,
  addMonths: addMonths,
  addYears: addYears,
  getFirstDayOfMonth: getFirstDayOfMonth,
  monthDiff: monthDiff,
};

utils['default'] = utils;

module.exports = utils;