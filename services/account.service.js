import AccountRepository from '../repositories/account.repository.js';

async function getAccounts() {
  const accounts = await AccountRepository.getAccounts();
  delete accounts.lastId;
  return accounts;
}

async function getAccount(id) {
  return AccountRepository.getAccount(id);
}

async function createAccount(account) {
  return AccountRepository.insertAccount(account);
}

async function updateAccount(account) {
  return AccountRepository.updateAccount(account);
}

async function updateBalance(account) {
  const acc = await AccountRepository.getAccount(account.id);
  acc.balance = account.balance;
  return AccountRepository.updateAccount(acc);
}

async function deleteAccount(id) {
  return AccountRepository.deleteAccount(id);
}

export default {
  createAccount,
  getAccounts,
  getAccount,
  updateAccount,
  updateBalance,
  deleteAccount,
};
