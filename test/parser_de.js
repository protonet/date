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
  it('10min', function () {
    var date = parse('10min', mon, "de");
    assert('1:40:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('10 Min', function () {
    var date = parse('10 Min', mon, "de");
    assert('1:40:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('10 Minuten', function () {
    var date = parse('10 Minuten', mon, "de");
    assert('1:40:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('10 Minuten ab jetzt', function () {
    var date = parse('10 Minuten ab jetzt', mon, "de");
    assert('1:40:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('10 Minuten ab Morgen', function () {
    var date = parse('10 Minuten ab Morgen', mon, "de");
    assert('1:40:00' == t(date));
    assert('5/14/13' == d(date));
  });
});

/**
 * Hours
 */

describe('stunden', function() {
  it('in 5 stunden', function () {
    var date = parse('in 5 stunden', mon, "de");
    assert('6:30:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('in 5 Std', function () {
    var date = parse('in 5 Std', mon, "de");
    assert('6:30:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('um 5 Uhr', function () {
    var date = parse('um 5 Uhr', mon, "de");
    assert('5:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('um 17 Uhr', function () {
    var date = parse('um 17 Uhr', mon, "de");
    assert('17:00:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('um 1700 Uhr', function () {
    var date = parse('um 1700 Uhr', mon, "de");
    assert('17:00:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('um 1700', function () {
    var date = parse('um 1700', mon, "de");
    assert('17:00:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('1700 Uhr', function () {
    var date = parse('um 1700', mon, "de");
    assert('17:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('um 5', function () {
    var date = parse('um 5', mon, "de");
    assert('5:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('um 17', function () {
    var date = parse('um 17', mon, "de");
    assert('17:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('um 12:30', function () {
    var date = parse('um 12:30', mon, "de");
    assert('12:30:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('um 12.30', function () {
    var date = parse('um 12.30', mon, "de");
    assert('12:30:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('um 23:35', function () {
    var date = parse('um 23:35', mon, "de");
    assert('23:35:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('um 0:30', function () {
    var date = parse('um 0:30', mon, "de");
    assert('0:30:00' == t(date));
    assert('5/14/13' == d(date));
  });
});

/**
 * Days
 */

describe('tage', function () {
  it('in 2 tagen', function () {
    var date = parse('in 2 tagen', mon, "de");
    assert('1:30:00' == t(date));
    assert('5/15/13' == d(date));
  });

  it('in 2 tage', function () {
    var date = parse('in 2 tage', mon, "de");
    assert('1:30:00' == t(date));
    assert('5/15/13' == d(date));
  });
});

/**
 * Dates
 */

describe('datums', function () {
  it('Dienstag um 9', function () {
    var date = parse('Dienstag um 9', mon, "de");
    assert('9:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('montag um 9', function () {
    var date = parse('montag um 9', mon, "de");
    assert('9:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('Montag um 9', function () {
    var date = parse('Montag um 9', mon, "de");
    assert('9:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('montag um 9 uhr', function () {
    var date = parse('montag um 9 uhr', mon, "de");
    assert('9:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('montag um 21', function () {
    var date = parse('montag um 21', mon, "de");
    assert('21:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('montag um 1:00', function () {
    var date = parse('montag um 1:00', mon, "de");
    assert('1:00:00' == t(date));
    assert('5/20/13' == d(date));
  });

  it('nächsten montag um 1:00', function () {
    var date = parse('nächsten montag um 1:00', mon, "de");
    assert('1:00:00' == t(date));
    assert('5/20/13' == d(date));
  });
  
  it('nächster montag um 1:00', function () {
    var date = parse('nächster montag um 1:00', mon, "de");
    assert('1:00:00' == t(date));
    assert('5/20/13' == d(date));
  });
  
  it('naechster mo um 23:33', function () {
    var date = parse('naechster montag um 01:00', mon, "de");
    assert('1:00:00' == t(date));
    assert('5/20/13' == d(date));
  });

  it('letzter montag um 1:00', function () {
    var date = parse('letzter montag um 1:00', mon, "de");
    assert('1:00:00' == t(date));
    assert('5/6/13' == d(date));
  });
  
  it('letzter montag 1:00', function () {
    var date = parse('letzter montag 1:00', mon, "de");
    assert('1:00:00' == t(date));
    assert('5/6/13' == d(date));
  });
  
  it('am letzten montag um 1:22 uhr', function () {
    var date = parse('letzter montag um 1:22', mon, "de");
    assert('1:22:00' == t(date));
    assert('5/6/13' == d(date));
  });
});

/**
 * Tomorrow
 */

describe('morgen', function () {
  it('morgen um 15:00', function () {
    var date = parse('morgen um 15:00', mon, "de");
    assert('15:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
  
  it('Morgen 16:22', function () {
    var date = parse('Morgen 16:22', mon, "de");
    assert('16:22:00' == t(date));
    assert('5/14/13' == d(date));
  });
});

/**
 * Today
 */

describe('heute', function () {
  it('Heute um 1:00', function () {
    var date = parse('heute um 1:00', mon, "de");
    assert('1:00:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('Heute 16:22', function () {
    var date = parse('Heute 16:22', mon, "de");
    assert('16:22:00' == t(date));
    assert('5/13/13' == d(date));
  });
});


/**
 * Übermorgen
 */
describe('übermorgen', function () {
  it('übermorgen um 15 uhr', function () {
    var date = parse('übermorgen um 15 uhr', mon, "de");
    assert('15:00:00' == t(date));
    assert('5/15/13' == d(date));
  });
  
  it('über morgen um 15 uhr', function () {
    var date = parse('über morgen um 15 uhr', mon, "de");
    assert('15:00:00' == t(date));
    assert('5/15/13' == d(date));
  });
  
  it('ueber Morgen um 15 uhr', function () {
    var date = parse('ueber Morgen um 15 uhr', mon, "de");
    assert('15:00:00' == t(date));
    assert('5/15/13' == d(date));
  });
});

/**
 * Yesterday
 */

describe('gestern', function () {
  it('gestern um 15:00', function () {
    var date = parse('gestern um 15:00', mon, "de");
    assert('15:00:00' == t(date));
    assert('5/12/13' == d(date));
  });
  
  it('Gestern um 15:00', function () {
    var date = parse('Gestern um 15:00', mon, "de");
    assert('15:00:00' == t(date));
    assert('5/12/13' == d(date));
  });

  it('Gestern um 15:00', function () {
    var date = parse('Gestern um 15:00', mon, "de");
    assert('15:00:00' == t(date));
    assert('5/12/13' == d(date));
  });
  
  it('Gestern um 12:30am', function () {
    var date = parse('Gestern um 12:30am', mon, "de");
    assert('0:30:00' == t(date));
    assert('5/12/13' == d(date));
  });
});

/**
 * Tonight
 */

describe('heute abend', function () {
  // TODO:
  // it('heute abend', function () {
  //   var date = parse('heute abend', mon);
  //   assert('17:00:00' == t(date));
  //   assert('5/13/13' == d(date));
  // });
  
  it('17 uhr heute abend', function () {
    var date = parse('17 uhr heute abend', mon, "de");
    assert('17:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('Heute abend um 5', function () {
    var date = parse('Heute abend um 5', mon, "de");
    assert('17:00:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('Heute abend 5:22', function () {
    var date = parse('Heute abend 5:22', mon, "de");
    assert('17:22:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('Heute abend um 5 Uhr', function () {
    var date = parse('Heute abend um 5 Uhr', mon, "de");
    assert('17:00:00' == t(date));
    assert('5/13/13' == d(date));
  });
});

/**
 * Midnight
 */
describe('mitternacht', function () {
  it('mitternacht', function () {
    var date = parse('mitternacht', mon, "de");

    assert('0:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
  
  it('mitternacht', function () {
    var date = parse('mitternachts', mon, "de");

    assert('0:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('morgen mitternacht', function () {
    var date = parse('morgen mitternacht', mon, "de");
    assert('0:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('morgen um mitternacht', function () {
    var date = parse('morgen um mitternacht', mon, "de");
    assert('0:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('mitternacht (@ 1:30pm)', function () {
    var afternoon = new Date('May 13, 2013 13:30:00');
    var date = parse('mitternacht', afternoon, "de");
    assert('0:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('mitternacht (@ 00:05)', function () {
    var afternoon = new Date('May 13, 2013 13:30:00');
    var date = parse('mitternacht (@ 00:05)', afternoon, "de");
    assert('0:05:00' == t(date));
    assert('5/14/13' == d(date));
  });
});

/**
 * Noon
 */

describe('mittag', function () {
  it('mittag', function () {
    var date = parse('mittag', mon, "de");
    assert('12:00:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('mittags', function () {
    var date = parse('mittags', mon, "de");
    assert('12:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('morgen mittag', function () {
    var date = parse('morgen mittag', mon, "de");
    assert('12:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('mittag (@ 1:30pm)', function () {
    var afternoon = new Date('May 13, 2013 13:30:00');
    var date = parse('mittag', afternoon, "de");
    assert('12:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
});

/**
 * Weeks
 */

describe('wochen', function () {
  it('nächste woche dienstag', function () {
    var date = parse('nächste woche dienstag', mon, "de");
    assert('1:30:00' == t(date));
    assert('5/21/13' == d(date));
  });
  
  it('Naechste Woche Dienstag', function () {
    var date = parse('Naechste Woche Dienstag', mon, "de");
    assert('1:30:00' == t(date));
    assert('5/21/13' == d(date));
  });
  
  it('Naechste Woche Dienstag', function() {
    var wed = new Date('May 15, 2013 01:30:00');
    var date = parse('Naechste Woche Dienstag', wed, "de");
    assert('1:30:00' == t(date));
    assert('5/21/13' == d(date));
  });
  
  // TODO: doesn't really make sense
  it('Naechste Woche', function() {
    var sun = new Date('May 12, 2013 01:30:00');
    var date = parse('Naechste Woche', sun, "de");
    assert('1:30:00' == t(date));
    assert('5/20/13' == d(date));
  });
  
  it('Naechste Woche', function() {
    var date = parse('Naechste Woche', mon, "de");
    assert('1:30:00' == t(date));
    assert('5/20/13' == d(date));
  });
  
  it('Naechste Woche', function() {
    var wed = new Date('May 15, 2013 01:30:00');
    var date = parse('Naechste Woche', wed, "de");
    assert('1:30:00' == t(date));
    assert('5/20/13' == d(date));
  });
  
  // TODO:
  // it('Nächste Woche di um 4:30pm', function () {
  //   var date = parse('Nächste Woche Di um 4:30pm', mon);
  //   assert('16:30:00' == t(date));
  //   assert('5/21/13' == d(date));
  // });
  
  it('2 wochen ab mittwoch', function () {
    var date = parse('2 wochen ab mittwoch', mon, "de");
    assert('1:30:00' == t(date));
    assert('5/29/13' == d(date));
  });
});

/**
 * Night
 */

describe('nacht', function() {
  it('nacht', function () {
    var date = parse('nacht', mon, "de");
    assert('19:00:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('nachts', function () {
    var date = parse('nachts', mon, "de");
    assert('19:00:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('morgen Nacht', function () {
    var date = parse('morgen Nacht', mon, "de");
    assert('19:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
  
  it('morgen nacht um 11', function () {
    var date = parse('morgen nacht um 11', mon, "de");
    assert('23:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
  
  it('morgen nacht um 11 uhr', function () {
    var date = parse('morgen nacht um 11 uhr', mon, "de");
    assert('23:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
  
  it('morgen nacht um 11:59 uhr', function () {
    var date = parse('morgen nacht um 11:59 uhr', mon, "de");
    assert('23:59:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('letzte nacht', function () {
    // en: [ 'night', 'night', 'last', 'eos' ]
    // de: [ 'night', 'night', 'last', 'eos' ]
    var date = parse('letzte nacht', mon, "de");
    assert('19:00:00' == t(date));
    assert('5/12/13' == d(date));
  });
});

/**
 * Evening
 */

describe('abend', function() {
  it('abend', function () {
    var date = parse('abend', mon, "de");
    assert('17:00:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('am Abend', function () {
    var date = parse('am Abend', mon, "de");
    assert('17:00:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('abends', function () {
    var date = parse('abends', mon, "de");
    assert('17:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('morgen abend', function () {
    var date = parse('morgen abend', mon, "de");
    assert('17:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('morgen abend um 9', function () {
    var date = parse('morgen abend um 9', mon, "de");
    assert('21:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('Letzter Abend', function () {
    var date = parse('Letzter Abend', mon, "de");
    assert('17:00:00' == t(date));
    assert('5/12/13' == d(date));
  });
});

/**
 * Afternoon
 */

describe('nachmittag', function() {
  it('nachmittag', function () {
    var date = parse('nachmittag', mon, "de");
    assert('14:00:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('nachmittags', function () {
    var date = parse('nachmittags', mon, "de");
    assert('14:00:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('nach mittags', function () {
    var date = parse('nach mittags', mon, "de");
    assert('14:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('morgen nachmittag', function () {
    var date = parse('morgen nachmittag', mon, "de");
    assert('14:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('letzter nachmittag', function () {
    var date = parse('letzter nachmittag', mon, "de");
    assert('14:00:00' == t(date));
    assert('5/12/13' == d(date));
  });
  
  it('am letzten Nachmittag', function () {
    var date = parse('am letzten Nachmittag', mon, "de");
    assert('14:00:00' == t(date));
    assert('5/12/13' == d(date));
  });
});

/**
 * Morning
 */

describe('morgens', function() {
  it('morgens', function () {
    var date = parse('morgens', mon, "de");
    assert('8:00:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('am morgen', function () {
    var date = parse('am morgen', mon, "de");
    assert('8:00:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('morgen früh', function () {
    var date = parse('morgen früh', mon, "de");
    assert('8:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
  
  it('morgen frueh', function () {
    var date = parse('morgen frueh', mon, "de");
    assert('8:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
  
  
  it('morgen ganz früh', function () {
    var date = parse('morgen ganz früh', mon, "de");
    assert('8:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
  
  it('Morgen Frueh', function () {
    var date = parse('Morgen Frueh', mon, "de");
    assert('8:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
  
  // TODO:
  // it('letzter morgen', function () {
  //   var date = parse('letzter morgen', mon, "de");
  //   assert('8:00:00' == t(date));
  //   assert('5/12/13' == d(date));
  // });
  // 
  // it('heute morgen um 9', function () {
  //   var date = parse('heute morgen um 9', mon, "de");
  //   assert('9:00:00' == t(date));
  //   assert('5/13/13' == d(date));
  // });
});

/**
 * Months
 */

describe('monate', function () {
  it('diesen monat', function () {
    var date = parse('diesen monat', mon, "de");
    assert('1:30:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('nächster Monat', function () {
    var date = parse('nächster Monat', mon, "de");
    assert('1:30:00' == t(date));
    assert('6/13/13' == d(date));
  });
  
  it('letzter Monat', function () {
    var date = parse('letzter Monat', mon, "de");
    assert('1:30:00' == t(date));
    assert('4/13/13' == d(date));
  });

  it('2 Monate ab Morgen', function () {
    var date = parse('2 Monate ab Morgen', mon, "de");
    assert('1:30:00' == t(date));
    assert('7/14/13' == d(date));
  });

  it('should handle months with less days', function () {
    var date = parse('1 monat', new Date('01/31/2011'), "de");
    assert('2/28/11' == d(date));
  });
  
  it('should handle leap year', function () {
    var date = parse('1 monat', new Date('01/31/2012'), "de");
    assert('2/29/12' == d(date));
  });
  
  it('morgen nachmittag um 4:30 1 monat ab jetzt', function () {
    var date = parse('morgen nachmittag um 4:30 1 monat ab jetzt', mon, "de");
    assert('16:30:00' == t(date));
    assert('6/14/13' == d(date));
  });
});

/**
 * Year
 */

describe('jahr', function() {
  it('dieses jahr', function() {
    var date = parse('dieses jahr', mon, "de");
    assert('1:30:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('Nächstes Jahr', function () {
    var date = parse('Nächstes Jahr', mon, "de");
    assert('1:30:00' == t(date));
    assert('5/13/14' == d(date));
  });

  it('Letztes Jahr', function () {
    var date = parse('Letztes Jahr', mon, "de");
    assert('1:30:00' == t(date));
    assert('5/13/12' == d(date));
  });
  
  it('2 jahre ab gestern um 17 Uhr', function () {
    var date = parse('2 jahre ab gestern um 17 Uhr', mon, "de");
    assert('17:00:00' == t(date));
    assert('5/12/15' == d(date));
  });
  
  it('vor 2 jahren', function() {
    var date = parse('vor 2 jahren', mon, "de");
    assert('1:30:00' == t(date));
    assert('5/13/11' == d(date));
  });
  
  it('heute vor 2 jahren', function() {
    var date = parse('heute vor 2 Jahren', mon, "de");
    assert('1:30:00' == t(date));
    assert('5/13/11' == d(date));
  });
  
  it('morgen vor 2 jahren', function() {
    var date = parse('morgen vor 2 jahren', mon, "de");
    assert('1:30:00' == t(date));
    assert('5/14/11' == d(date));
  });
});

/**
 * Dates in the past
 */

describe('dates in the past', function() {
  var past = new Date('May 13, 2013 18:00:00');

  it('morgen nachmittag', function() {
    var date = parse('morgen nachmittag', past, "de");
    assert('14:00:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('morgen nachmittag um 3', function() {
    var date = parse('morgen nachmittag um 3', past, "de");
    assert('15:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
  
  // Need to place .nextTime() at the end
  
  it('um 3 morgen nachmittag', function () {
    var date = parse('3pm tomorrow afternoon', past, "de");
    assert('15:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
});

/**
 * Times
 */
describe('times', function() {
  it('1:30', function () {
    var date = parse('1:30', mon, "de");
    assert('1:30:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('2:31', function () {
    var date = parse('2:31', mon, "de");
    assert('2:31:00' == t(date));
    assert('5/13/13' == d(date));
  });

  it('00:28', function () {
    // past time will result in tomorrow
    var date = parse('00:28', mon, "de");
    assert('0:28:00' == t(date));
    assert('5/14/13' == d(date));
  });
});

/**
 * Ignore other input
 */

describe('other inputs', function () {
  it('gestern, vor 2 jahren.', function() {
    var date = parse('gestern, vor 2 jahren.', mon, "de");
    assert('1:30:00' == t(date));
    assert('5/12/11' == d(date));
  });

  it('invalid', function() {
    var date = parse('invalid', mon, "de");
    assert('1:30:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('empty', function() {
    var date = parse('', mon, "de");
    assert('1:30:00' == t(date));
    assert('5/13/13' == d(date));
  });
});

/**
 * Bug fixes
 */

describe('bug fixes', function () {
  it('um 12:30pm (fixes: #6)', function () {
    var after = new Date('May 13, 2013 13:30:00');
    var date = parse('um 12:30pm', after, "de");
    assert('12:30:00' == t(date));
    assert('5/14/13' == d(date));
  });

  it('um X am Morgen (fixes: #36)', function() {
    var past = new Date('May 13, 2013 18:00:00');
    var date = parse('Morgen um 9 uhr morgens', past, "de");
    assert('9:00:00' == t(date));
    assert('5/14/13' == d(date));
  });
});

/**
 * If context is a string parse it as date
 */
// TODO:
// describe('parse context if its a string (fixes: #38)', function () {
//   it('string context', function () {
//     var today = new Date();
//     today.setDate(today.getDate() - 1);
//     var date = parse('heute um 11am', 'gestern um 12:30am', "de");
// 
//     assert(d(date) == d(today));
//     assert('11:00:00' == t(date));
//   });
// });


/**
 * Support for dates with months
 */

describe('months (fixes: #10)', function (){
  var after = new Date('May 13, 2013 13:30:00');
  it('2. Januar', function () {
    var date = parse('2. Januar, 12:30', after, "de");
    assert('12:30:00' == t(date));
    assert('1/2/14' == d(date));
  });
  
  it('1. März', function () {
    var date = parse('1. März', after, "de");
    assert('13:30:00' == t(date));
    assert('3/1/14' == d(date));
  });
  
  it('31. September 4 uhr', function () {
    var date = parse('31. September 4 uhr', after, "de");
    assert('4:00:00' == t(date));
    assert('10/1/13' == d(date));
  });
  
  it('1. Januar 4:00am', function(){
    var date = parse('1. Januar 4:00am', after, "de");
    assert('4:00:00' == t(date));
    assert('1/1/14' == d(date));
  });
  
  it('Am 20. Dezember um 17 uhr', function(){
    var date = parse('Am 20. Dezember um 17 uhr', after, "de");
    assert('17:00:00' == t(date));
    assert('12/20/13' == d(date));
  });
  
  it('24. Dezember', function(){
    var date = parse('24. Dezember', after, "de");
    assert('13:30:00' == t(date));
    assert('12/24/13' == d(date));
  });
  
  it('5. november', function(){
    var date = parse('5. november', after, "de");
    assert('13:30:00' == t(date));
    assert('11/5/13' == d(date));
  });
  
  it('22. mär', function(){
    var date = parse('22. mär', after, "de");
    assert('13:30:00' == t(date));
    assert('3/22/14' == d(date));
  });
  
  it('22. januar 2015', function(){
    var date = parse('22. januar 2015', after, "de");
    assert('13:30:00' == t(date));
    assert('1/22/15' == d(date));
  });
});

/**
 * Suppport 'ago' modifier
 */

describe('support "ago" modifier (fixes: #20)', function (){
  var after = new Date('May 13, 2013 13:30:00');

  it('vor x sekunden', function () {
    var date = parse('vor 10 sekunden', after, "de");
    assert('13:29:50' == t(date));
    assert('5/13/13' == d(date));
  });

  it('vor x minuten', function () {
    var date = parse('vor 5 minuten', after, "de");
    assert('13:25:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  
  it('vor x minuten', function () {
    var date = parse('vor 1 minute', after, "de");
    assert('13:29:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('vor x stunden', function () {
    var date = parse('vor 5 stunden', after, "de");
    assert('8:30:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('vor x Std', function () {
    var date = parse('vor 5 Std', after, "de");
    assert('8:30:00' == t(date));
    assert('5/13/13' == d(date));
  });
  
  it('vor x tagen', function () {
    var date = parse('vor 5 tagen', after, "de");
    assert('13:30:00' == t(date));
    assert('5/8/13' == d(date));
  });

  it('vor X wochen', function () {
    var date = parse('vor 2 wochen', after, "de");
    assert('13:30:00' == t(date));
    assert('4/29/13' == d(date));
  });
  
  it('vor    1 Woche', function () {
    var date = parse('vor    1 Woche', after, "de");
    assert('13:30:00' == t(date));
    assert('5/6/13' == d(date));
  });
  
  it('vor x monaten', function () {
    var date = parse('vor 10 monaten', after, "de");
    assert('13:30:00' == t(date));
    assert('7/13/12' == d(date));
  });
  
  it('vor 1 monat', function () {
    var date = parse('vor 1 monat', after, "de");
    assert('13:30:00' == t(date));
    assert('4/13/13' == d(date));
    assert(true === date.fullDay);
  });
  
  it('x year ago', function () {
    var date = parse('volkswagen vor 10 jahren...', after, "de");
    assert('13:30:00' == t(date));
    assert('5/13/03' == d(date));
  });

});


describe('month dates', function () {
  var after = new Date('May 13, 2013 13:30:00');
  
  it('15.11', function () {
    var date = parse('15.11', after, "de");
    assert('13:30:00' == t(date));
    assert('11/15/13' == d(date));
    assert(true === date.fullDay);
  });
  
  it('15.11.2022', function () {
    var date = parse('15.11.2022', after, "de");
    assert('13:30:00' == t(date));
    assert('11/15/22' == d(date));
  });
  
  it('22.1.18', function () {
    var date = parse('22.1.18', after, "de");
    assert('13:30:00' == t(date));
    assert('1/22/18' == d(date));
  });
  
  it('22.01.18', function () {
    var date = parse('22.1.18', after, "de");
    assert('13:30:00' == t(date));
    assert('1/22/18' == d(date));
  });
  
  it('am 22.1', function () {
    var date = parse('am 22.1', after, "de");
    assert('13:30:00' == t(date));
    assert('1/22/14' == d(date));
  });
  
  it('an dem 22.01', function () {
    var date = parse('an dem 22.1', after, "de");
    assert('13:30:00' == t(date));
    assert('1/22/14' == d(date));
  });
  
  it('11.11.', function () {
    var date = parse('11.11.', after, "de");
    assert('13:30:00' == t(date));
    assert('11/11/13' == d(date));
  });
  
  it('7.12.13', function () {
    var date = parse('7.12.13', after, "de");
    assert(date.date.getFullYear() == 2013);
  });
});


describe('gives string without dates', function () {
  var after = new Date('May 13, 2013 13:30:00');
  
  it('nächste woche um 17:00 uhr pizza essen', function() {
    var date = parse('nächste woche um 17:00 uhr pizza essen', after, "de");
    assert('pizza essen' === date.newStr);
    assert("5/20/13" === d(date));
    assert("17:00:00" === t(date));
  });
  
  it('nächste woche 17:00 uhr pizza essen', function() {
    var date = parse('nächste woche 17:00 uhr pizza essen', after, "de");
    assert('pizza essen' === date.newStr);
    assert("5/20/13" === d(date));
    assert("17:00:00" === t(date));
  });
  
  it('nächste woche um 17:00 pizza essen', function() {
    var date = parse('nächste woche um 17:00 pizza essen', after, "de");
    assert('pizza essen' === date.newStr);
    assert("5/20/13" === d(date));
    assert("17:00:00" === t(date));
  });
  
  it('nächste woche um 17 uhr pizza essen', function() {
    var date = parse('nächste woche um 17 uhr pizza essen', after, "de");
    assert('pizza essen' === date.newStr);
    assert("5/20/13" === d(date));
    assert("17:00:00" === t(date));
    assert(false === date.fullDay);
  });
  
  it('nächsten montag um 5 pizza essen', function() {
    var date = parse('nächsten montag um 5 pizza essen', after, "de");
    assert('pizza essen' === date.newStr);
    assert("5/20/13" === d(date));
    assert("5:00:00" === t(date));
  });
  
  it('am nächsten montag in die Stadt fahren!', function() {
    var date = parse('am nächsten montag in die Stadt fahren!', after, "de");
    assert('in die Stadt fahren!' === date.newStr);
    assert(true === date.fullDay);
  });
  
  it('vor 2 wochen in die stadt fahren', function() {
    var date = parse('vor 2 wochen in die stadt fahren', after, "de");
    assert('in die stadt fahren' === date.newStr);
    assert("4/29/13" === d(date));
  });
  
  it('in 2 stunden feierabend', function() {
    var date = parse('in 2 stunden feierabend', after, "de");
    assert('feierabend' === date.newStr);
    assert("5/13/13" === d(date));
    assert("15:30:00" === t(date));
  });
  
  it('in 2 stunden bis 100 zählen', function() {
    var date = parse('in 2 stunden bis 100 zählen', after, "de");
    assert('bis 100 zählen' === date.newStr);
    assert("5/13/13" === d(date));
    assert("15:30:00" === t(date));
  });
  
  it('thomas anrufen: +49 190 99 88 15', function() {
    var date = parse('thomas anrufen: +49 190 99 88 15', after, "de");
    assert('thomas anrufen: +49 190 99 88 15' === date.newStr);
  });
  
  it('in 15 minuten mit thomas treffen', function() {
    var date = parse('in 15 minuten mit thomas treffen', after, "de");
    assert('mit thomas treffen' === date.newStr);
  });
  
  it('morgen am mittag pizza essen mit freunden', function() {
    var date = parse('morgen am nachmittag pizza essen mit freunden', after, "de");
    assert('pizza essen mit freunden' === date.newStr);
    assert(false === date.fullDay);
  });
  
  it('Am 5. Januar spät abends ins Kino', function() {
    var date = parse('Am 5. Januar spät abends ins Kino', after, "de");
    assert('Ins Kino' === date.newStr);
  });
  
  it('Am Samstag Nachmittag Shoppen', function() {
    var date = parse('Am Samstag Nachmittag Shoppen', after, "de");
    assert('Shoppen' === date.newStr);
  });
  
  it("Am Donnerstag ins Kino abends", function() {
    var date = parse('Am Donnerstag ins Kino abends', after, "de");
    assert('Ins Kino' === date.newStr);
  });
  
  it("Ich gehe um 9 uhr brunchen mit Sergej am Samstag", function() {
    var date = parse('Ich gehe um 9 uhr brunchen mit Sergej am Samstag', after, "de");
    assert('Ich gehe brunchen mit Sergej' === date.newStr);
    assert("5/18/13" === d(date));
    assert("9:00:00" === t(date));
  });
  
  it("am 31. dezember um 23:59: silvester", function() {
    var date = parse('am 31. Dezember um 23:59: Silvester', after, "de");
    assert('Silvester' === date.newStr);
    assert("12/31/13" === d(date));
    assert("23:59:00" === t(date));
  });
  
  it("Übermorgen Kaffee trinken mit Werner!!", function() {
    var date = parse('Übermorgen Kaffee trinken mit Werner!!', after, "de");
    assert('Kaffee trinken mit Werner!!' === date.newStr);
    assert("5/15/13" === d(date));
  });
  
  it("Christopher's 25. Geburtstag am 26.1. feiern.", function() {
    var date = parse("Christopher's 25. Geburtstag am 26.1. feiern.", after, "de");
    assert("Christopher's 25. Geburtstag feiern." === date.newStr);
    assert("1/26/14" === d(date));
    assert("13:30:00" === t(date));
  });
  
  it("Christopher's 25. Geburtstag am 26.1 feiern um 14:00.", function() {
    var date = parse("Christopher's 25. Geburtstag am 26.1 feiern um 14:00.", after, "de");
    assert("Christopher's 25. Geburtstag feiern." === date.newStr);
    assert("1/26/14" === d(date));
    assert("14:00:00" === t(date));
  });
  
  it('Party machen am 11.11.', function () {
    var date = parse('Party machen am 11.11.', after, "de");
    assert("Party machen." === date.newStr);
    assert('13:30:00' == t(date));
    assert('11/11/13' == d(date));
  });
  
  it('Am 24. Dezember ist Weihnachten', function () {
    var date = parse('Am 24. Dezember ist Weihnachten', after, "de");
    assert("Weihnachten" === date.newStr);
  });

  it('Pizza essen am Mittwoch :)', function () {
    var date = parse('Pizza essen am Mittwoch :)', after, "de");
    assert("Pizza essen :)" === date.newStr);
  });
  
  it('Pizza essen :) am Mittwoch', function () {
    var date = parse('Pizza essen :) am Mittwoch', after, "de");
    assert("Pizza essen :)" === date.newStr);
  });
  
  it('Heute morgen um 8 uhr Frühstücken mit dem Team', function () {
    var date = parse('Heute morgen um 8 uhr Frühstücken mit dem Team', after, "de");
    assert("Frühstücken mit dem Team" === date.newStr);
  });
  
  it('Heute 18 uhr: Abgehen!', function () {
    var date = parse('Heute 18 uhr: Abgehen!', after, "de");
    assert("Abgehen!" === date.newStr);
  });
  
  it('Heute 18 uhr @[frederik](123)', function () {
    var date = parse('Heute 18 uhr @[frederik](123)', after, "de");
    assert("@[frederik](123)" === date.newStr);
  });
  
  it('Heute 18 uhr [@frederik](123)', function () {
    var date = parse('Heute 18 uhr [@frederik](123)', after, "de");
    assert("[@frederik](123)" === date.newStr);
    assert(false === date.fullDay);
  });
  
  it('Heute ab 18:30 große Feierei', function () {
    var date = parse('Heute ab 18:30 große Feierei', after, "de");
    assert("Große Feierei" === date.newStr);
  });
  
  it('Ab Mittwoch 17:30 aufräumen', function () {
    var date = parse('Ab Mittwoch 17:30 aufräumen', after, "de");
    assert("Aufräumen" === date.newStr);
  });
  
  it('Shoppen gehen am 22. Januar 2015', function () {
    var date = parse('Shoppen gehen am 22. Januar 2015', after, "de");
    assert("Shoppen gehen" === date.newStr);
    assert(true === date.fullDay);
  });
  
  it('Veröffentlichung des Jahresergebnis', function () {
    var date = parse('Veröffentlichung des Jahresergebnis', after, "de");
    assert("Veröffentlichung des Jahresergebnis" === date.newStr);
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