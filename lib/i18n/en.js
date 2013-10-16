var date18n = {
  days:           ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
  months:         ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
  
  // 5, 05, 5:30, 5.30, 05:30:10, 05:30.10, 05.30.10, at 5
  rMeridiem:      /^(\d{1,2})([:.](\d{1,2}))?([:.](\d{1,2}))?\s*([ap]m)/,
  rHourMinute:    /^(\d{1,2})([:.](\d{1,2}))([:.](\d{1,2}))?/,
  rHourOclock:    /^(\d+)\s*o\'?clock\b/,
  rAtHour:        /^at\s?(\d{1,2})$/,
  rDays:          /\b(sun(day)?|mon(day)?|tues(day)?|wed(nesday)?|thur(sday|s)?|fri(day)?|sat(urday)?)s?\b/,
  rMonths:        /^((\d{1,2})(st|nd|rd|th))\sof\s(january|february|march|april|may|june|july|august|september|october|november|december)/,
  rPast:          /\b(last|yesterday|ago)\b/,
  rAgo:           /^(\d*)\s?\b(second|sec|minute|min|hour|h|day|week|month|year)[s]?\s+ago\b/,
  
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
    rSeconds:       /^s(ec|econd)?s?/,
    rMinutes:       /^m(in|inute)?s?/,
    rHours:         /^h(r|our)s?/,
    rDays:          /^d(ay)?s?/,
    rWeeks:         /^w(k|eek)s?/,
    rMonths:        /^mon(th)?(es|s)?\b/,
    rYears:         /^y(r|ear)s?/,
    rYesterday:     /^(yes(terday)?)/,
    rTomorrow:      /^tom(orrow)?/,
    rNoon:          /^noon\b/,
    rMidnight:      /^midnight\b/,
    rNight:         /^night\b/,
    rEvening:       /^evening\b/,
    rAfternoon:     /^afternoon\b/,
    rMorning:       /^morning\b/,
    rTonight:       /^tonight\b/,
    rNext:          /^next/,
    rLast:          /^last/,
    rAgo:           /^ago\b/,
    rAt:            /\bat\s/
  }
  
};

module.exports = date18n;