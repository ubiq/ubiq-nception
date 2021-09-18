import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { network } from 'hardhat';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;
  const { deployer } = await getNamedAccounts();
  let claimPrice = "88000000000000000000";

  if (network.name == "kovan") {
    claimPrice = "8800000000000000";
  }

  const burner = await deploy('Burner', {
    from: deployer,
    log: true,
  });

  const n = await deploy('N', {
    from: deployer,
    args: [burner.address, claimPrice],
    log: true,
  });
};

export default func;
func.tags = ['Burner', 'N'];
