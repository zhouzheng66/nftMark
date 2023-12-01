function Navbar({ onConnectWallet, walletAddress }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">NFT Marktemplace</div>
      <div className="navbar-meau">
        <button className="connect-wallet-button" onClick={onConnectWallet}>
          {walletAddress || "connect Wallet"}
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
