import { getStats, getStatus } from '../controllers/AppController';

const express = require('express');

const routes = express.Router();

routes.get('/status', getStatus);
routes.get('/stats', getStats);

export default routes;
