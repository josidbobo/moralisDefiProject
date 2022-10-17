//require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  optimizer: 200,
  solidity: {
    compilers: [
      {version: "0.7.0"},
      {version: "0.8.9"},
      {version: "0.8.0"}
    ],
  },
  networks: {
    testnetBinance: {
      url: '',
      accounts: ['b8d3a39acccb10321f334d7a4cba4be6260da69100f08b1391e0cd089d09d66c'],
      networkId: 97,
    }
     
  }
};
