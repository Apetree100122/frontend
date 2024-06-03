import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DiscoverPage from './Discovery/DiscoverPage';
import './LandingPage.css';
import AIArt from './AI/AIArt';
import DefiPage from './Defi/DefiPage';
import RoulettePage from './Roulette/RoulettePage';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'f97a5780e7fa00669a153e4d843ece61',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

function App() {
  return (
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <Router>
              <Routes>
                <Route path="/discover" element={<DiscoverPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/ai" element={<AIArt />} />
                <Route path="/defi" element={<DefiPage />} />
                <Route path="/game" element={<RoulettePage />} />
              </Routes>
            </Router>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
  );
}

export default App;
