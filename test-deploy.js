const { ethers } = require("hardhat")
const{assert,expect}=require("chai");
describe("simplestorage",()=>{
  let simplestorage;
  let depstorage;
  beforeEach(async ()=>{
    simplestorage=await ethers.getContractFactory("SimpleStorage");
    depstorage=await simplestorage.deploy();
    await depstorage.deployed()
  })
  it("Should start with favorite number 0",async()=>{
    const curval = await depstorage.retrieve();
    const expexval = "0";
    assert.equal(curval.toString(),expexval);
  })
  it("Should show the number stored",async()=>{
    const updateval=await depstorage.store("7");
    const newval = await depstorage.retrieve();
    const expecvall="7";
    assert.equal(newval.toString(),expecvall);
  })
  it("Should show the name and number inputed",async()=>{
    const addperson=await depstorage.addPerson("King","7");
    const expecperson={
      name:"King",
      favoritenumber:"7"
   }
   assert.equal(addperson.toString(),expecperson);
  })
})