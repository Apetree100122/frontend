import { createClient } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains"; 
import { getDefaultClient } from "connectkit";

export const alchemyId = "Gt79LtULa7JUw2xURBM4hhs3EmiBKkpl";
const chains = [mainnet, polygon, optimism, arbitrum];

export const client = createClient(
  getDefaultClient({
    appName: "hello-wallet",
    alchemyId,
    chains,
  })
);