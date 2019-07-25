const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts, inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // use one of those accounts to deploy
  // the contact
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
  it('should deploy a contract', () => {
    assert.ok(inbox.options.address);
  });

  it('should has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hi there!');
  });

  it('should change the message', async () => {
    await inbox.methods.setMessage('Bye').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Bye');
  });
});
