/**
 * Module Dependencies
 */

var parse = require('../lib/parser');
var assert = require('better-assert');

/**
 * Some predefined dates
 */

var mon = new Date('May 13, 2013 01:30:00');

/**
 * Test parser
 */

/**
 * Minutes
 */

describe('minutes', function () {
  // it('10m', function () {
  //   var date = parse('10m', mon);
  //   assert('1:40:00' == t(date));
  //   assert('5/13/13' == d(date));
  // });

  it('10min', function () {
    var date = parse('10min', mon);
    assert('1:40:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('10 minutes', function () {
    var date = parse('10 minutes', mon);
    assert('1:40:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('10 minutes from now', function () {
    var date = parse('10 minutes from now', mon);
    assert('1:40:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('10 minutes starting tomorrow', function () {
    var date = parse('10 minutes starting tomorrow', mon);
    assert('1:40:00' == t(date));
    assert('5/14/13' == d(date));
  });
});

/**
 * Hours
 */

describe('hours', function() {
  it('in 5 hours', function () {
    var date = parse('in 5 hours', mon);
    assert('6:30:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('at 5am', function () {
    var date = parse('at 5am', mon);
    assert('5:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('at 5pm', function () {
    var date = parse('5pm', mon);
    assert('17:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('at5', function () {
    var date = parse('at5', mon);
    assert('5:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('at 5 o\'clock', function () {
    var date = parse('at 5 o\'clock', mon);
    assert('5:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('at 17', function () {
    var date = parse('at 17', mon);
    assert('17:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('at 12:30', function () {
    var date = parse('at 12:30', mon);
    assert('12:30:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('at 12.30', function () {
    var date = parse('at 12.30', mon);
    assert('12:30:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('at 23:35', function () {
    var date = parse('at 23:35', mon);
    assert('23:35:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('at 0:30', function () {
    var date = parse('at 0:30', mon);
    assert('0:30:00' == t(date));
    assert('5/14/13' == d(date));
  });
});

/**
 * Days
 */

describe('days', function () {
  it('in 2 days', function () {
    var date = parse('in 2 days', mon);
    assert('1:30:00' == t(date));
    assert('5/15/13' == d(date));
  });
  // it('in 2d', function () {
  //   var date = parse('in 2d', mon);
  //   assert('1:30:00' == t(date));
  //   assert('5/15/13' == d(date));
  // });
});

/**
 * Dates
 */

describe('dates', function () {
  it('tuesday at 9am', function () {
    var date = parse('tuesday at 9am', mon);
    assert('9:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('monday at 9am', function () {
    var date = parse('monday at 9am', mon);
    assert('9:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('Monday at 9am', function () {
    var date = parse('Monday at 9am', mon);
    assert('9:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('monday at 9', function () {
    var date = parse('monday at 9', mon);
    assert('9:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('monday at 21', function () {
    var date = parse('monday at 21', mon);
    assert('21:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('monday at 1:00am', function () {
    var date = parse('monday at 1:00am', mon);
    assert('1:00:00' == t(date));
    assert('5/20/13' == d(date));
  });

  it('next monday at 1:00am', function () {
    var date = parse('next monday at 1:00am', mon);
    assert('1:00:00' == t(date));
    assert('5/20/13' == d(date));
  });

  it('last monday at 1:00am', function () {
    var date = parse('last monday at 1:00am', mon);
    assert('1:00:00' == t(date));
    assert('5/6/13' == d(date));
  });
});

/**
 * Tomorrow
 */

describe('tomorrow', function () {
  it('tomorrow at 3pm', function () {
    var date = parse('tomorrow at 3pm', mon);
    assert('15:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
});


/**
 * Today
 */

describe('today', function () {
  it('today at 1:00', function () {
    var date = parse('today at 1:00', mon);
    assert('1:00:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('Today 16:22', function () {
    var date = parse('Today 16:22', mon);
    assert('16:22:00' == t(date));
    assert('5/13/13' == d(date));
  });
});


/**
 * Day After Tomorrow
 */

describe('day after tomorrow', function () {
  it('the day after tomorrow at 3pm', function () {
    var date = parse('the day after tomorrow at 3pm', mon);
    assert('15:00:00' == t(date));
    assert('5/15/13' == d(date));
  });
  
  it('the Day after tomorrow at 3pm', function () {
    var date = parse('the Day after tomorrow at 3pm', mon);
    assert('15:00:00' == t(date));
    assert('5/15/13' == d(date));
  });
  
  it('on the day after tomorrow at 3pm', function () {
    var date = parse('on the day after tomorrow at 3pm', mon);
    assert('15:00:00' == t(date));
    assert('5/15/13' == d(date));
  });
  
  it('eat pizza day after tomorrow at 3pm', function () {
    var date = parse('eat pizza day after tomorrow at 3pm', mon);
    assert('15:00:00' == t(date));
    assert('5/15/13' == d(date));
  });
});

/**
 * Yesterday
 */

describe('yesterday', function () {
  it('yesterday at 3pm', function () {
    var date = parse('yesterday at 3pm', mon);
    assert('15:00:00' == t(date));
    assert('5/12/13' == d(date));
  });

  it('Yesterday at 15', function () {
    var date = parse('Yesterday at 15', mon);
    assert('15:00:00' == t(date));
    assert('5/12/13' == d(date));
  });

  it('yesterday at 12:30am', function () {
    var date = parse('yesterday at 12:30am', mon);
    assert('0:30:00' == t(date));
    assert('5/12/13' == d(date));
  });
});

/**
 * Tonight
 */

describe('tonight', function () {
  it('5 oclock tonight', function () {
    var date = parse('5 tonight', mon);
    assert('17:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('tonight at 5pm', function () {
    var date = parse('tonight at 5pm', mon);
    assert('17:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('tonight at 5', function () {
    var date = parse('tonight at 5', mon);
    assert('17:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('tonight at 5:30', function () {
    var date = parse('tonight at 5:30', mon);
    assert('17:30:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('tonight 5:30', function () {
    var date = parse('tonight 5:30', mon);
    assert('17:30:00' == t(date));
    assert('5/13/13' == d(date));
  });
});

/**
 * Midnight
 */
describe('midnight', function () {
  it('midnight', function () {
    var date = parse('midnight', mon);

    assert('0:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('tomorrow at midnight', function () {
    var date = parse('tomorrow at midnight', mon);
    assert('0:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('midnight (@ 1:30pm)', function () {
    var afternoon = new Date('May 13, 2013 13:30:00');
    var date = parse('midnight', afternoon);
    assert('0:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
});

/**
 * Noon
 */

describe('noon', function () {
  it('noon', function () {
    var date = parse('noon', mon);
    assert('12:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('tomorrow at noon', function () {
    var date = parse('tomorrow at noon', mon);
    assert('12:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('noon (@ 1:30pm)', function () {
    var afternoon = new Date('May 13, 2013 13:30:00');
    var date = parse('noon', afternoon);
    assert('12:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
});

/**
 * Weeks
 */

describe('weeks', function () {
  it('next week tuesday', function () {
    var date = parse('next week tuesday', mon);
    assert('1:30:00' == t(date));
    assert('5/21/13' == d(date));
  });

  it('next wk tuesday', function () {
    var date = parse('next week tuesday', mon);
    assert('1:30:00' == t(date));
    assert('5/21/13' == d(date));
  });
  
  it('Next week tuesday', function() {
    var wed = new Date('May 15, 2013 01:30:00');
    var date = parse('Next week tuesday', wed);
    assert('1:30:00' == t(date));
    assert('5/21/13' == d(date));
  });
  
  // TODO: doesn't really make sense
  it('Next week', function() {
    var sun = new Date('May 12, 2013 01:30:00');
    var date = parse('Next week', sun);
    assert('1:30:00' == t(date));
    assert('5/20/13' == d(date));
  });
  
  it('Next week', function() {
    var date = parse('Next week', mon);
    assert('1:30:00' == t(date));
    assert('5/20/13' == d(date));
  });
  
  it('Next week', function() {
    var wed = new Date('May 15, 2013 01:30:00');
    var date = parse('Next week', wed);
    assert('1:30:00' == t(date));
    assert('5/20/13' == d(date));
  });

  it('next week tuesday at 4:30pm', function () {
    var date = parse('next week tuesday at 4:30pm', mon);
    assert('16:30:00' == t(date));
    assert('5/21/13' == d(date));
  });

  it('2 weeks from wednesday', function () {
    var date = parse('2 weeks from wednesday', mon);
    assert('1:30:00' == t(date));
    assert('5/29/13' == d(date));
  });
});

/**
 * Night
 */

describe('night', function() {
  it('night', function () {
    var date = parse('night', mon);
    assert('19:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('tomorrow night', function () {
    var date = parse('tomorrow night', mon);
    assert('19:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('tomorrow night at 9', function () {
    var date = parse('tomorrow night at 9', mon);
    assert('21:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('last night', function () {
    var date = parse('last night', mon);
    assert('19:00:00' == t(date));
    assert('5/12/13' == d(date));
  });
});

/**
 * Evening
 */

describe('evening', function() {
  it('evening', function () {
    var date = parse('evening', mon);
    assert('17:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('tomorrow evening', function () {
    var date = parse('tomorrow evening', mon);
    assert('17:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('tomorrow evening at 9', function () {
    var date = parse('tomorrow evening at 9', mon);
    assert('21:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('last evening', function () {
    var date = parse('last evening', mon);
    assert('17:00:00' == t(date));
    assert('5/12/13' == d(date));
  });
});

/**
 * Afternoon
 */

describe('afternoon', function() {
  it('afternoon', function () {
    var date = parse('afternoon', mon);
    assert('14:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('tomorrow afternoon', function () {
    var date = parse('tomorrow afternoon', mon);
    assert('14:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('last afternoon', function () {
    var date = parse('last afternoon', mon);
    assert('14:00:00' == t(date));
    assert('5/12/13' == d(date));
  });
});

/**
 * Morning
 */

describe('morning', function() {
  it('morning', function () {
    var date = parse('morning', mon);
    assert('8:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('tomorrow morning', function () {
    var date = parse('tomorrow morning', mon);
    assert('8:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('last morning', function () {
    var date = parse('last morning', mon);
    assert('8:00:00' == t(date));
    assert('5/12/13' == d(date));
  });

  it('this morning at 9', function () {
    var date = parse('this morning at 9', mon);
    assert('9:00:00' == t(date));
    assert('5/13/13' == d(date));
  });
});

/**
 * Months
 */

describe('months', function () {
  it('this month', function () {
    var date = parse('this month', mon);
    assert('1:30:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('next month', function () {
    var date = parse('next month', mon);
    assert('1:30:00' == t(date));
    assert('6/13/13' == d(date));
  });

  it('last month', function () {
    var date = parse('last month', mon);
    assert('1:30:00' == t(date));
    assert('4/13/13' == d(date));
  });

  it('2 months from tomorrow', function () {
    var date = parse('2 months from tomorrow', mon);
    assert('1:30:00' == t(date));
    assert('7/14/13' == d(date));
  });

  it('2 monthes from tomorrow (misspelling)', function () {
    var date = parse('2 monthes from tomorrow', mon);
    assert('1:30:00' == t(date));
    assert('7/14/13' == d(date));
  });

  it('should handle months with less days', function () {
    var date = parse('1 month', new Date('01/31/2011'));
    assert('2/28/11' == d(date));
  });

  it('should handle leap year', function () {
    var date = parse('1 month', new Date('01/31/2012'));
    assert('2/29/12' == d(date));
  });

  it('tomorrow afternoon at 4:30pm 1 month from now', function () {
    var date = parse('tomorrow afternoon at 4:30pm 1 month from now', mon);
    assert('16:30:00' == t(date));
    assert('6/14/13' == d(date));
  });
});

/**
 * Year
 */

describe('year', function() {
  it('this year', function() {
    var date = parse('year', mon);
    assert('1:30:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('next year', function () {
    var date = parse('next year', mon);
    assert('1:30:00' == t(date));
    assert('5/13/14' == d(date));
  });

  it('last year', function () {
    var date = parse('last year', mon);
    assert('1:30:00' == t(date));
    assert('5/13/12' == d(date));
  });

  it('2 years from yesterday at 5pm', function () {
    var date = parse('2 years from yesterday at 5pm', mon);
    assert('17:00:00' == t(date));
    assert('5/12/15' == d(date));
  });

  it('2 years ago', function() {
    var date = parse('2 years ago', mon);
    assert('1:30:00' == t(date));
    assert('5/13/11' == d(date));
  });

  it('2 years ago tomorrow', function() {
    var date = parse('2 years ago tomorrow', mon);
    assert('1:30:00' == t(date));
    assert('5/14/11' == d(date));
  });
});

/**
 * Dates in the past
 */

describe('dates in the past', function() {
  var past = new Date('May 13, 2013 18:00:00');

  it('tomorrow afternoon', function() {
    var date = parse('tomorrow afternoon', past);
    assert('14:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('tomorrow afternoon at 3pm', function() {
    var date = parse('tomorrow afternoon at 3pm', past);
    assert('15:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  // Need to place .nextTime() at the end

  it('3pm tomorrow afternoon', function () {
    var date = parse('3pm tomorrow afternoon', past);
    assert('15:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
});

/**
 * Times
 */
describe('times', function() {
  it('1:30', function () {
    var date = parse('1:30', mon);
    assert('1:30:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('2:31', function () {
    var date = parse('2:31', mon);
    assert('2:31:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('00:28', function () {
    // past time will result in tomorrow
    var date = parse('00:28', mon);
    assert('0:28:00' == t(date));
    assert('5/14/13' == d(date));
  });
});

/**
 * Ignore other input
 */

describe('other inputs', function () {
  it('yesterday, 2 years ago--.', function() {
    var date = parse('yesterday, 2 years ago--.', mon);
    assert('1:30:00' == t(date));
    assert('5/12/11' == d(date));
  });

  it('invalid', function() {
    var date = parse('invalid', mon);
    assert(d({ date: mon }) == d(date));
  });

  it('empty', function() {
    var date = parse('', mon);
    assert('1:30:00' == t(date));
    assert('5/13/13' == d(date));
  });
});

/**
 * Bug fixes
 */

describe('bug fixes', function () {
  it('at 12:30pm (fixes: #6)', function () {
    var after = new Date('May 13, 2013 13:30:00');
    var date = parse('at 12:30pm', after);
    assert('12:30:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('at X in the morning (fixes: #36)', function() {
    var past = new Date('May 13, 2013 18:00:00');
    var date = parse('tomorrow at 9 in the morning', past);
    assert('9:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
});

// /**
//  * If context is a string parse it as date
//  */
//
// describe('parse context if its a string (fixes: #38)', function () {
//   it('string context', function () {
//     var today = new Date();
//     today.setDate(today.getDate() - 1);
//     var date = parse('today at 11am', 'yesterday at 12:30am');
//     assert(d(date) == d({ date: today }));
//     assert('11:00:00' == t(date));
//   });
// });


/**
 * Support for dates with months
 */

describe('months (fixes: #10)', function (){
  var after = new Date('May 13, 2013 13:30:00');
  it('2nd of January', function () {
    var date = parse('2nd of January 12:30', after);
    assert('12:30:00' == t(date));
    assert('1/2/14' == d(date));
  });

  it('1st of March', function () {
    var date = parse('1st of March', after);
    assert('13:30:00' == t(date));
    assert('3/1/14' == d(date));
  });

  it('31st of September 4:00am', function () {
    var date = parse('31st of September 4:00am', after);
    assert('4:00:00' == t(date));
    assert('9/31/13' != d(date));
    assert('10/1/13' == d(date));
  });

  it('1st of January 4:00am', function(){
    var date = parse('1st of January 4:00am', after);
    assert('4:00:00' == t(date));
    assert('1/1/14' == d(date));
  });
  
  it('20th of December, 17:00', function(){
    var date = parse('20th of December, 17:00', after);
    assert('17:00:00' == t(date));
    assert('12/20/13' == d(date));
  });
  
  it('christmas on 24TH   december', function(){
    var date = parse('christmas on 24TH   december', after);
    assert('13:30:00' == t(date));
    assert('12/24/13' == d(date));
  });
  
  it('december 23rd', function(){
    var date = parse('december   23rd', after);
    assert('13:30:00' == t(date));
    assert('12/23/13' == d(date));
  });
  
  it('november 5', function(){
    var date = parse('november 5', after);
    assert('13:30:00' == t(date));
    assert('11/5/13' == d(date));
  });
  
  it('nov 5', function(){
    var date = parse('nov 5', after);
    assert('13:30:00' == t(date));
    assert('11/5/13' == d(date));
  });
  
  it('nov - 05', function(){
    var date = parse('nov - 05', after);
    assert('13:30:00' == t(date));
    assert('11/5/13' == d(date));
  });
  
  it('on nov-05', function(){
    var date = parse('on nov-05', after);
    assert('13:30:00' == t(date));
    assert('11/5/13' == d(date));
  });
});

/**
 * Suppport 'ago' modifier
 */

describe('support "ago" modifier (fixes: #20)', function (){
  var after = new Date('May 13, 2013 13:30:00');

  it('x seconds ago', function () {
    var date = parse('10 seconds ago', after);
    assert('13:29:50' == t(date));
    assert('5/13/13' == d(date));
  });

  it('x minutes ago', function () {
    var date = parse('5 minutes ago', after);
    assert('13:25:00' == t(date));
    assert('5/13/13' == d(date));
  });


  it('x minute ago', function () {
    var date = parse('1 minutes ago', after);
    assert('13:29:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('x hours ago', function () {
    var date = parse('5 hours ago', after);
    assert('8:30:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('x days ago', function () {
    var date = parse('5 day ago', after);
    assert('13:30:00' == t(date));
    assert('5/8/13' == d(date));
  });

  it('x week ago', function () {
    var date = parse('2 week ago', after);
    assert('13:30:00' == t(date));
    assert('4/29/13' == d(date));
  });

  it('x months ago', function () {
    var date = parse('10 months ago', after);
    assert('13:30:00' == t(date));
    assert('7/13/12' == d(date));
  });

  it('x year ago', function () {
    var date = parse('10 year ago', after);
    assert('13:30:00' == t(date));
    assert('5/13/03' == d(date));
  });

});


describe('month dates', function () {
  var after = new Date('May 13, 2013 13:30:00');
  
  it('11/15', function () {
    var date = parse('11/15', after, "en");
    assert('13:30:00' == t(date));
    assert('11/15/13' == d(date));
  });
  
  it('11/15/2022', function () {
    var date = parse('11/15/2022', after, "en");
    assert('13:30:00' == t(date));
    assert('11/15/22' == d(date));
  });
  
  it('1/22/18', function () {
    var date = parse('1/22/18', after, "en");
    assert('13:30:00' == t(date));
    assert('1/22/18' == d(date));
  });
  
  it('01/22/18', function () {
    var date = parse('01/22/18', after, "en");
    assert('13:30:00' == t(date));
    assert('1/22/18' == d(date));
  });
  
  it('on 1/22', function () {
    var date = parse('on 1/22', after, "en");
    assert('13:30:00' == t(date));
    assert('1/22/14' == d(date));
  });
  
  it('at the 1/22.', function () {
    var date = parse('at the 1/22.', after, "en");
    assert('13:30:00' == t(date));
    assert('1/22/14' == d(date));
  });
});



describe('gives string without dates', function () {
  var after = new Date('May 13, 2013 13:30:00');
  
  it('Eat pizza next week at 17:00 o\'clock', function() {
    var date = parse('Eat pizza next week at 17:00 o\'clock', after, "en");
    assert('Eat pizza' === date.newStr);
    assert("5/20/13" === d(date));
    assert("17:00:00" === t(date));
  });
  
  it('Next week at 17:00 o\'clock eat pizza', function() {
    var date = parse('Next week at 17:00 o\'clock eat pizza', after, "en");
    assert('Eat pizza' === date.newStr);
    assert("5/20/13" === d(date));
    assert("17:00:00" === t(date));
  });
  
  it('Next week 17:00 o\'clock eat pizza', function() {
    var date = parse('Next week 17:00 o\'clock eat pizza', after, "en");
    assert('Eat pizza' === date.newStr);
    assert("5/20/13" === d(date));
    assert("17:00:00" === t(date));
  });
  
  it('Next week at 17:00 eat pizza', function() {
    var date = parse('Next week at 17:00 eat pizza', after, "en");
    assert('Eat pizza' === date.newStr);
    assert("5/20/13" === d(date));
    assert("17:00:00" === t(date));
  });
  
  it('Next week at 17 o clock eat pizza', function() {
    var date = parse('Next week at 17 o clock eat pizza', after, "en");
    assert('Eat pizza' === date.newStr);
    assert("5/20/13" === d(date));
    assert("17:00:00" === t(date));
  });
  
  it('Next week at 5 eat pizza', function() {
    var date = parse('Next week at 5 eat pizza', after, "en");
    assert('Eat pizza' === date.newStr);
    assert("5/20/13" === d(date));
    assert("5:00:00" === t(date));
  });
  
  it('drive to the shopping mall on next monday!', function() {
    var date = parse('drive to the shopping mall on next monday!', after, "en");
    assert('drive to the shopping mall!' === date.newStr);
  });
  
  it('drove to the shopping mall 2 weeks ago.', function() {
    var date = parse('drove to the shopping mall 2 weeks ago.', after, "en");
    assert('drove to the shopping mall.' === date.newStr);
    assert("4/29/13" === d(date));
  });
  
  it('have a BEER in 2 hours', function() {
    var date = parse('have a BEER in 2 hours', after, "en");
    assert('have a BEER' === date.newStr);
    assert("5/13/13" === d(date));
    assert("15:30:00" === t(date));
  });
  
  it('Count to 100 in 2 hours', function() {
    var date = parse('Count to 100 in 2 hours', after, "en");
    assert('Count to 100' === date.newStr);
    assert("5/13/13" === d(date));
    assert("15:30:00" === t(date));
  });
  
  it('call thomas: +49 190 99 88 15', function() {
    var date = parse('call thomas: +49 190 99 88 15', after, "en");
    assert('call thomas: +49 190 99 88 15' === date.newStr);
  });
  

  it('Meet thomas in 15 min at the office', function() {
    var date = parse('Meet thomas in 15 min at the office', after, "en");
    assert('Meet thomas at the office' === date.newStr);
  });
  
  it('Eat pizza with friends tomorrow at noon', function() {
    var date = parse('Eat pizza with friends tomorrow at noon', after, "en");
    assert('Eat pizza with friends' === date.newStr);
  });
  
  it('Go to the cinema on the 5th of January in the evening', function() {
    var date = parse('Go to the cinema', after, "en");
    assert('Go to the cinema' === date.newStr);
  });
  
  it('Shopping on Saturday noon', function() {
    var date = parse('Shopping on Saturday noon', after, "en");
    assert('Shopping' === date.newStr);
  });
  
  it('On thursday go to the club "69" in the evening', function() {
    var date = parse('On thursday go to the club "69" in the evening', after, "en");
    assert('Go to the club "69"' === date.newStr);
  });
  
  it("I'm going to have brunch at 9 with Sergej on Saturday", function() {
    var date = parse("I'm going to have brunch at 9 with Sergej on Saturday", after, "en");
    assert("I'm going to have brunch with Sergej" === date.newStr);
    assert("5/18/13" === d(date));
    assert("9:00:00" === t(date));
  });
  
  it("on the 31st of december: new years eve", function() {
    var date = parse('on the 31st of december at 23:59:00: new years eve', after, "en");
    assert('new years eve' === date.newStr);
    assert("12/31/13" === d(date));
    assert("23:59:00" === t(date));
  });
  
  it("Drink coffee with BF on the day after tomorrow at 15 o'clock", function() {
    var date = parse('Drink coffee with BF on the day after tomorrow at 15 o\'clock!!', after, "en");
    assert('Drink coffee with BF!!' === date.newStr);
    assert("5/15/13" === d(date));
    assert("15:00:00" === t(date));
  });
  
  it("Buy new shoes the day after tomorrow at 3", function() {
    var date = parse('Buy new shoes the day after tomorrow at 3', after, "en");
    assert('Buy new shoes' === date.newStr);
    assert("5/15/13" === d(date));
    assert("3:00:00" === t(date));
  });
  
  it("Memorial on 09/11.", function() {
    var date = parse('Memorial on 09/11.', after, "en");
    assert('Memorial.' === date.newStr);
    assert("9/11/13" === d(date));
    assert("13:30:00" === t(date));
  });
  
  it("World Trade Center Memorial on 09/11/14 at 12:30 pm.", function() {
    var date = parse('World Trade Center Memorial on 09/11/14 at 12:30 pm.', after, "en");
    assert('World Trade Center Memorial.' === date.newStr);
    assert("9/11/14" === d(date));
    assert("12:30:00" === t(date));
  });
  
  it('On December 24th is Christmas', function () {
    var date = parse('On December 24th is Christmas', after, "en");
    assert("Christmas" === date.newStr);
  });
  
  it('Eat pizza on wednesday :)', function () {
    var date = parse('Eat pizza on wednesday :)', after, "en");
    assert("Eat pizza :)" === date.newStr);
  });
  
  it('Eat pizza :) on wednesday', function () {
    var date = parse('Eat pizza :) on wednesday', after, "en");
    assert("Eat pizza :)" === date.newStr);
  });
  
  
  it('Have breakfast with the Team today at 8', function () {
    var date = parse('Have breakfast with the Team today at 8', after, "en");
    assert("Have breakfast with the Team" === date.newStr);
  });
  
  it('Today at 6pm: Go crazy!', function () {
    var date = parse('Today at 6pm: Go crazy!', after, "en");
    assert("Go crazy!" === date.newStr);
  });
  
  it('Today at 6 @[frederik](123)', function () {
    var date = parse('Today at 6 @[frederik](123)', after, "en");
    assert("@[frederik](123)" === date.newStr);
  });
  
  it('Today at 6 [@frederik](123)', function () {
    var date = parse('Today at 6 [@frederik](123)', after, "en");
    assert("[@frederik](123)" === date.newStr);
  });
});



/**
 * Time helper function
 */

function t(result) {
  var t = result.date.toTimeString().split(' ')[0];
  t = ('0' == t[0]) ? t.slice(1) : t;
  return t;
}

/**
 * Date helper function
 */

function d(result) {
  var d = result.date.toString();
  var month = result.date.getMonth() + 1;
  var day = result.date.getDate();
  var year = '' + result.date.getFullYear();
  return [month, day, year.slice(2)].join('/');
}