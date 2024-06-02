# CryptoCasino

CryptoCasino is an innovative platform that integrates decentralized finance (DeFi), cross-chain functionality, gaming, and artificial intelligence to provide a secure, transparent, and engaging gaming experience. Our mission is to empower users with true ownership of their assets, fair gameplay, and a secure environment free from exploitative practices.

## Inspiration

We decided to build CryptoCasino after witnessing the frustrations and challenges faced by new users in the web3 and online gaming ecosystems. Users have particularly distressing experiences with traditional online gambling platforms, such as the popular game "COLOR GAME," which promised false/fake RNG (Random Number Generator), zero transparency, centralized control, and hidden restrictions on withdrawals and unfair terms. This experience highlighted the need for a transparent, fair, and user-centric gaming platform. Inspired by the potential of Chainlink's VRF, CCIP, Automation, Data Feeds, Functions, and decentralized finance (DeFi), AI, and GameFi, we set out to create CryptoCasino, a platform that combines the best of gaming, AI, and blockchain to provide a safe, enjoyable, and transparent gaming experience. Our goal is to empower users with true ownership of their assets, fair gameplay, and a secure environment free from exploitative practices.

## What It Does

CryptoCasino is a comprehensive gaming hub where multiple gambling games can be played by users, seamlessly integrating gaming, decentralized finance (DeFi), cross-chain functionality, gaming finance, and artificial intelligence to deliver a superior user experience. Users can create AI-generated NFT profile pictures based on their chosen keywords and explore other players' profiles. The platform features a proof of concept (MVP) of one game currently - a fully functional roulette game - allowing users to place various types of bets. After the hackathon, we will introduce more games like COLOR GAME, PLINKO, MINES, etc. Powered by Chainlink VRF, the roulette wheel ensures fair and verifiable randomness, while Chainlink Automation calculates and transfers winnings to users' wallets automatically. CryptoCasino offers a robust lending service where users can deposit tokens from any supported chain as collateral to borrow LINK, facilitating seamless gameplay without the need to liquidate their holdings. Real-time asset prices provided by Chainlink Data Feeds ensure accurate and transparent collateral management, enhancing the overall gaming and financial experience.

## How We Built It

Building CryptoCasino involved integrating multiple blockchains to ensure a robust, transparent, and user-friendly platform. We started by utilizing Chainlink Functions to mint AI-generated NFT profile pictures on the Avalanche network, leveraging DALL-E3 to create unique images based on user inputs.

The core gaming logic, specifically for the roulette game, was developed and deployed on the Polygon network. This choice was driven by Polygon's fast transaction speeds and low fees, which are critical for a smooth gaming experience. For randomness in the roulette game, we integrated Chainlink VRF to guarantee fair and verifiable outcomes. Chainlink Automation was employed to handle game operations, such as spinning the roulette wheel, calculating winnings, and transferring funds to users' wallets automatically.

We implemented a lending service that allows users to deposit tokens from any supported chain as collateral to borrow LINK. Chainlink Data Feeds were used to fetch real-time asset prices, ensuring accurate and transparent collateral management. Cross-chain compatibility was achieved through Chainlink CCIP, facilitating seamless asset transfers and communication across different blockchain networks. The lending contracts were deployed on Avalanche Fuji C-Chain, taking advantage of its secure and scalable infrastructure.

## For Smart Contracts Code Check: https://github.com/CryptoCasinoPlus/smartcontracts

### Fuji Testnet CCIP
- **Avalanche Lending**: [Contract](https://testnet.snowtrace.io/address/0xf25B0cBCA90Ac97e3037488Bb64F0E0D9D706597)
- **ProfileNFTContract**: [Contract](https://testnet.snowtrace.io/address/0x11d839AcBe82440228F0Cd14922A3092f7CaeaC7)

### Polygon CCIP
- **Polygon Lending**: [Contract](https://www.oklink.com/amoy/address/0x42fc1d53ecf8b4c46989da0d44f07490668338c8)
- **ProfileNFTContract**: [Contract](https://www.oklink.com/amoy/address/0x8d36089ab6efdb3feb2d8ed42f7ec80f3c6d2b11/contract)

### VRF on Fuji C Chain for slot.sol contract
- **Subscription ID**: 2808 or 2809
- **Contract Address**: [0xFB94b68c174d3e9fa739029fc244bBD9297E819D](https://testnet.snowtrace.io/address/0xFB94b68c174d3e9fa739029fc244bBD9297E819D)
- **Consumer Transaction**: [Transaction](https://testnet.snowtrace.io/tx/0x05a135f20151b6ac60ad8f859d0f86fb483f05b589355c269dfe777c244d3a95)

### VRF on Polygon Amoy Testnet for slot.sol contract
- **Subscription ID**: 15
- **Contract Address**: [0x5E4e5347eB417982375Ef9BDe0B77F4322FCF79F](https://www.oklink.com/amoy/address/0x5e4e5347eb417982375ef9bde0b77f4322fcf79f)

### Roulette.sol on Polygon Amoy
- **Contract Address**: [0xfBeFdC343861EDc521dD2512B4B64B33bB663E4d](https://www.oklink.com/amoy/address/0xfbefdc343861edc521dd2512b4b64b33bb663e4d)

### Roulette.sol on Fuji C Chain
- **Contract Address**: [0xf9b55e22Eaa6A834a1De0bAAb69C9aCD52d36995](https://testnet.snowtrace.io/address/0xa6D6f4556B022c0C7051d62E071c0ACecE5a1228?q=0xf9b55e22Eaa6A834a1De0bAAb69C9aCD52d36995)

## Challenges We Ran Into

Ensuring seamless integration of various Chainlink services required meticulous planning and extensive testing. Ensuring smooth interoperability of smart contracts across multiple chains demanded thorough testing and troubleshooting. Understanding and implementing Chainlink routers and supported chains was initially complex.

## Accomplishments That We're Proud Of

Successfully developed and deployed a fair and transparent gaming platform that addresses the exploitative practices of existing platforms. Integrated multiple Chainlink services with DeFi, AI, and GameFi to create a comprehensive and trustworthy system. Launched a visually appealing and user-friendly interface, making CryptoCasino highly accessible and engaging. Verified and deployed smart contracts on Polygon and Avalanche.

## What We Learned

- Gained extensive knowledge of Chainlink.
- Understood the complexities of cross-chain lending and developed a seamless user experience.
- Realized the importance of clear and fair terms for user engagement.

## What's Next

- **Marketing and Expansion**: Promote CryptoCasino and expand its user base.
- **Mainnet Launch**: Transition from testnets to mainnet for wider adoption.
- **Advanced DeFi Features**: Introduce additional DeFi features.
- **User Feedback**: Collect and incorporate user feedback to launch improved versions.

By leveraging the power of blockchain technology and integrating multiple Chainlink services, CryptoCasino aims to set a new standard in the gaming and financial services industry.
