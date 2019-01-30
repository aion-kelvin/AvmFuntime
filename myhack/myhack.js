let Web3 = require("aion-web3")
let endpoint = 'http://127.0.0.1:8545';
let web3 = new Web3(new Web3.providers.HttpProvider(endpoint));

// AVM ABI decoder demonstration 
console.log("--- AVM ABI decoder demo ---");
console.log();
var method = web3.avm.method("testMethod").argTypes("int", "String[]", "boolean");
var data = method.encodeToHex(5, ["foo", "bar"], false);
console.log(data);
var data = method.encodeToHex(5000, null, false);
console.log(data);
var data = method.encodeToHex(-5, ["foo", "bar", null], true);
console.log(data);

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

