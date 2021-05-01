import moment from "moment-timezone";

export function dateToFromNowDaily(myDate, timezone) {
  // get from-now for this date
  var fromNow = moment.tz(myDate, timezone).fromNow();

  // ensure the date is displayed with today and yesterday
  return moment(myDate).calendar(null, {
    // when the date is closer, specify custom values
    lastWeek: "[Last] dddd",
    lastDay: "[Yesterday]",
    sameDay: "[Today]",
    nextDay: "[Tomorrow]",
    nextWeek: "dddd",
    // when the date is further away, use from-now functionality
    sameElse: function () {
      return "[" + fromNow + "]";
    },
  });
}
export function convertLocalToTimezone(localDt, localDtFormat, timezone) {
  return moment(localDt, localDtFormat).tz(timezone).toString();
}
