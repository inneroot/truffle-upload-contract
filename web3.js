require("dotenv").config();
const config = require("config")

// const Web3 = require("web3");
const Contract = require("web3-eth-contract");


Contract.setProvider(
  `https://ropsten.infura.io/v3/${config.get("infura.project_id")}`
);
const contractAddress = "0xC68Cc0e240328eaC657a7113909F08181a75475c";
const SimpleStorage = require("./build/contracts/SimpleStorage.json");
const ABI = SimpleStorage.abi;
// console.log(ABI);

const contract = new Contract(ABI, contractAddress);
// const web3contract = new web3.eth.Contract(ABI, contractAddress)

const asyncRun = async () => {
  const result = await contract.methods.value().call();
  console.log(result);
};

asyncRun();
