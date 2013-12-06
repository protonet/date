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
  rMonths:        /^(?:(?:at|on)\s+(?:the\s+)?)?((\d{1,2})(st|nd|rd|th))\s+(?:of\s+)?(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\s*?(\d{4})?/i,
  rMonths2:       /^(?:(?:at|on)\s+)?(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)[\s\-]+((\d{1,2})(st|nd|rd|th)?)\s*(\d{4})?/i,
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