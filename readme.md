#gabriel-software.ch

[![js-standard-style](https://img.shields.io/badge/license-ISC-brightgreen.svg)](https://github.com/barbalex/gs/blob/master/license.md)

Die Webseite von [Gabriel Software](http://gabriel-software.ch).

Eigenschaften:

- Abhängigkeiten werden mit [npm](https://www.npmjs.com) verwaltet
- [ES6](https://github.com/lukehoban/es6features) fördert lesbaren, kurzen Code
- [eslint](https://github.com/airbnb/javascript) erzwingt einen konsequenten und lesbaren Programmierstil
- [webpack](http://webpack.github.io) aktualisiert während der Entwicklung laufend die App im Browser - jede Änderung ist direkt sichtbar
- [React](https://facebook.github.io/react/index.html) vereinfacht die Steuerung der Benutzeroberfläche
- mit [surge](https://surge.sh) werden für den produktiven Webserver statische Dateien erzeugt...
- ...die von [hapi.js](http://hapijs.com) an den Browser geliefert werden...
- ...der dann die App ohne weitere Hilfe des Servers ausführt. Es handelt sich daher um eine reine ["Native Web App"](https://blog.andyet.com/2015/01/22/native-web-apps)