import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./compoment/Navbar.js";
import axios from "axios";
import { uploadSuccess } from "./compoment/UploadSuccess.js";
function App() {
  const [walletAddress, setWalletAddress] = useState("");
  useEffect(() => {
    addWalletLisener();
    connectWallet();
  }, [walletAddress]);
  async function addWalletLisener() {
    if (window.ethereum) {
      await window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
      });
    }
  }
  async function connectWallet() {
    if (window.ethereum) {
      await window.ethereum.enable();
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
    } else {
      alert("You need metamask to connect to this dapp");
    }
  }

  // Render
  return (
    <div>
      <Navbar onConnectWallet={connectWallet} walletAddress={walletAddress} />
      <uploadSuccess />
    </div>
  );
}

export default App;
