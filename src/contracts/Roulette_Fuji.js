// src/web3.js
import Web3 from 'web3';

let web3;
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    // Request account access if needed
    window.ethereum.request({ method: 'eth_requestAccounts' });
    // Check if the user is on the correct network
    const chainId = await web3.eth.getChainId();
    if (chainId !== 43113) {
      // Switch to Avalanche Fuji Testnet
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: Web3.utils.toHex(43113) }],
      });
    }
  } catch (error) {
    if (error.code === 4902) {
      // If the network is not added to MetaMask, add it
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: Web3.utils.toHex(43113),
            chainName: 'Avalanche Fuji Testnet',
            rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
            nativeCurrency: {
              name: 'Avalanche',
              symbol: 'AVAX',
              decimals: 18,
            },
            blockExplorerUrls: ['https://testnet.snowtrace.io/'],
          },
        ],
      });
    } else {
      console.error('User denied account access or other error:', error);
    }
  }
} else if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
} else {
  console.error('No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.');
}

const contractAddress = '0xf25B0cBCA90Ac97e3037488Bb64F0E0D9D706597';
const contractABI = [ /* contract ABI as before */ ];
const contract = new web3.eth.Contract(contractABI, contractAddress);

export { web3, contract };
