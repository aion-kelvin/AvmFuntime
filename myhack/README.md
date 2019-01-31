# myhack

This directory is mainly meant to be sanity tests that experimental AVM methods in Web3 are working.  Its secondary purpose is to be a really rough demonstration of how to use those methods.  

# Run simple node.js demonstration:

- Before running the demo, you need to install avm branch of aion_web3: `npm install https://github.com/aionnetwork/aion_web3#avm` (run this from the location that myhack.js is stored)
- Then, you can run the demo: `node myhack.js`

# Doing stuff from a website demonstration:
- Get a minified .js file of the aion_web3 avm branch by doing ONE (1) of the following:
  - (easy way) Just use the file I've prepared: https://github.com/aion-kelvin/AvmFuntime/blob/master/myhack/web3.min.js
  - (hard way) Or create your own using the aion_web3 avm branch source code (see "Web use" in the README) - https://github.com/aionnetwork/aion_web3/blob/avm/README.md
- Open myhack.html in your browser
- Jar loader demonstration doesn't work by default on Chrome due to CORS rules
  - Workaround 1 (easiest) -- use Firefox
  - Workaround 2 (if you love Chrome) -- start up Chrome with the `--allow-file-access-from-files` flag
- If hash rate demonstration doesn't work, check:
  - Is the kernel running?
  - Make sure RPC server is enabled, port is correct, and cors is enabled on the kernel side (see config.xml)
