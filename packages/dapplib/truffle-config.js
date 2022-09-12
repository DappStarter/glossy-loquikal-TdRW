require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name renew saddle concert harvest force force gesture'; 
let testAccounts = [
"0x322c4eb01bc8a98b6e3cdbf457d33b1e58ea379adbd4114b094cc9c259a0cc6c",
"0xf3f55614c5f660a3f6fb8cd5060e3899340e964131990c7146b9a5c741b6234e",
"0x31c6501d46627ba849e63e83f174277615186f334b9d17045f765bb92f194437",
"0x61ec2fc3710ccfeb024e58bbe090130ba04e9429513d4fc59f2d7ab7141246c9",
"0xc77549fc47a12917bb82e1d418ada1b3402012af47869ef01300b78929db2ef0",
"0xb89ae6559a42ec9aa596b0d8d4b7171b002c6b26d5e637193c59f501c94084eb",
"0x5e19b07d031fa5a7b89ed68e3710060ce5db8a8dfa241b2e3e233040ab551087",
"0x3dbd2151435e46587e69f3712740fb5096f6d3f2a96867d4e7f09432f2747420",
"0x5a49084652b59d40933b98969d8a85af09a83d09247d580cb6ba0ea54ced4ad6",
"0x1da2ed70c944ddb24c9d57c97d8ea239977e4c6cec7bd962297003f9dd6d117b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

