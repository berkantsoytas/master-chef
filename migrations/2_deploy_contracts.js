const MasterChef = artifacts.require("MasterChef");
const EggToken = artifacts.require("EggToken");

module.exports = async function (deployer) {
  // Deploy MasterChef
  const masterChef = await deployer.deploy(
    MasterChef,
    "0x2A157a16A9d44b9e886A18161A9926f6cBE48B8d",
    "0x767697634aF456E4e74768feb9d52d901A9Ba75b",
    "0x767697634aF456E4e74768feb9d52d901A9Ba75b",
    5000
  );

  console.log(masterChef.address);
};
