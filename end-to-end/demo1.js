let Web3 = require("aion-web3");
let endpoint = 'http://127.0.0.1:8545';
let web3 = new Web3(new Web3.providers.HttpProvider(endpoint));

let privateKey = "0xYOUR_PRIVATE_KEY_HERE";
let acc = web3.eth.accounts.privateKeyToAccount(privateKey);

let deploy = false;
let ctAddress = "0x0f1b9b595c2ce1256e2193c8cf35a3db481ea4047e2a823750d3d42e48340a65";

let doCall = async (ctAddress, data, value) => {
    let tx = {
        from: acc.address,
        to: ctAddress,
        //gas: 100000,
        //gasPrice: 1,
        data: data,
        type: '0xf',
    };
    let res = await web3.eth.call(tx);
    return web3.avm.decodeOneObjectFromHex(res);
};

let signAndSend = async (ctAddress, data) => {
    let tx = {
        from: acc.address,
        to: ctAddress,
        gas: 200000,
        gasPrice: 10000000000,
        data: data,
        type: '0xf',
    };
    console.log(tx);
    let stx = await web3.eth.accounts.signTransaction(tx, privateKey);
    let res = await web3.eth.sendSignedTransaction(stx.rawTransaction);
    return res;
};

var math;
var callData;

// demo 1
console.log('demo 1: call sum(12,37)');
meth = web3.avm.method("sum").argTypes('int', 'int')
callData = meth.encodeToHex(12, 37);
doCall(ctAddress, callData).then(console.log);

