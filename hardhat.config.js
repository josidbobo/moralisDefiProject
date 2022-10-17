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
      accounts: [''],
      networkId: 97,
    }
     
  }
};
