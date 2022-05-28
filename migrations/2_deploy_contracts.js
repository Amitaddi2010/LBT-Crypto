const EthSwap = artifacts.require("EthSwap");
const Token = artifacts.require("Token");
const Lottery = artifacts.require("lottery");
module.exports = async function(deployer) {
  // deploy LWC token
  await deployer.deploy(Token);

  const token = await Token.deployed(); //instance

  // deploying EthSwap Token
  await deployer.deploy(EthSwap, token.address); // in second argument you are giving token address to the constructor in EthSwap.sol
  const ethSwap = await EthSwap.deployed();
  console.log(ethSwap.address);
  await deployer.deploy(Lottery, token.address); // in second argument you are giving token address to the constructor in EthSwap.sol
  await Lottery.deployed();

  // transfer all token to eth swap token
  await token.transfer(ethSwap.address, "1000000000000000000000000");
};
