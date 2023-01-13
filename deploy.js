const {ethers,run,network}= require("hardhat")
require("dotenv").config();
async function main(){
  const simplestorage = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploy contract..");
  const depstorage= await simplestorage.deploy();
  await depstorage.deployed();
  console.log(`SimpleStorage address is ${depstorage.address}` );
  if(network.config.chainId===6 && process.env.ETHERSCAN_APIKEY){
      await depstorage.deployTransaction.wait(4);
      await verify(depstorage.address,[]);
      
  }
  const currentval=await depstorage.retrieve();
  console.log(`The value is ${currentval}`);
  const storeval = await depstorage.store(7);
  await storeval.wait(1);
  const newval= await depstorage.retrieve();
  console.log(`The new val is ${newval}`);

}
async function verify(contractAddress,arg){
  console.log("Verifying address...");
  try{
    await run("verify:verify",{
      address:contractAddress,
      constructorArguements:arg
    })
  }
  catch(e){
    if(e.message.toLowerCase().includes("already verified")){
      console.log("Already verified");
    }
    else{
      console.log(e);
    }
  }
  
}

main().then(()=>
{process.exit=0})
.catch((error)=>{process.exit=1;
console.error(error)})