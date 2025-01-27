require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    defaultNetwork:'goerli',
    networks:{
      hardhat: {},
      sepolia:{
        url: "https://sepolia.rpc.thirdweb.com",
        accounts: [`0x${process.env.PRIVATE_KEY_S}`]
      }      
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
