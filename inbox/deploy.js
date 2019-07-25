const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'tent behave deliver ride decide crash scan section earn frog defy obscure',
  'https://rinkeby.infura.io/v3/0b87950e22004248a9067037e9c0e9f2'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: bytecode, arguments: ['Hi there!'] })
  .send({ gas: '1000000', from: accounts[0] });
   console.log('Contract deployed to', result.options.address);
  console.log(result)
};

deploy();
