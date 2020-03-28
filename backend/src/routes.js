import express from 'express';

import OngController from './controller/OngController';
import IncidentController from './controller/IncidentController';
import ProfileController from './controller/ProfileController';
import SessionController from './controller/SessionController';

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;