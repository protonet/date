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