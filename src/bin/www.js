#!/usr/bin/env node
import 'core-js/stable';
import 'regenerator-runtime/runtime';

/**
 * Module dependencies.
 */
import debugLib from 'debug';
import http from 'http';
import app from '../app';

const debug = debugLib('ecma6-express:server');

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val) => {
  const portValue = parseInt(val, 10);

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(portValue)) {
    // named pipe
    return val;
  }

  if (portValue >= 0) {
    // port number
    return portValue;
  }

  return false;
};

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
  const serverAddress = server.address();
  const bind =
    typeof serverAddress === 'string'
      ? `pipe ${serverAddress}`
      : `port ${serverAddress.port}`;
  debug(`Listening on ${bind}`);
  console.log(`🚀 Server listening on port ${bind}`);
};

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
