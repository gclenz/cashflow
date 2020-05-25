const { Router } = require('express');

const routes = new Router();

const authMiddleware = require('./app/middlewares/authentication');

const UserController = require('./app/controllers/UserController');
const CategoryController = require('./app/controllers/CategoryController');
const ReceiptController = require('./app/controllers/ReceiptController');
const SessionController = require('./app/controllers/SessionController');

routes.post('/users', UserController.createUser);
routes.post('/session', SessionController.createSession);

routes.use(authMiddleware);

routes.delete('/users', UserController.deleteUser);

routes.post('/categories', CategoryController.createCategory);
routes.delete('/categories/:id', CategoryController.deleteCategory);

routes.get('/receipts', ReceiptController.listReceipts);
routes.get('/receipts/:id', ReceiptController.getReceipt);
routes.post('/receipts', ReceiptController.createReceipt);
routes.delete('/receipts/:id', ReceiptController.deleteReceipt);
// routes.get('/summary', ReceiptController.getReceiptsDailyReport);

module.exports = routes;
