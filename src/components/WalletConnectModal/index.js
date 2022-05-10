import React from "react";
import Modal from "../Modal";
import MetamaskIcon from "../../statics/icons/metamask-icon.svg";
import WalletConnectIcon from "../../statics/icons/wallet-connect.svg";
import "./styles.css";
import { Web3UserContext } from "../../contexts/web3Context";

const WalletConnectModal = React.forwardRef(
  ({ open = false, onClose = () => {} }, ref) => {
    const { state, connectWalletWtihQR, connectMetamask } = Web3UserContext();

    const handleConnectMetamask = () => {
      connectMetamask();
      onClose();
    };
    const handleConnectWalletQR = () => {
      connectWalletWtihQR();
      onClose();
    };

    return (
      <Modal open={open} onClose={onClose} ref={ref}>
        <div className="wallet-modal-container">
          <div className="modal-row-container" onClick={handleConnectMetamask}>
            <img
              src={MetamaskIcon}
              alt="metamask icon"
              className="wallet-icon"
            />
            <h2>Metamask</h2>
            <h5>Connect to your MetaMask Wallet</h5>
          </div>
          <div className="modal-row-container" onClick={handleConnectWalletQR}>
            <img
              src={WalletConnectIcon}
              alt="wallet connect icon"
              className="wallet-icon"
            />
            <h2>Connect Wallet</h2>
            <h5>Scan QRcode with your mobile wallet</h5>
          </div>
        </div>
      </Modal>
    );
  }
);

export default WalletConnectModal;
