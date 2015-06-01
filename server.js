/**
 * startet die Anwendung, indem der Server gestartet wird
 */

'use strict'

var serverOptionsDevelopment = {    // wird nur in Entwicklung genutzt
    debug: {
      log: ['error'],
      request: ['error']
    }
  },
  Hapi = require('hapi'),
  server = new Hapi.Server(serverOptionsDevelopment)

server.connection({
  host: '0.0.0.0',
  port: 8080
})

server.start(function (err) {
  if (err) {
    throw err
  }
  console.log('Server running at:', server.info.uri)
})

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply.file('index.html')
  }
})

server.route({
  method: 'GET',
  path: '/leitbild',
  handler: function (request, reply) {
    reply.file('index.html')
  }
})

server.route({
  method: 'GET',
  path: '/projekte',
  handler: function (request, reply) {
    reply.file('index.html')
  }
})

server.route({
  method: 'GET',
  path: '/technologien',
  handler: function (request, reply) {
    reply.file('index.html')
  }
})

server.route({
  method: 'GET',
  path: '/kontakt',
  handler: function (request, reply) {
    reply.file('index.html')
  }
})

server.route({
  method: 'GET',
  path: '/{p*}',
  handler: function (request, reply) {
    reply.file('200.html')
  }
})
