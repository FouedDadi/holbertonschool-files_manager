import AppController from '../controllers/AppController';

const express = require('express');

const router = function rout(app) {
  const App = express.Router();
  app.use('/', App);

  App.get('/status', (request, response) => {
    AppController.getStatus(request, response);
  });
  App.get('/stats', (request, response) => {
    AppController.getStats(request, response);
  });
};

export default router;
