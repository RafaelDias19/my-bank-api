import express from 'express';

import AccountController from '../controllers/account.controller.js';

const router = express.Router();

router.get('/', AccountController.getAccounts);

router.get('/:id', AccountController.getAccount);

router.post('/', AccountController.createAccount);

router.put('/', AccountController.updateAccount);

router.patch('/updateBalance', AccountController.updateBalance);

router.delete('/:id', AccountController.deleteAccount);

router.use((err, _req, res, _next) => {
  global.logger.error(`${err.message}`);

  let statusCode = 500;
  let message = 'Ocorreu um erro ao processar a solicitação.';

  if (typeof err.code === 'number') {
    statusCode = err.code;
    message = err.message;
  }

  res.status(statusCode).send({ error: message });
});

export default router;
