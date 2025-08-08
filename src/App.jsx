import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import TokenLaunchpad from '../components/TokenLaunchpad';

function App() {

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 
        bg-gradient-to-br from-[#e0f2fe] to-[#dbeafe]">
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="w-full flex justify-between p-5">
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            <TokenLaunchpad />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}

export default App
