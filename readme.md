#gabriel-software.ch

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![js-standard-style](https://img.shields.io/badge/license-ISC-brightgreen.svg)](https://github.com/barbalex/gs/blob/master/license.md)

Die Webseite von [Gabriel Software](http://gabriel-software.ch).

Gebaut mit:

- [node.js](https://nodejs.org)
- [hapi.js](http://hapijs.com)
- [webpack](http://webpack.github.io)
- [ampersand.js](http://ampersandjs.com)
- [React](https://facebook.github.io/react/index.html)
- [JavaScript](http://en.wikipedia.org/wiki/JavaScript) / [ES6](https://github.com/lukehoban/es6features)

Eigenschaften:

- Abhängigkeiten werden mit [npm](https://www.npmjs.com) verwaltet
- [ES6](https://github.com/lukehoban/es6features) fördert lesbaren, kurzen Code
- [standard](https://github.com/feross/standard) erzwingt einen konsequenten und lesbaren Programmierstil
- [webpack](http://webpack.github.io) aktualisiert während der Entwicklung laufend die App im Browser - jede Änderung ist direkt sichtbar
- [React](https://facebook.github.io/react/index.html) vereinfacht die Programmierung der Benutzeroberfläche und baut sie effizient auf
- mit [webpack](http://webpack.github.io) werden für den produktiven Webserver statische Dateien erzeugt...
- ...die dann von [hapi.js](http://hapijs.com) "geservt" werden
- die App wird zu 100% im Browser ausgeführt. Der Server liefert nur beim erstmaligen Laden die dazu nötigen Ressourcen. Es handelt sich um eine [Native Web App](https://blog.andyet.com/2015/01/22/native-web-apps)