import "interval";
import "time";
import "year";

d3_time.doy = d3_time_interval(function(date) {
  var day = new d3_date(2000, 0);
  day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
  return day;
}, function(date, offset) {
  date.setDate(date.getDate() + offset);
}, function(date) {
  return d3_time.dayOfYear(date);
});

d3_time.doys = d3_time.doy.range;
d3_time.doys.utc = d3_time.doy.utc.range;

// d3_time.dayOfYear = function(date) {
//   var year = d3_time.year(date);
//   return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
// };
