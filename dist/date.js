;(function(){

/**
 * Require the given path.
 *
 * @param {String} path
 * @return {Object} exports
 * @api public
 */

function require(path, parent, orig) {
  var resolved = require.resolve(path);

  // lookup failed
  if (null == resolved) {
    orig = orig || path;
    parent = parent || 'root';
    var err = new Error('Failed to require "' + orig + '" from "' + parent + '"');
    err.path = orig;
    err.parent = parent;
    err.require = true;
    throw err;
  }

  var module = require.modules[resolved];

  // perform real require()
  // by invoking the module's
  // registered function
  if (!module._resolving && !module.exports) {
    var mod = {};
    mod.exports = {};
    mod.client = mod.component = true;
    module._resolving = true;
    module.call(this, mod.exports, require.relative(resolved), mod);
    delete module._resolving;
    module.exports = mod.exports;
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Registered aliases.
 */

require.aliases = {};

/**
 * Resolve `path`.
 *
 * Lookup:
 *
 *   - PATH/index.js
 *   - PATH.js
 *   - PATH
 *
 * @param {String} path
 * @return {String} path or null
 * @api private
 */

require.resolve = function(path) {
  if (path.charAt(0) === '/') path = path.slice(1);

  var paths = [
    path,
    path + '.js',
    path + '.json',
    path + '/index.js',
    path + '/index.json'
  ];

  for (var i = 0; i < paths.length; i++) {
    var path = paths[i];
    if (require.modules.hasOwnProperty(path)) return path;
    if (require.aliases.hasOwnProperty(path)) return require.aliases[path];
  }
};

/**
 * Normalize `path` relative to the current path.
 *
 * @param {String} curr
 * @param {String} path
 * @return {String}
 * @api private
 */

require.normalize = function(curr, path) {
  var segs = [];

  if ('.' != path.charAt(0)) return path;

  curr = curr.split('/');
  path = path.split('/');

  for (var i = 0; i < path.length; ++i) {
    if ('..' == path[i]) {
      curr.pop();
    } else if ('.' != path[i] && '' != path[i]) {
      segs.push(path[i]);
    }
  }

  return curr.concat(segs).join('/');
};

/**
 * Register module at `path` with callback `definition`.
 *
 * @param {String} path
 * @param {Function} definition
 * @api private
 */

require.register = function(path, definition) {
  require.modules[path] = definition;
};

/**
 * Alias a module definition.
 *
 * @param {String} from
 * @param {String} to
 * @api private
 */

require.alias = function(from, to) {
  if (!require.modules.hasOwnProperty(from)) {
    throw new Error('Failed to alias "' + from + '", it does not exist');
  }
  require.aliases[to] = from;
};

/**
 * Return a require function relative to the `parent` path.
 *
 * @param {String} parent
 * @return {Function}
 * @api private
 */

require.relative = function(parent) {
  var p = require.normalize(parent, '..');

  /**
   * lastIndexOf helper.
   */

  function lastIndexOf(arr, obj) {
    var i = arr.length;
    while (i--) {
      if (arr[i] === obj) return i;
    }
    return -1;
  }

  /**
   * The relative require() itself.
   */

  function localRequire(path) {
    var resolved = localRequire.resolve(path);
    return require(resolved, parent, path);
  }

  /**
   * Resolve relative to the parent.
   */

  localRequire.resolve = function(path) {
    var c = path.charAt(0);
    if ('/' == c) return path.slice(1);
    if ('.' == c) return require.normalize(p, path);

    // resolve deps by returning
    // the dep in the nearest "deps"
    // directory
    var segs = parent.split('/');
    var i = lastIndexOf(segs, 'deps') + 1;
    if (!i) i = 0;
    path = segs.slice(0, i + 1).join('/') + '/deps/' + path;
    return path;
  };

  /**
   * Check if module is defined at `path`.
   */

  localRequire.exists = function(path) {
    return require.modules.hasOwnProperty(localRequire.resolve(path));
  };

  return localRequire;
};
require.register("date/index.js", function(exports, require, module){
/**
 * Expose `Date`
 */

module.exports = require('./lib/parser');

});
require.register("date/lib/date.js", function(exports, require, module){
/**
 * Time constants
 */

var _second = 1000;
var _minute = 60 * _second;
var _hour = 60 * _minute;
var _day = 24 * _hour;
var _week = 7 * _day;
var _year = 56 * _week;
var _daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/**
 * Expose `date`
 */

module.exports = date;

/**
 * Initialize `date`
 *
 * @param {Date} offset (optional)
 * @return {Date}
 * @api publics
 */

function date(offset) {
  if(!(this instanceof date)) return new date(offset);
  this._changed = {};
  this.date = new Date(offset);
};

/**
 * Clone the current date
 */

date.prototype.clone = function() {
  return new Date(this.date);
};

/**
 * Has changed
 *
 * @param {String} str
 * @return {Boolean}
 */

date.prototype.changed = function(str) {
  if (this._changed[str] === undefined) {
    return false;
  }
  return this._changed[str];
};


date.prototype.matches = function() {
  var matches = 0;
  for (var i in this._changed) {
    if (this._changed.hasOwnProperty(i)) {
      matches++;
    }
  }
  return matches;
};

/**
 * add or subtract seconds
 *
 * @param {Number} n
 * @return {date}
 */

date.prototype.second = function(n) {
  var seconds = +n * _second;
  this.update(seconds);
  this._changed['seconds'] = true;
  return this;
}

/**
 * add or subtract minutes
 *
 * @param {Number} n
 * @return {date}
 */

date.prototype.minute = function(n) {
  var minutes = +n * _minute;
  this.update(minutes);
  this._changed['minutes'] = true;
  return this;
}

/**
 * add or subtract hours
 *
 * @param {Number} n
 * @return {date}
 */

date.prototype.hour = function(n) {
  var hours = +n * _hour;
  this.update(hours);
  this._changed['hours'] = true;
  return this;
}

/**
 * add or subtract days
 *
 * @param {Number} n
 * @return {date}
 */

date.prototype.day = function(n) {
  var days = +n * _day;
  this.update(days);
  this._changed['days'] = true;
  return this;
}

/**
 * add or subtract weeks
 *
 * @param {Number} n
 * @return {date}
 */

date.prototype.week = function(n) {
  var ms;
  if (n === 1) {
    var currentWeekDay = this.date.getDay();
    var diff = 6 - currentWeekDay + 1 + 1;
    ms = diff * _day;
  } else {
    ms = +n * _week;
  }
  
  this.update(ms);
  this._changed['weeks'] = true;
  return this;
}

/**
 * add or subtract months
 *
 * @param {Number} n
 * @return {Date}
 */

date.prototype.month = function(n) {
  var d = this.date;
  var day = d.getDate();
  d.setDate(1);
  var month = +n + d.getMonth();
  d.setMonth(month);

  // Handle dates with less days
  var dim = this.daysInMonth(month)
  d.setDate(Math.min(dim, day));
  this._changed['months'] = true;
  this._changed['days'] = true;
  return this;
};

/**
 * get the days in the month
 */

date.prototype.daysInMonth = function(m) {
  var dim = _daysInMonth[m];
  var leap = leapyear(this.date.getFullYear());
  return (1 == m && leap) ? 29 : 28;
};

/**
 * add or subtract years
 *
 * @param {Number} n
 * @return {date}
 */

date.prototype.year = function(n) {
  var yr = this.date.getFullYear();
  yr += +n;
  this.date.setFullYear(yr);
  this._changed['years'] = true;
  return this;
}

/**
 * Set the time
 *
 * @param {String} h
 * @param {String} m
 * @param {String} s
 * @return {date}
 */

date.prototype.time = function(h, m, s, meridiem) {
  if (h === false) {
    h = this.date.getHours();
  } else {
    h = +h || 0;
    this._changed['hours'] = h;
  }

  if (m === false) {
    m = this.date.getMinutes();
  } else {
    m = +m || 0;
    this._changed['minutes'] = m;
  }

  if (s === false) {
    s = this.date.getSeconds();
  } else {
    s = +s || 0;
    this._changed['seconds'] = s;
  }

  this.date.setHours(h, m, s);
  return this;
};

/**
 * go to day of week
 *
 * @param {Number} day
 * @param {Number} n
 * @return {date}
 */

date.prototype.updateDay = function(d, n) {
  this._changed['days'] = true;
  n = +(n || 1);
  var diff = (d - this.date.getDay() + 7) % 7;
  if (n > 0) --n;
  diff += (7 * n);
  this.update(diff * _day);
  return this;
}

/**
 * Update the date
 *
 * @param {Number} ms
 * @return {Date}
 * @api private
 */

date.prototype.update = function(ms) {
  this.date = new Date(this.date.getTime() + ms);
  return this;
};

/**
 * leap year
 *
 * @param {Number} yr
 * @return {Boolean}
 */

function leapyear(yr) {
  return (yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0;
}

});
require.register("date/lib/parser.js", function(exports, require, module){
/**
 * Module Dependencies
 */

var date = require('./date');

var dateLocales = {
  en: require('./i18n/en.js'),
  de: require('./i18n/de.js')
};

var rDayMod = /\b(morning|noon|afternoon|night|evening|midnight)\b/;

/**
 * Expose `parser`
 */

module.exports = parser;

/**
 * Initialize `parser`
 *
 * @param {String} str
 * @return {Date}
 * @api publics
 */

function parser(str, offset, lang) {
  if(!(this instanceof parser)) return new parser(str, offset, lang);
  if(typeof offset == 'string') offset = parser(offset);
  this.lang = lang || "en";
  this.locales = dateLocales[this.lang];
  var d = offset || new Date;
  this.date = new date(d);
  this.str = str;
  this.oldStr = str;
  this.stash = [];
  this.tokens = [];
  this._index = 0;
  
  while (this.advance().type !== 'eos');
  
  this.nextTime(d);
  
  this.newStr = this.getNewStr();
  
  return { date: this.date.date, newStr: this.newStr };
}

/**
 * Advance a token
 */

parser.prototype.advance = function() {
  var index = this._index++;
  
  var tok = this.eos()
    || this.space()
    || this._next()
    || this.last()
    || this.dayByName()
    || this.monthByName()
    || this.monthDate()
    || this.timeAgo()
    || this.ago()
    || this.today()
    || this.yesterday()
    || this.dayAfterTomorrow()
    || this.tomorrow()
    || this.noon()
    || this.midnight()
    || this.night()
    || this.evening()
    || this.afternoon()
    || this.morning()
    || this.tonight()
    || this.meridiem()
    || this.hourminute()
    || this.athour()
    || this.week()
    || this.month()
    || this.year()
    || this.second()
    || this.minute()
    || this.hour()
    || this.day()
    || this.number()
    || this.string()
    || this.other();
  
  this.tokens[index] = tok;
  return tok;
};


parser.prototype.getNewStr = function() {
  var newStr = "";
  for (var i=0; i<this.tokens.length; i++) {
    var token = this.tokens[i];
    var previousToken = this.tokens[i - 1] || {};
    
    if (!token) {
      continue;
    }
    
    if (token.type !== "space" && token.type !== "string" && token.type !== "number" && token.type !== "other" && token.type !== "eos") {
      continue;
    }
    
    if (token.type === "space" && (!newStr || newStr.slice(-1) === " ")) {
      continue;
    }
    
    if (token.type === "other" && !newStr && token.str.match(/^[.:,?!;]/)) {
      continue;
    }
    
    if (token.type === "other" && previousToken.type !== "space" && newStr.slice(-1) === " " && token.str.match(/[!.,?]+/)) {
      newStr = newStr.replace(/\s+$/, "");
    }
    
    if (token.type === "eos") {
      newStr = newStr.replace(/\s+$/, "");
      continue;
    }
    newStr += token.str;
  }
  
  // Hackeedeehack!
  newStr = newStr.replace(/^(ist|is)\s+/i, "");
  
  // Check if first char was uppercased
  var firstChar = this.oldStr.charAt(0);
  if (firstChar.toUpperCase() === firstChar) {
    newStr = newStr.replace(/^./, function(firstChar) {
      return firstChar.toUpperCase();
    });
  }
  
  return newStr;
};


/**
 * Lookahead `n` tokens.
 *
 * @param {Number} n
 * @return {Object}
 * @api private
 */

parser.prototype.lookahead = function(n){
  var fetch = n - this.stash.length;
  if (fetch == 0) return this.lookahead(++n);
  while (fetch-- > 0) this.stash.push(this.advance());
  return this.stash[--n].type;
};

/**
 * Lookahead a single token.
 *
 * @return {Token}
 * @api private
 */

parser.prototype.peek = function() {
  var i = 0;
  while (++i) {
    var tok = this.lookahead(i);
    if (tok !== "space") {
      return tok;
    }
  }
};

/**
 * Fetch next token including those stashed by peek.
 *
 * @return {Token}
 * @api private
 */

parser.prototype.next = function() {
  var tok = this.stashed() || this.advance();
  return tok.type;
};

/**
 * Return the next possibly stashed token.
 *
 * @return {Token}
 * @api private
 */

parser.prototype.stashed = function() {
  var stashed = this.stash.shift();
  return stashed;
};

/**
 * Consume the given `len`.
 *
 * @param {Number|Array} len
 * @api private
 */

parser.prototype.skip = function(len){
  this.str = this.str.substr(Array.isArray(len)
    ? len[0].length
    : len);
};

/**
 * space
 */

parser.prototype.eos = function() {
  if (this.str.length) return;
  return { type: 'eos', str: "" };
};

/**
 * Space
 */

parser.prototype.space = function() {
  var captures;
  if (captures = /^([ \t]+)/.exec(this.str)) {
    this.skip(captures);
    return { type: "space", str: captures[0] }
  }
};

/**
 * Second
 */

parser.prototype.second = function() {
  var captures;
  if (captures = this.locales.words.rSeconds.exec(this.str)) {
    this.skip(captures);
    return { type: 'second', str: captures[0] };
  }
};

/**
 * Minute
 */

parser.prototype.minute = function() {
  var captures;
  if (captures = this.locales.words.rMinutes.exec(this.str)) {
    this.skip(captures);
    return { type: 'minute', str: captures[0] };
  }
};

/**
 * Hour
 */

parser.prototype.hour = function() {
  var captures;
  if (captures = this.locales.words.rHours.exec(this.str)) {
    this.skip(captures);
    return { type: 'hour', str: captures[0] };
  }
};

/**
 * Day
 */

parser.prototype.day = function() {
  var captures;
  if (captures = this.locales.words.rDays.exec(this.str)) {
    this.skip(captures);
    return { type: "day", str: captures[0] };
  }
};


/**
 * Date eg. 11/31/2009
 */

parser.prototype.monthDate = function() {
  var captures;
  if (captures = this.locales.rDate.exec(this.str)) {
    this.skip(captures);
    if (this.lang === "en") {
      this.date.date.setDate(parseInt(captures[2], 10));
      this.date.date.setMonth(parseInt(captures[1], 10) - 1);
      this.date._changed['months'] = true;
      this.date._changed['days'] = true;
    } else if (this.lang === "de") {
      this.date.date.setDate(parseInt(captures[1], 10));
      this.date.date.setMonth(parseInt(captures[2], 10) - 1);
      
      // Hack
      if (!captures[3] && this.str.match(/^\.(?!$)/)) {
        this.skip(1);
      }
      
      this.date._changed['months'] = true;
      this.date._changed['days'] = true;
    }
    
    if (captures[3]) {
      var year = parseInt(captures[3], 10);
      if (year < 100) {
        year = parseInt("20" + captures[3], 10);
      }
      this.date.date.setYear(year);
      this.date._changed['years'] = true;
    }
    return { type: "monthDate", str: captures[0] };
  }
};


/**
 * Day by name
 */
parser.prototype.dayByName = function() {
  var captures;
  var r = new RegExp('^' + this.locales.rDays.source, "i");
  if (captures = r.exec(this.str)) {
    var day = captures[1].toLowerCase();
    var index = this.locales.days.indexOf(day);
    this.skip(captures);
    this.date.updateDay(index, 1);
    return { type: day, str: captures[0] };
  }
};


/**
 * Month by name
 */

parser.prototype.monthByName = function() {
  var captures;
  var day;
  var month;
  if (captures = this.locales.rMonths.exec(this.str)) {
    day = captures[2];
    month = captures[4].toLowerCase();
  } else if (this.locales.rMonths2 && (captures = this.locales.rMonths2.exec(this.str))) {
    day = captures[3];
    month = captures[1].toLowerCase();
  }
  
  if (day && month) {
    var monthIndex = Math.max(this.locales.months.indexOf(month), this.locales.months2.indexOf(month));
    this.date.date.setMonth(monthIndex);
    this.date._changed['months'] = true;
    if (day) {
      this.date.date.setDate(parseInt(day));
      this.date._changed['days'] = true;
    }
    this.skip(captures);
    
    return { type: captures[0], str: captures[0] }
  }
};


parser.prototype.timeAgo = function() {
  var captures;
  if (captures = this.locales.rAgo.exec(this.str)) {
    var num = captures[1];
    var mod = captures[2].toLowerCase();
    
    var methodName = this.locales.agoMapping[mod];
    
    this.date[methodName](-num);
    this.skip(captures);
    return { type: 'timeAgo', str: captures[0] };
  }
};

/**
 * Week
 */

parser.prototype.week = function() {
  var captures;
  if (captures = this.locales.words.rWeeks.exec(this.str)) {
    this.skip(captures);
    return { type: 'week', str: captures[0] };
  }
};

/**
 * Month
 */

parser.prototype.month = function() {
  var captures;
  if (captures = this.locales.words.rMonths.exec(this.str)) {
    this.skip(captures);
    return { type: 'month', str: captures[0] };
  }

};

/**
 * Week
 */

parser.prototype.year = function() {
  var captures;
  if (captures = this.locales.words.rYears.exec(this.str)) {
    this.skip(captures);
    var newStr = this.getNewStr();
    // Filter out "new years eve"
    if (newStr.match(/\bnew/i)) {
      return { type: 'string', str: captures[0] };
    }
    return { type: 'year', str: captures[0] };
  }
};

/**
 * Meridiem am/pm
 */

parser.prototype.meridiem = function() {
  var captures;
  if (captures = this.locales.rMeridiem.exec(this.str)) {
    this.skip(captures);
    this.time(captures[1], captures[3], captures[5], captures[6]);
    return { type: 'meridiem', str: captures[0] };
  }
};

/**
 * Hour Minute (ex. 12:30)
 */

parser.prototype.hourminute = function() {
  var captures;
  if (captures = this.locales.rHourMinute.exec(this.str)) {
    this.skip(captures);
    this.time(captures[1], captures[3], captures[5]);
    return { type: 'hourminute', str: captures[0] };
  }
};

/**
 * At Hour (ex. at 5)
 */

parser.prototype.athour = function() {
  var captures;
  if ((captures = this.locales.rAtHour.exec(this.str)) || (captures = this.locales.rAtHour2.exec(this.str))) {
    this.skip(captures);
    if (captures[1].length === 4) {
      this.time(captures[1].substr(0, 2), captures[1].substr(2), 0, this._meridiem);
    } else {
      this.time(captures[1], 0, 0, this._meridiem);
    }
    this._meridiem = null;
    return { type: 'athour', str: captures[0] };
  }
};

/**
 * Time set helper
 */

parser.prototype.time = function(h, m, s, meridiem) {
  var d = this.date;
  var before = d.clone();
  meridiem = meridiem || this._meridiem;
  
  if (meridiem) {
    // convert to 24 hour
    h = ('pm' == meridiem && 12 > h) ? +h + 12 : h; // 6pm => 18
    h = ('am' == meridiem && 12 == h) ? 0 : h; // 12am => 0
  }

  m = (!m && d.changed('minutes')) ? false : m;
  s = (!s && d.changed('seconds')) ? false : s;
  d.time(h, m, s);
};

/**
 * Best attempt to pick the next time this date will occur
 *
 * TODO: place at the end of the parsing
 */

parser.prototype.nextTime = function(before) {
  var d = this.date;
  var orig = this.oldStr.toLowerCase();
  if (before <= d.date || this.locales.rPast.test(orig)) {
    return this;
  }
  
  // If time is in the past, we need to guess at the next time
  if (this.locales.rDays.test(orig)) {
    d.day(7);
  } else if (d.date.getMonth() < before.getMonth() && !this.date._changed['years']) {
    d.year(1);
  } else if ((before - d.date) / 1000 > 60 && !this.date._changed['days']) {
    d.day(1);
  }

  return this;
};

/**
 * Yesterday
 */

parser.prototype.yesterday = function() {
  var captures;
  if (captures = this.locales.words.rYesterday.exec(this.str)) {
    this.skip(captures);
    this.date.day(-1);
    return { type: 'yesterday', str: captures[0] };
  }
};

/**
 * Day after tomorrow
 */

parser.prototype.dayAfterTomorrow = function() {
  var captures;
  if (captures = this.locales.words.rDayAfterTomorrow.exec(this.str)) {
    this.skip(captures);
    this.date.day(2);
    return { type: 'dayaftertomorrow', str: captures[0] };
  }
};


/**
 * Tomorrow
 */

parser.prototype.today = function() {
  var captures;
  if (captures = this.locales.words.rToday.exec(this.str)) {
    this.date._changed['days'] = true;
    this.skip(captures);
    return { type: 'today', str: captures[0] };
  }
};


/**
 * Tomorrow
 */

parser.prototype.tomorrow = function() {
  var captures;
  if (captures = this.locales.words.rTomorrow.exec(this.str)) {
    this.skip(captures);
    this.date.day(1);
    return { type: 'tomorrow', str: captures[0] };
  }
};


/**
 * Noon
 */

parser.prototype.noon = function() {
  var captures;
  if (captures = this.locales.words.rNoon.exec(this.str)) {
    this.skip(captures);
    var before = this.date.clone();
    this.date.date.setHours(12, 0, 0);
    return { type: 'noon', str: captures[0] };
  }
};

/**
 * Midnight
 */

parser.prototype.midnight = function() {
  var captures;
  if (captures = this.locales.words.rMidnight.exec(this.str)) {
    this.skip(captures);
    var before = this.date.clone();
    this.date.date.setHours(0, 0, 0);
    return { type: 'midnight', str: captures[0] };
  }
};

/**
 * Night (arbitrarily set at 7pm)
 */

parser.prototype.night = function() {
  var captures;
  if (captures = this.locales.words.rNight.exec(this.str)) {
    this.skip(captures);
    this._meridiem = 'pm';
    var before = this.date.clone();
    this.date.date.setHours(19, 0, 0);
    return { type: 'night', str: captures[0] };
  }
};

/**
 * Evening (arbitrarily set at 5pm)
 */

parser.prototype.evening = function() {
  var captures;
  if (captures = this.locales.words.rEvening.exec(this.str)) {
    this.skip(captures);
    this._meridiem = 'pm';
    var before = this.date.clone();
    this.date.date.setHours(17, 0, 0);
    return { type: 'evening', str: captures[0] };
  }
};

/**
 * Afternoon (arbitrarily set at 2pm)
 */

parser.prototype.afternoon = function() {
  var captures;
  if (captures = this.locales.words.rAfternoon.exec(this.str)) {
    this.skip(captures);
    this._meridiem = 'pm';
    var before = this.date.clone();

    if (this.date.changed('hours')) return 'afternoon';

    this.date.date.setHours(14, 0, 0);
    return { type: 'afternoon', str: captures[0] };
  }
};


/**
 * Morning (arbitrarily set at 8am)
 */

parser.prototype.morning = function() {
  var captures;
  if (captures = this.locales.words.rMorning.exec(this.str)) {
    this.skip(captures);
    this._meridiem = 'am';
    var before = this.date.clone();
    if (!this.date.changed('hours')) this.date.date.setHours(8, 0, 0);
    return { type: 'morning', str: captures[0] };
  }
};

/**
 * Tonight
 */

parser.prototype.tonight = function() {
  var captures;
  if (captures = this.locales.words.rTonight.exec(this.str)) {
    this.skip(captures);
    this._meridiem = 'pm';
    return { type: 'tonight', str: captures[0] };
  }
};

/**
 * Next time
 */

parser.prototype._next = function() {
  var captures;
  if (captures = this.locales.words.rNext.exec(this.str)) {
    this.skip(captures);
    var d = new Date(this.date.date);
    var mod = this.peek();
    var dayIndex = this.locales.days.indexOf(mod);
    // If we have a defined modifier, then update
    if (this.date[mod]) {
      this.next();
      // slight hack to modify already modified
      this.date = date(d);
      this.date[mod](1);
    } else if (dayIndex !== -1) {
      this.next();
      // slight hack to modify already modified
      this.date = date(d);
      this.date.updateDay(dayIndex, 1);
    } else if (rDayMod.test(mod)) {
      this.date.day(1);
    }

    return { type: 'next', str: captures[0] };
  }
};

/**
 * Last time
 */

parser.prototype.last = function() {
  var captures;
  if (captures = this.locales.words.rLast.exec(this.str)) {
    this.skip(captures);
    var d = new Date(this.date.date);
    var mod = this.peek();
    var dayIndex = this.locales.days.indexOf(mod);
    // If we have a defined modifier, then update
    if (this.date[mod]) {
      this.next();
      // slight hack to modify already modified
      this.date = date(d);
      this.date[mod](-1);
    } else if (dayIndex !== -1) {
      this.next();
      // slight hack to modify already modified
      this.date = date(d);
      this.date.updateDay(dayIndex, -1);
    } else if (rDayMod.test(mod)) {
      this.date.day(-1);
    }

    return { type: 'last', str: captures[0] };
  }
};

/**
 * Ago
 */

parser.prototype.ago = function() {
  var captures;
  if (captures = this.locales.words.rAgo.exec(this.str)) {
    this.skip(captures);
    return { type: 'ago', str: captures[0] };
  }
};

/**
 * Number
 */

parser.prototype.number = function() {
  var captures;
  if (captures = /^(?:in\s+)?(\d+)/i.exec(this.str)) {
    var n = captures[1];
    this.skip(captures);
    var mod = this.peek();

    // already changed?
    if (this.date[mod] && this.date._changed[mod + "s"]) {
      return { type: 'number', str: captures[0] };
    }
    
    // If we have a defined modifier, then update
    if (this.date[mod]) {
      if ('ago' == this.peek()) n = -n;
      this.date[mod](n);
    } else if (this._meridiem) {
      // when we don't have meridiem, possibly use context to guess
      this.time(n, 0, 0, this._meridiem);
      this._meridiem = null;
    } else {
      return { type: 'number', str: captures[0] };
    }
    
    return { type: 'time', str: captures[0] };
  }
};

/**
 * String
 */

parser.prototype.string = function() {
  var captures;
  if (captures = /^[a-zäüößèéêáàâóòôíìîúùû]+/i.exec(this.str)) {
    this.skip(captures);
    return { type: 'string', str: captures[0] };
  }
};

/**
 * Other
 */

parser.prototype.other = function() {
  var captures;
  if (captures = /^./.exec(this.str)) {
    this.skip(captures);
    return { type: 'other', str: captures[0] };
  }
};

});
require.register("date/lib/i18n/en.js", function(exports, require, module){
var date18n = {
  days:           ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
  months:         ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
  months2:        ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
  
  // 5, 05, 5:30, 5.30, 05:30:10, 05:30.10, 05.30.10, at 5
  rMeridiem:      /^(?:at\s+)?(\d{1,2})([:.](\d{1,2}))?([:.](\d{1,2}))?\s*([ap]m)/i,
  rDate:          /^(?:(?:at|on)\s+(?:the\s+)?)?(\d{1,2})\/(\d{1,2})\/?(\d{2,4})?\b/i,
  rHourMinute:    /^(?:at\s+)?(\d{1,2})([:.](\d{1,2}))([:.](\d{1,2}))?(\s*o(?:\'|\s+)?clock\b)?/i,
  rAtHour:        /^at\s*(\d{1,2})(\s*o(?:\'|\s+)?clock\b)?/i,
  rAtHour2:       /^(\d{1,2})\s*o(?:\'|\s+)?clock\b/i,
  rDays:          /\b(?:(?:on|at)\s+)?(sun(day)?|mon(day)?|tues(day)?|wed(nesday)?|thur(sday|s)?|fri(day)?|sat(urday)?)s?\b/i,
  rMonths:        /^(?:(?:at|on)\s+(?:the\s+)?)?((\d{1,2})(st|nd|rd|th))\s+(?:of\s+)?(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)/i,
  rMonths2:       /^(?:(?:at|on)\s+)?(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)[\s\-]+((\d{1,2})(st|nd|rd|th)?)/i,
  rPast:          /\b(last|yesterday|ago)\b/i,
  rAgo:           /^(\d*)\s?\b(second|sec|minute|min|hour|h|day|week|month|year)[s]?\s+ago\b/i,
  
  agoMapping: {
    "second": "second",
    "sec":    "second",
    "minute": "minute",
    "min":    "minute",
    "hour":   "hour",
    "h":      "hour",
    "day":    "day",
    "week":   "week",
    "month":  "month",
    "year":   "year"
  },
  
  words: {
    rSeconds:           /^(sec|second)s?\b/i,
    rMinutes:           /^(min|minute)s?\b/i,
    rHours:             /^h(r|our)s?\b/i,
    rDays:              /^days?\b/i,
    rWeeks:             /^w(k|eek)s?\b/i,
    rMonths:            /^mon(th)?(es|s)?\b/i,
    rYears:             /^y(r|ear)s?\b/i,
    rYesterday:         /^yesterday/i,
    rToday:             /^today/i,
    rTomorrow:          /^tomorrow/i,
    rDayAfterTomorrow:  /^(?:(?:at\s+|on\s+)?the\s+)?day\s+after\s+tomorrow/i,
    rNoon:              /^(?:(?:at|in|on)\s+(?:the\s+)?)?noon\b/i,
    rMidnight:          /^(?:(?:at|in|on)\s+(?:the\s+)?)?midnight\b/i,
    rNight:             /^(?:(?:at|in|on)\s+(?:the\s+)?)?night\b/i,
    rEvening:           /^(?:(?:at|in|on)\s+(?:the\s+)?)?evening\b/i,
    rAfternoon:         /^(?:(?:at|in|on)\s+(?:the\s+)?)?afternoon\b/i,
    rMorning:           /^(?:(?:at|in|on)\s+(?:the\s+)?)?morning\b/i,
    rTonight:           /^(?:(?:at|in|on)\s+(?:the\s+)?)?tonight\b/i,
    rNext:              /^(?:(?:at|in|on)\s+(?:the\s+)?)?next/i,
    rLast:              /^(?:(?:at|in|on)\s+(?:the\s+)?)?last/i,
    rAgo:               /^ago\b/i,
    rAt:                /\b(at|on|in)\s/i
  }
  
};

module.exports = date18n;
});
require.register("date/lib/i18n/de.js", function(exports, require, module){
var date18n = {
  days:           ['sonntag', 'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag'],
  months:         ['januar', 'februar', 'märz', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'dezember'],
  months2:        ['jan', 'feb', 'mär', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dez'],
  
  // 5, 05, 5:30, 5.30, 05:30:10, 05:30.10, 05.30.10, at 5
  rMeridiem:      /^(?:um\s+|ab\s+)?(\d{1,2})([:.](\d{1,2}))?([:.](\d{1,2}))?\s*([ap]m)/i,
  rDate:          /^(?:am\s+|an\s+dem\s+|ab\s+)?(\d{1,2})\.(\d{1,2})\.?(\d{2,4})?\b/i,
  rHourMinute:    /^(?:um\s+|ab\s+)?(\d{1,2})([:.](\d{1,2}))([:.](\d{1,2}))?(\s*uhr\b)?/i,
  rAtHour:        /^(?:um|ab)\s*(\d{1,4})(\s*uhr\b)?/i,
  rAtHour2:       /^(\d{1,4})\s*uhr\b/i,
  rDays:          /\b(?:am\s+|ab\s+)?(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)s?\b/i,
  rMonths:        /^(?:am\s+|ab\s+)?((\d{1,2})(\.))\s+(jan(?:uar)?|feb(?:ruar)?|m(?:ä|ae)r(?:z)?|apr(?:il)?|mai|jun(?:i)?|jul(?:i)?|aug(?:ust)?|sep(?:tember)?|okt(?:ober)?|nov(?:ember)?|dez(?:ember)?)/i,
  rPast:          /\b(letzte(n|r|s)?|gestern|vor)\b/i,
  rAgo:           /^vor\s+(\d*)\s?\b(sekunde|sek|min|minute|stunde|std|tag|woche|monat|jahr)(n|en)?\b/i,
  
  agoMapping: {
    "sekunde":  "second",
    "sek":      "second",
    "minute":   "minute",
    "min":      "minute",
    "stunde":   "hour",
    "std":      "hour",
    "tag":      "day",
    "woche":    "week",
    "monat":    "month",
    "jahr":     "year"
  },
  
  words: {
    rSeconds:           /^(sek|ekunde|sekunden)/i,
    rMinutes:           /^(min|minuten)\b/i,
    rHours:             /^(h|std|stunden|stunde)\b/i,
    rDays:              /^tag(en)?/i,
    rWeeks:             /^woche(n)?/i,
    rMonths:            /^monat(e|en)?\b/i,
    rYears:             /^jahr(en)?/i,
    rYesterday:         /^gestern/i,
    rToday:             /^heute/i,
    rTomorrow:          /^morgen\b/i,
    rDayAfterTomorrow:  /^(ü|ue)ber\s?morgen\b/i,
    rNoon:              /^(?:(?:am|im|ab)\s+)?mittag(s)?\b/i,
    rAfternoon:         /^(?:(?:am|im|ab)\s+)?nach\s?mittag(s)?\b/i,
    rMidnight:          /^(?:um\s+|ab\s+)?mitter\s?nacht(s)?\b/i,
    rNight:             /^(?:sp(?:ae|ä)t\s)?nacht(s)?\b/i,
    rEvening:           /^(?:sp(?:ae|ä)t\s)?abend(s)?\b/i,
    rMorning:           /^(morgens|frueh|früh|am\s+morgen)\b/i,
    rTonight:           /^(nacht|abend)\b/i,
    rNext:              /^(?:(?:am|im|ab)\s+)?n(ä|ae)chste(n|r|s)?/i,
    rLast:              /^(?:(?:am|im)\s+)?letzte(n|r|s)?/i,
    rAgo:               /^vor\b/i,
    rAt:                /\b(um|am|im|ab)\s/i
  }
  
};

module.exports = date18n;
});
require.alias("date/index.js", "date/index.js");if (typeof exports == "object") {
  module.exports = require("date");
} else if (typeof define == "function" && define.amd) {
  define(function(){ return require("date"); });
} else {
  this["date"] = require("date");
}})();