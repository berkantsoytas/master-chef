const MasterChef = artifacts.require("MasterChef");
const EggToken = artifacts.require("EggToken");

module.exports = async function (deployer) {
  // Deploy EggToken
  const eggToken = await deployer.deploy(EggToken);
  // Deploy MasterChef
  const masterChef = await deployer.deploy(
    MasterChef,
    eggToken.address,
    "0x767697634aF456E4e74768feb9d52d901A9Ba75b",
    "0x767697634aF456E4e74768feb9d52d901A9Ba75b",
    80
  );

  console.log(masterChef.address);
};
