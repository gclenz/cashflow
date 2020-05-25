const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const DDoS = require('ddos');
const compression = require('compression');
const routes = require('./routes');

require('./database');

class App {
  constructor() {
    this.server = express();
    this.ddos = new DDoS({ burst: 5, limit: 10 });

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(compression());
    this.server.use(cors());
    this.server.use(this.ddos.express);
    this.server.use(helmet());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
