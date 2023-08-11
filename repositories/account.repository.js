import { promises as fs } from 'fs';

async function writeFile(data) {
  await fs.writeFile(global.fileName, JSON.stringify(data, null, 2));
}

async function getAccounts() {
  const data = JSON.parse(await fs.readFile(global.fileName));
  return data;
}

async function getAccount(id) {
  const { accounts } = await getAccounts();
  const account = accounts.find((acc) => acc.id === parseInt(id, 10));
  if (account) {
    return account;
  }

  const error = new Error('Registro não encontrado.');
  error.code = 404;
  throw error;
}

async function insertAccount(account) {
  const data = await getAccounts();
  const newAccount = {
    id: data.lastId += 1,
    name: account.name,
    balance: account.balance.toFixed(2),
  };
  data.accounts.push(newAccount);

  await writeFile(data);

  return newAccount;
}

async function updateAccount(account) {
  const data = await getAccounts();
  const index = data.accounts.findIndex(
    (acc) => acc.id === parseInt(account.id, 10),
  );

  if (index === -1) {
    const error = new Error('Registro não encontrado.');
    error.code = 404;
    throw error;
  }

  data.accounts[index].name = account.name;
  data.accounts[index].balance = account.balance.toFixed(2);
  await writeFile(data);

  return data.accounts[index];
}

async function deleteAccount(id) {
  await getAccount(id);

  const data = await getAccounts();
  data.accounts = data.accounts.filter(
    (account) => account.id !== parseInt(id, 10),
  );
  await writeFile(data);

  return { sucesso: true };
}

export default {
  getAccounts,
  getAccount,
  insertAccount,
  updateAccount,
  deleteAccount,
};
