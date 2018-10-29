const moment = require('moment');

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

const withinDays = (numberOfDays, dateString) => (value) => {
  if (!dateRegex.test(value)) return false;

  const numberOfDaysBetweenDates = moment(dateString || moment().format('YYYY-MM-DD')).diff(moment(value), 'days');

  return numberOfDaysBetweenDates <= numberOfDays;
};

module.exports = withinDays;

