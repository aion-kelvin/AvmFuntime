let Web3 = require("aion-web3");
var fs = require('fs');

if (process.argv.length <= 2) {
    console.log("usage: node deploy.js [deployer-private-key] [jar-file]");
        process.exit(-1);
}

// this is local. can be changed to nodesmith
let endpoint = 'http://127.0.0.1:8545';
let web3 = new Web3(new Web3.providers.HttpProvider(endpoint));


let privateKey = process.argv[3]
var jar = fs.readFileSync(process.argv[4]);

let acc = web3.eth.accounts.privateKeyToAccount(privateKey);
console.log("Deploying", jarFilename)
console.log("-- from account", acc.address);
console.log("-- using endpoint", endpoint);


var jar = fs.readFileSync(jarFilename);
let contractEncoded = web3.avm.deployJar(new Uint8Array(jar)).initTypes().encodeToHex();

let ctAddress;
let run = async () => {
    let tx = {gas: 4000000, gasPrice: 10000000000, data: contractEncoded, from: acc.address, type: '0xf'};
    console.log("-- Transaction details:", tx);
    let signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    let result = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log("-- Got receipt:",  result);
    console.log("deployed contract address:",  result.contractAddress);
    ctAddress = tx.contractAddress;
};

run();
