(function () {
  if (!window.navigator) {
    return;
  }

  var browserLocales = navigator.languages !== undefined ? navigator.languages : [navigator.language],
    bestMatchLocale = 'en';

  for (var i = 0, l = browserLocales.length; i < l; i++) {
    var locale = browserLocales[i].toLocaleLowerCase().split('-')[0];

    if (supportedLocales.indexOf(locale) !== -1) {
      bestMatchLocale = locale;
      break;
    }
  }

  window.location.href = bestMatchLocale;

}());
