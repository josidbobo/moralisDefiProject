//require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  optimizer: 200,
  solidity: {
    compilers: [
      {version: "0.6.0"},
      {version: "0.8.9"},
      {version: "0.8.0"}
    ],
  },
  networks: {
    testnetBinance: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      accounts: [''],
      networkId: 97,
    }
     
  }
};
