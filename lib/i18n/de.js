var date18n = {
  days:           ['sonntag', 'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag'],
  months:         ['januar', 'februar', 'märz', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'dezember'],
  
  // 5, 05, 5:30, 5.30, 05:30:10, 05:30.10, 05.30.10, at 5
  rMeridiem:      /^(\d{1,2})([:.](\d{1,2}))?([:.](\d{1,2}))?\s*([ap]m)/,
  rHourMinute:    /^(\d{1,2})([:.](\d{1,2}))([:.](\d{1,2}))?/,
  rAtHour:        /^um\s?(\d{1,2})$/,
  rDays:          /\b(so(nntag)?|mo(ntag)?|di(enstag)?|mi(ttwoch)?|do(nnerstag)?|fr(eitag)?|sa(mstag)?)s?\b/,
  rMonths:        /^((\d{1,2})(\.))\s(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/,
  rPast:          /\b(letzten|letzter|gestern|vor)\b/,
  rDayMod:        /\b(morgen|mittag|nachmittag|nacht|abend|mitternacht)[s]?\b/,
  rAgo:           /^vor\s+(\d*)\s?\b(sekunde|sek|min|minute|stunde|std|h|tag|woche|monat|jahr)(n|en)?\b$/,
  
  words: {
    rSeconds:       /^(sek|ekunde|sekunden)/,
    rMinutes:       /^m(in|inute)?n?/,
    rHours:         /^(h|std|stunden|stunde)/,
    rDays:          /^tag(en)?/,
    rWeeks:         /^woche(n)?/,
    rMonths:        /^monat(en)?\b/,
    rYears:         /^jahr(en)?/,
    rYesterday:     /^gestern/,
    rTomorrow:      /^morgen/,
    rNoon:          /^mittag(s)?\b/,
    rMidnight:      /^mitternacht(s)?\b/,
    rNight:         /^nacht(s)?\b/,
    rEvening:       /^abend(s)?\b/,
    rAfternoon:     /^nachmittag(s)?\b/,
    rMorning:       /^morgen(s)\b/,
    rTonight:       /^heute\s+(nacht|abend)\b/,
    rNext:          /^nächste(n|r)?/,
    rLast:          /^letzte(n|r)?/,
    rAgo:           /^vor\b/,
    rAt:            /\b(um|am)\s/
  }
  
};

module.exports = date18n;