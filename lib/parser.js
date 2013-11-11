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
      this.date.date.setYear(parseInt(captures[3], 10));
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
    this.time(captures[1], 0, 0, this._meridiem);
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
