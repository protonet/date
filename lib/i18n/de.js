var date18n = {
  days:           ['sonntag', 'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag'],
  months:         ['januar', 'februar', 'märz', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'dezember'],
  
  // 5, 05, 5:30, 5.30, 05:30:10, 05:30.10, 05.30.10, at 5
  rMeridiem:      /^(\d{1,2})([:.](\d{1,2}))?([:.](\d{1,2}))?\s*([ap]m)/,
  rHourMinute:    /^(\d{1,2})([:.](\d{1,2}))([:.](\d{1,2}))?/,
  rHourOclock:    /^(\d+)\s*uhr\b/,
  rAtHour:        /^um\s?(\d{1,2})$/,
  rDays:          /\b(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)s?\b/,
  rMonths:        /^((\d{1,2})(\.))\s(januar|februar|m(ä|ae)rz|april|mai|juni|juli|august|september|oktober|november|dezember)/,
  rPast:          /\b(letzte(n|r|s)?|gestern|vor)\b/,
  rAgo:           /^vor\s+(\d*)\s?\b(sekunde|sek|min|minute|stunde|std|tag|woche|monat|jahr)(n|en)?\b/,
  
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
    rSeconds:       /^(sek|ekunde|sekunden)/,
    rMinutes:       /^(min|inuten|m\b)/,
    rHours:         /^(h|std|stunden|stunde)/,
    rDays:          /^tag(en)?/,
    rWeeks:         /^woche(n)?/,
    rMonths:        /^monat(e|en)?\b/,
    rYears:         /^jahr(en)?/,
    rYesterday:     /^gestern/,
    rTomorrow:      /^morgen\b/,
    rNoon:          /^mittag(s)?\b/,
    rMidnight:      /^mitternacht(s)?\b/,
    rNight:         /^nacht(s)?\b/,
    rEvening:       /^abend(s)?\b/,
    rAfternoon:     /^nach\s?mittag(s)?\b/,
    rMorning:       /^(morgens|frueh|früh|am morgen)\b/,
    rTonight:       /^heute\s+(nacht|abend)\b/,
    rNext:          /^n(ä|ae)chste(n|r|s)?/,
    rLast:          /^letzte(n|r|s)?/,
    rAgo:           /^vor\b/,
    rAt:            /\b(um|am)\s/
  }
  
};

module.exports = date18n;