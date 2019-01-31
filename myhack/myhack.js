let Web3 = require("aion-web3")
let endpoint = 'http://127.0.0.1:8545';
let web3 = new Web3(new Web3.providers.HttpProvider(endpoint));

// AVM ABI decoder demonstration 
console.log("--- AVM ABI decoder demo ---");
console.log();

var method = web3.avm.method("testMethod").argTypes(web3.avm.TYPES.INT, web3.avm.TYPES.STRING_A, web3.avm.TYPES.BOOLEAN);
var data = method.encodeToHex(5, ["foo", "bar"], false);
console.log(data);
data = method.encodeToHex(5000, null, false);
console.log(data);
data = method.encodeToHex(-5, ["foo", "bar", null], true);
console.log(data);

method = web3.avm.method("moreComplexity").argTypes(web3.avm.TYPES.FLOAT, web3.avm.TYPES.LONG_A, web3.avm.TYPES.INT_2A, web3.avm.TYPES.ADDRESS, web3.avm.TYPES.DOUBLE_A);
data = method.encodeToHex(-9.87, [-1, 888, -2000000000], [[5, 1000],[-999],[]], '0xa090690831c6bc3a3e00fe7ef1364b4b3e2b3afac0984e3a62b8f77c8d4c5ae5', [-1.0, 5.0]);
console.log(data);

var object = web3.avm.decodeOneObjectFromHex("0x21000a746573744d6574686f6405fffffffb31210003210003666f6f21000362617232210201");
console.log(object);
object = web3.avm.decodeOneObjectFromHex("0x05fffffffb31210003210003666f6f21000362617232210201");
console.log(object);

// Jar deployer demonstration
console.log();
console.log("--- AVM ABI Jar deployer demo ---");
console.log();
var fs = require('fs')
var r = fs.readFileSync('small.jar')
console.log('JAR of size: ' + r.byteLength);
var encoded = web3.avm.deployJar(new Uint8Array(r))
    .initTypes(web3.avm.TYPES.INT, web3.avm.TYPES.STRING_A)
    .encodeToHex(-99, ["foo"]);
console.log("Encoded to string of length: " + encoded.length);
if (encoded.length < 10000) {
    console.log(encoded);
} else {
    console.log(encoded.substring(0,9999) + "... <plus more truncated>");
}

