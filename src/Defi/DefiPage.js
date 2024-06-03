import React, { useState, useEffect } from 'react';
import './DefiPage.css';
import Header from '../Header/Header';
import Sidebar from "../Sidebar/Sidebar";
import { web3, AvalancheLendingcontract } from '../contracts/AvalancheLending';

const DefiPage = () => {
  const [account, setAccount] = useState('');
  const [collateral, setCollateral] = useState('');
  const [borrowAmount, setBorrowAmount] = useState('');
  const [repayAmount, setRepayAmount] = useState('');
  const [borrowerData, setBorrowerData] = useState({ collateralDeposited: '0', tokensBorrowed: '0', interestOwed: '0' });
  const [depositedCollateral, setDepositedCollateral] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');


const fetchDepositedCollateral = async () => {
  try {
    const borrowerInfo = await AvalancheLendingcontract.methods.borrowers(account).call();
    const collateralDeposited = parseFloat(web3.utils.fromWei(borrowerInfo.collateralDeposited, 'ether')).toFixed(5);
    setDepositedCollateral(collateralDeposited);
  } catch (error) {
    console.error('Error fetching deposited collateral:', error);
  }
};
useEffect(() => {
  async function load() {
    try {
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);

      // Check if the correct network is selected
      const chainId = await web3.eth.getChainId();
      if (chainId !== 43113) {
        alert('Please switch to the Avalanche Fuji Testnet in MetaMask.');
        return;
      }

      updateBorrowerData(accounts[0]);
      fetchDepositedCollateral(); // Call fetchDepositedCollateral after loading the account
    } catch (error) {
      console.error('Error loading account or AvalancheLendingcontract data:', error);
    }
  }
  load();
}, []);

  const updateBorrowerData = async (account) => {
    try {
      const borrowerInfo = await AvalancheLendingcontract.methods.borrowers(account).call();
      setBorrowerData({
        collateralDeposited: parseFloat(web3.utils.fromWei(borrowerInfo.collateralDeposited, 'ether')).toFixed(5),
        tokensBorrowed: parseFloat(web3.utils.fromWei(borrowerInfo.tokensBorrowed, 'ether')).toFixed(5),
        interestOwed: parseFloat(web3.utils.fromWei(borrowerInfo.interestOwed, 'ether')).toFixed(5)
      });
    } catch (error) {
      console.error('Error updating borrower data:', error);
    }
  };

  const handleDepositCollateral = async () => {
    try {
      await AvalancheLendingcontract.methods.depositCollateral().send({ from: account, value: web3.utils.toWei(collateral, 'ether') });
      updateBorrowerData(account);
      fetchDepositedCollateral(); 
    } catch (error) {
      console.error('Error depositing collateral:', error);
    }
  };

  const handleWithdrawCollateral = async (amount) => {
    try {
      await AvalancheLendingcontract.methods.withdrawCollateral(web3.utils.toWei(amount, 'ether')).send({ from: account });
      fetchDepositedCollateral(); // Update the deposited collateral amount after withdrawal
    } catch (error) {
      console.error('Error withdrawing collateral:', error);
    }
  };

  const handleBorrowTokens = async () => {
    try {
      await AvalancheLendingcontract.methods.borrowTokens(web3.utils.toWei(borrowAmount, 'ether')).send({ from: account });
      updateBorrowerData(account);
    } catch (error) {
      console.error('Error borrowing tokens:', error);
    }
  };

  const handleRepayLoan = async () => {
    try {
      await AvalancheLendingcontract.methods.repayLoan(web3.utils.toWei(repayAmount, 'ether')).send({ from: account });
      updateBorrowerData(account);
    } catch (error) {
      console.error('Error repaying loan:', error);
    }
  };

  return (
    <div className="defi-page">
      <Header />
      <Sidebar />
      <main className="main-content5">
        <div className="welcome-section">
          <h1>Welcome To DeFi</h1>
          <div className="balance-display">
          <BalanceButton
  collateral={depositedCollateral}
  tokensBorrowed={borrowerData.tokensBorrowed}
  interestOwed={borrowerData.interestOwed}
/>
          </div>
        </div>
        <p>Deposit crypto to register and play in our high class slots and casinos</p>
        <div className="borrowing-section">
          <div className="borrowing-box">
            <h2>Borrowing</h2>
            <div className="borrow-box">
              <input type="text" value={borrowAmount} onChange={(e) => setBorrowAmount(e.target.value)} placeholder="Amount to borrow" />
              <div className="borrow-buttons">
                <button onClick={handleBorrowTokens}>Borrow</button>
                <button onClick={handleRepayLoan}>Repay</button>
              </div>
            </div>
          </div>
        </div>
        <div className="deposit-collateral">
          <h2>Deposit collateral</h2>
          <input type="text" value={collateral} onChange={(e) => setCollateral(e.target.value)} placeholder="Amount to deposit" />
          <button onClick={handleDepositCollateral}>Deposit</button>
          <div className="withdraw-collateral">
  <h2>Withdraw Collateral</h2>
  <input type="text" value={withdrawAmount} onChange={(e) => setWithdrawAmount(e.target.value)} placeholder="Amount to withdraw" />
  <button onClick={() => handleWithdrawCollateral(withdrawAmount)}>Withdraw</button>
</div>
        </div>
      </main>
    </div>
  );
};

const BalanceButton = ({ collateral, tokensBorrowed, interestOwed, borrowedBalance }) => {
  return (
    <div className="balance-button">
      <div className="bal-text">Deposited Collateral: {collateral} AVAX</div>
      <div className="bal-text">Tokens Borrowed: {tokensBorrowed} AVAX</div>
      <div className="bal-text">Interest Owed: {interestOwed} AVAX</div>
      <div className="bal-text">Borrowed Balance: {borrowedBalance} LINK</div>
    </div>
  );
};

export default DefiPage;
