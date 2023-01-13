const{task}=require("hardhat/config");
task("Block-number","Prints the current block-number").setAction(
    async(tasskArg,hre)=>{
        const blockNumber=await hre.ethers.provider.getBlockNumber();
        console.log(`The current block-number is: ${blockNumber}`);
    }
)