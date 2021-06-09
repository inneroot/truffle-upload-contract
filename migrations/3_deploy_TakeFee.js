const TakeFee = artifacts.require('./TakeFee.sol');

module.exports = function (deployer) {
  deployer.deploy(TakeFee);
};
