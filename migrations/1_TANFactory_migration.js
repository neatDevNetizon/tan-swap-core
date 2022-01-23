const TANFactory = artifacts.require("TANFactory");
const FeeToSetter = "0x12AA6CFa23330A0dc71c776f349F824ae3579C1c"

module.exports = function (deployer) {
  deployer.deploy(TANFactory, FeeToSetter);
};
