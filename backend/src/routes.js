const { Router } = require('express');
const DeveloperController = require('./controllers/DeveloperController');
const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Aou de desenvolvedores' });
});

routes.get('/developers', DeveloperController.index);
routes.get('/developers/:id', DeveloperController.show);
routes.post('/developers', DeveloperController.store);
routes.put('/developers/:id', DeveloperController.update);
routes.delete('/developers/:id', DeveloperController.destroy);

module.exports = routes;