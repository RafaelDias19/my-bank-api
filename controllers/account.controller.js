import AccountService from '../services/account.service.js';

async function getAccounts(req, res, next) {
  try {
    res.send(await AccountService.getAccounts());
  } catch (error) {
    next(error);
  }
}

async function getAccount(req, res, next) {
  try {
    res.send(await AccountService.getAccount(req.params.id));
  } catch (error) {
    next(error);
  }
}

async function createAccount(req, res, next) {
  try {
    let account = req.body;

    if (!account.name || account.balance == null) {
      throw new Error("Os campos 'name' e 'balance' são obrigatórios.");
    }

    account = await AccountService.createAccount(account);

    res.status(201).send(account);
  } catch (error) {
    next(error);
  }
}

async function updateAccount(req, res, next) {
  try {
    let account = req.body;

    if (!account.id || !account.name || account.balance == null) {
      throw new Error("Os campos 'id', 'name' e 'balance' são obrigatórios.");
    }

    account = await AccountService.updateAccount(account);

    res.send(account);
  } catch (error) {
    next(error);
  }
}

async function updateBalance(req, res, next) {
  try {
    const account = req.body;

    if (!account.id || account.balance == null) {
      throw new Error("Os campos 'id' e 'balance' são obrigatórios.");
    }

    res.send(await AccountService.updateBalance(account));
  } catch (error) {
    next(error);
  }
}

async function deleteAccount(req, res, next) {
  try {
    res.send(await AccountService.deleteAccount(req.params.id));
  } catch (error) {
    next(error);
  }
}

export default {
  createAccount,
  getAccounts,
  getAccount,
  updateAccount,
  updateBalance,
  deleteAccount,
};
