let Web3 = require("aion-web3")
let endpoint = 'http://127.0.0.1:8545';
let web3 = new Web3(new Web3.providers.HttpProvider(endpoint));

var method = web3.avm.method("testMethod").argTypes("int", "String[]", "boolean");
var data = method.encodeToHex(5, ["foo", "bar"], false);
console.log(data);
var data = method.encodeToHex(5000, null, false);
console.log(data);
var data = method.encodeToHex(-5, ["foo", "bar", null], true);
console.log(data);
