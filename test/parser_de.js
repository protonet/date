/**
 * Module Dependencies
 */

var parse = require('../lib/parser');
var assert = require('better-assert');

/**
 * Some predefined dates
 */

var mon = new Date('May 13, 2013 01:30:00');
// 
// /**
//  * Test parser
//  */
// 
// /**
//  * Minutes
//  */
// 
// describe('minutes', function () {
//   it('10m', function () {
//     var date = parse('10m', mon);
//     assert('1:40:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('10min', function () {
//     var date = parse('10min', mon);
//     assert('1:40:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
//   
//   it('10 Min', function () {
//     var date = parse('10 Min', mon);
//     assert('1:40:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('10 Minuten', function () {
//     var date = parse('10 Minuten', mon);
//     assert('1:40:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('10 Minuten ab jetzt', function () {
//     var date = parse('10 Minuten ab jetzt', mon);
//     assert('1:40:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('10 Minuten ab Morgen', function () {
//     var date = parse('10 Minuten ab Morgen', mon);
//     assert('1:40:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// });
// 
// /**
//  * Hours
//  */
// 
// describe('stunden', function() {
//   it('in 5 stunden', function () {
//     var date = parse('in 5 stunden', mon);
//     assert('6:30:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
//   
//   it('in 5 Std', function () {
//     var date = parse('in 5 Std', mon);
//     assert('6:30:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('um 5 Uhr', function () {
//     var date = parse('um 5 Uhr', mon);
//     assert('5:00:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('um 17 Uhr', function () {
//     var date = parse('um 17 Uhr', mon);
//     assert('17:00:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('um 5', function () {
//     var date = parse('um 5', mon);
//     assert('5:00:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('um 17', function () {
//     var date = parse('um 17', mon);
//     assert('17:00:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('um 12:30', function () {
//     var date = parse('um 12:30', mon);
//     assert('12:30:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('um 12.30', function () {
//     var date = parse('um 12.30', mon);
//     assert('12:30:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('um 23:35', function () {
//     var date = parse('um 23:35', mon);
//     assert('23:35:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('um 0:30', function () {
//     var date = parse('um 0:30', mon);
//     assert('0:30:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// });
// 
// /**
//  * Days
//  */
// 
// describe('tage', function () {
//   it('in 2 tagen', function () {
//     var date = parse('in 2 tagen', mon);
//     assert('1:30:00' == t(date));
//     assert('5/15/13' == d(date));
//   });
// 
//   it('in 2 tage', function () {
//     var date = parse('in 2 tage', mon);
//     assert('1:30:00' == t(date));
//     assert('5/15/13' == d(date));
//   });
// });
// 
// /**
//  * Dates
//  */
// 
// describe('datums', function () {
//   it('dienstag um 9', function () {
//     var date = parse('dienstag um 9', mon);
//     assert('9:00:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// 
//   it('montag um 9', function () {
//     var date = parse('montag um 9', mon);
//     assert('9:00:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('Montag um 9', function () {
//     var date = parse('Montag um 9', mon);
//     assert('9:00:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('montag um 9 uhr', function () {
//     var date = parse('montag um 9 uhr', mon);
//     assert('9:00:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('montag um 21', function () {
//     var date = parse('montag um 21', mon);
//     assert('21:00:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('montag um 1:00', function () {
//     var date = parse('montag um 1:00', mon);
//     assert('1:00:00' == t(date));
//     assert('5/20/13' == d(date));
//   });
// 
//   it('nächsten montag um 1:00', function () {
//     var date = parse('nächsten montag um 1:00', mon);
//     assert('1:00:00' == t(date));
//     assert('5/20/13' == d(date));
//   });
//   
//   it('nächster montag um 1:00', function () {
//     var date = parse('nächster montag um 1:00', mon);
//     assert('1:00:00' == t(date));
//     assert('5/20/13' == d(date));
//   });
//   
//   it('naechster mo um 23:33', function () {
//     var date = parse('naechster montag um 01:00', mon);
//     assert('1:00:00' == t(date));
//     assert('5/20/13' == d(date));
//   });
// 
//   it('letzter montag um 1:00', function () {
//     var date = parse('letzter montag um 1:00', mon);
//     assert('1:00:00' == t(date));
//     assert('5/6/13' == d(date));
//   });
//   
//   it('letzter montag 1:00', function () {
//     var date = parse('letzter montag 1:00', mon);
//     assert('1:00:00' == t(date));
//     assert('5/6/13' == d(date));
//   });
//   
//   it('am letzten montag um 1:22 uhr', function () {
//     var date = parse('letzter montag um 1:22', mon);
//     assert('1:22:00' == t(date));
//     assert('5/6/13' == d(date));
//   });
// });
// 
// /**
//  * Tomorrow
//  */
// 
// describe('morgen', function () {
//   it('morgen um 15:00', function () {
//     var date = parse('morgen um 15:00', mon);
//     assert('15:00:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
//   
//   it('Morgen 15:00', function () {
//     var date = parse('Morgen 16:22', mon);
//     assert('16:22:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// });

/**
 * Yesterday
 */

describe('gestern', function () {
  it('gestern um 15:00', function () {
    var date = parse('gestern um 15:00', mon);
    assert('15:00:00' == t(date));
    assert('5/12/13' == d(date));
  });
  
  it('Gestern um 15:00', function () {
    var date = parse('Gestern um 15:00', mon);
    assert('15:00:00' == t(date));
    assert('5/12/13' == d(date));
  });

  // it('Gestern um 15:00', function () {
  //   var date = parse('Gestern um 15:00', mon);
  //   assert('15:00:00' == t(date));
  //   assert('5/12/13' == d(date));
  // });
  // 
  // it('Gestern um 12:30am', function () {
  //   var date = parse('Gestern um 12:30am', mon);
  //   assert('0:30:00' == t(date));
  //   assert('5/12/13' == d(date));
  // });
});
// 
// /**
//  * Tonight
//  */
// 
// describe('tonight', function () {
//   it('5pm tonight', function () {
//     var date = parse('5pm tonight', mon);
//     assert('17:00:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('tonight at 5pm', function () {
//     var date = parse('tonight at 5pm', mon);
//     assert('17:00:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('tonight at 5', function () {
//     var date = parse('tonight at 5', mon);
//     assert('17:00:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// });
// 
// /**
//  * Midnight
//  */
// describe('mightnight', function () {
//   it('midnight', function () {
//     var date = parse('midnight', mon);
// 
//     assert('0:00:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// 
//   it('tomorrow at midnight', function () {
//     var date = parse('tomorrow at midnight', mon);
//     assert('0:00:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// 
//   it('midnight (@ 1:30pm)', function () {
//     var afternoon = new Date('May 13, 2013 13:30:00')
//     var date = parse('midnight', afternoon);
//     assert('0:00:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// });
// 
// /**
//  * Noon
//  */
// 
// describe('noon', function () {
//   it('noon', function () {
//     var date = parse('noon', mon);
//     assert('12:00:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('tomorrow at noon', function () {
//     var date = parse('tomorrow at noon', mon);
//     assert('12:00:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// 
//   it('noon (@ 1:30pm)', function () {
//     var afternoon = new Date('May 13, 2013 13:30:00')
//     var date = parse('noon', afternoon);
//     assert('12:00:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// });
// 
// /**
//  * Weeks
//  */
// 
// describe('weeks', function () {
//   it('next week tuesday', function () {
//     var date = parse('next week tuesday', mon);
//     assert('1:30:00' == t(date));
//     assert('5/21/13' == d(date));
//   });
// 
//   it('next wk tuesday', function () {
//     var date = parse('next week tuesday', mon);
//     assert('1:30:00' == t(date));
//     assert('5/21/13' == d(date));
//   });
// 
//   it('next week tuesday at 4:30pm', function () {
//     var date = parse('next week tuesday at 4:30pm', mon);
//     assert('16:30:00' == t(date));
//     assert('5/21/13' == d(date));
//   });
// 
//   it('2 weeks from wednesday', function () {
//     var date = parse('2 weeks from wednesday', mon);
//     assert('1:30:00' == t(date));
//     assert('5/29/13' == d(date));
//   });
// });
// 
// /**
//  * Night
//  */
// 
// describe('night', function() {
//   it('night', function () {
//     var date = parse('night', mon);
//     assert('19:00:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('tomorrow night', function () {
//     var date = parse('tomorrow night', mon);
//     assert('19:00:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// 
//   it('tomorrow night at 9', function () {
//     var date = parse('tomorrow night at 9', mon);
//     assert('21:00:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// 
//   it('last night', function () {
//     var date = parse('last night', mon);
//     assert('19:00:00' == t(date));
//     assert('5/12/13' == d(date));
//   });
// })
// 
// /**
//  * Evening
//  */
// 
// describe('evening', function() {
//   it('evening', function () {
//     var date = parse('evening', mon);
//     assert('17:00:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('tomorrow evening', function () {
//     var date = parse('tomorrow evening', mon);
//     assert('17:00:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// 
//   it('tomorrow evening at 9', function () {
//     var date = parse('tomorrow evening at 9', mon);
//     assert('21:00:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// 
//   it('last evening', function () {
//     var date = parse('last evening', mon);
//     assert('17:00:00' == t(date));
//     assert('5/12/13' == d(date));
//   });
// })
// 
// /**
//  * Afternoon
//  */
// 
// describe('afternoon', function() {
//   it('afternoon', function () {
//     var date = parse('afternoon', mon);
//     assert('14:00:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('tomorrow afternoon', function () {
//     var date = parse('tomorrow afternoon', mon);
//     assert('14:00:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// 
//   it('last afternoon', function () {
//     var date = parse('last afternoon', mon);
//     assert('14:00:00' == t(date));
//     assert('5/12/13' == d(date));
//   });
// })
// 
// /**
//  * Morning
//  */
// 
// describe('morning', function() {
//   it('morning', function () {
//     var date = parse('morning', mon);
//     assert('8:00:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('tomorrow morning', function () {
//     var date = parse('tomorrow morning', mon);
//     assert('8:00:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// 
//   it('last morning', function () {
//     var date = parse('last morning', mon);
//     assert('8:00:00' == t(date));
//     assert('5/12/13' == d(date));
//   });
// 
//   it('this morning at 9', function () {
//     var date = parse('this morning at 9', mon);
//     assert('9:00:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// })
// 
// /**
//  * Months
//  */
// 
// describe('months', function () {
//   it('this month', function () {
//     var date = parse('this month', mon);
//     assert('1:30:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('next month', function () {
//     var date = parse('next month', mon);
//     assert('1:30:00' == t(date));
//     assert('6/13/13' == d(date));
//   });
// 
//   it('last month', function () {
//     var date = parse('last month', mon);
//     assert('1:30:00' == t(date));
//     assert('4/13/13' == d(date));
//   });
// 
//   it('2 months from tomorrow', function () {
//     var date = parse('2 months from tomorrow', mon);
//     assert('1:30:00' == t(date));
//     assert('7/14/13' == d(date));
//   });
// 
//   it('2 monthes from tomorrow (misspelling)', function () {
//     var date = parse('2 monthes from tomorrow', mon);
//     assert('1:30:00' == t(date));
//     assert('7/14/13' == d(date));
//   });
// 
//   it('should handle months with less days', function () {
//     var date = parse('1 month', new Date('01/31/2011'));
//     assert('2/28/11' == d(date))
//   });
// 
//   it('should handle leap year', function () {
//     var date = parse('1 month', new Date('01/31/2012'));
//     assert('2/29/12' == d(date));
//   });
// 
//   it('tomorrow afternoon at 4:30pm 1 month from now', function () {
//     var date = parse('tomorrow afternoon at 4:30pm 1 month from now', mon);
//     assert('16:30:00' == t(date));
//     assert('6/14/13' == d(date));
//   });
// });
// 
// /**
//  * Year
//  */
// 
// describe('year', function() {
//   it('this year', function() {
//     var date = parse('year', mon);
//     assert('1:30:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('next year', function () {
//     var date = parse('next year', mon);
//     assert('1:30:00' == t(date));
//     assert('5/13/14' == d(date));
//   });
// 
//   it('last year', function () {
//     var date = parse('last year', mon);
//     assert('1:30:00' == t(date));
//     assert('5/13/12' == d(date));
//   });
// 
//   it('2 years from yesterday at 5pm', function () {
//     var date = parse('2 years from yesterday at 5pm', mon);
//     assert('17:00:00' == t(date));
//     assert('5/12/15' == d(date));
//   });
// 
//   it('2 years ago', function() {
//     var date = parse('2 years ago', mon);
//     assert('1:30:00' == t(date));
//     assert('5/13/11' == d(date));
//   })
// 
//   it('2 years ago tomorrow', function() {
//     var date = parse('2 years ago tomorrow', mon);
//     assert('1:30:00' == t(date));
//     assert('5/14/11' == d(date));
//   })
// });
// 
// /**
//  * Dates in the past
//  */
// 
// describe('dates in the past', function() {
//   var past = new Date('May 13, 2013 18:00:00')
// 
//   it('tomorrow afternoon', function() {
//     var date = parse('tomorrow afternoon', past);
//     assert('14:00:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// 
//   it('tomorrow afternoon at 3pm', function() {
//     var date = parse('tomorrow afternoon at 3pm', past);
//     assert('15:00:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// 
//   // Need to place .nextTime() at the end
// 
//   it('3pm tomorrow afternoon', function () {
//     var date = parse('3pm tomorrow afternoon', past);
//     assert('15:00:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// });
// 
// /**
//  * Times
//  */
// describe('times', function() {
//   it('1:30', function () {
//     var date = parse('1:30', mon);
//     assert('1:30:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('2:31', function () {
//     var date = parse('2:31', mon);
//     assert('2:31:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('00:28', function () {
//     // past time will result in tomorrow
//     var date = parse('00:28', mon);
//     assert('0:28:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// });
// 
// /**
//  * Ignore other input
//  */
// 
// describe('other inputs', function () {
//   it('yesterday, 2 years ago--.', function() {
//     var date = parse('yesterday, 2 years ago--.', mon);
//     assert('1:30:00' == t(date));
//     assert('5/12/11' == d(date))
//   });
// 
//   it('invalid', function() {
//     var date = parse('invalid', mon);
//     assert(d(mon) == d(date));
//   });
// 
//   it('empty', function() {
//     var date = parse('', mon);
//     assert(d(mon) == d(date));
//   });
// });
// 
// /**
//  * Bug fixes
//  */
// 
// describe('bug fixes', function () {
//   it('at 12:30pm (fixes: #6)', function () {
//     var after = new Date('May 13, 2013 13:30:00');
//     var date = parse('at 12:30pm', after);
//     assert('12:30:00' == t(date));
//     assert('5/14/13' == d(date));
//   });
// 
//   it('at X in the morning (fixes: #36)', function() {
//     var past = new Date('May 13, 2013 18:00:00')
//     var date = parse('tomorrow at 9 in the morning', past);
//     assert('9:00:00' == t(date));
//     assert('5/14/13' == d(date));
//   })
// });
// 
// /**
//  * If context is a string parse it as date
//  */
// 
// describe('parse context if its a string (fixes: #38)', function () {
//   it('string context', function () {
//     var today = new Date();
//     today.setDate(today.getDate() - 1);
//     var date = parse('today at 11am', 'yesterday at 12:30am');
// 
//     assert(d(date) == d(today));
//     assert('11:00:00' == t(date));
//   });
// });
// 
// 
// /**
//  * Support for dates with months
//  */
// 
// describe('months (fixes: #10)', function (){
//   var after = new Date('May 13, 2013 13:30:00');
//   it('2nd of January', function () {
//     var date = parse('2nd of January 12:30', after);
//     assert('12:30:00' == t(date));
//     assert('1/2/13' == d(date));
//   });
// 
//   it('1st of March', function () {
//     var date = parse('1st of March', after);
//     assert('13:30:00' == t(date));
//     assert('3/1/13' == d(date));
//   });
// 
//   it('31st of September 4:00am', function () {
//     var date = parse('31st of September 4:00am', after);
//     assert('4:00:00' == t(date));
//     assert('9/31/13' != d(date));
//     assert('9/30/13' == d(date));
//   });
// 
//   it('1st of January 4:00am', function(){
//     var date = parse('1st of January 4:00am', after);
//     assert('4:00:00' == t(date));
//     assert('1/1/13' == d(date));
//   })
// });
// 
// /**
//  * Suppport 'ago' modifier
//  */
// 
// describe('support "ago" modifier (fixes: #20)', function (){
//   var after = new Date('May 13, 2013 13:30:00');
// 
//   it('x seconds ago', function () {
//     var date = parse('10 seconds ago', after);
//     assert('13:29:50' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('x minutes ago', function () {
//     var date = parse('5 minutes ago', after);
//     assert('13:25:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
// 
//   it('x minute ago', function () {
//     var date = parse('1 minutes ago', after);
//     assert('13:29:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('x hours ago', function () {
//     var date = parse('5 hours ago', after);
//     assert('8:30:00' == t(date));
//     assert('5/13/13' == d(date));
//   });
// 
//   it('x days ago', function () {
//     var date = parse('5 day ago', after);
//     assert('13:30:00' == t(date));
//     assert('5/8/13' == d(date));
//   });
// 
//   it('x week ago', function () {
//     var date = parse('2 week ago', after);
//     assert('13:30:00' == t(date));
//     assert('4/29/13' == d(date));
//   });
// 
//   it('x months ago', function () {
//     var date = parse('10 months ago', after);
//     assert('13:30:00' == t(date));
//     assert('7/13/12' == d(date));
//   });
// 
//   it('x year ago', function () {
//     var date = parse('10 year ago', after);
//     assert('13:30:00' == t(date));
//     assert('5/13/03' == d(date));
//   });
// 
// });


/**
 * Time helper function
 */

function t(date) {
  var t = date.toTimeString().split(' ')[0];
  t = ('0' == t[0]) ? t.slice(1) : t;
  return t;
}

/**
 * Date helper function
 */

function d(date) {
  var d = date.toString();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = '' + date.getFullYear();
  return [month, day, year.slice(2)].join('/');
}

