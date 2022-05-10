import React, { useRef, useState } from "react";
import { Web3UserContext } from "../../contexts/web3Context";
import Button from "../Button";
import Fieldset from "../fieldset";
import Input from "../Input";
import Label from "../label";
import { shortenAddress } from "../../utils/constants";
import "./styles.css";
import WalletConnectModal from "../WalletConnectModal";

const HeroCard = () => {
  const { state, sendTransaction } = Web3UserContext();
  const { account, isWalletConnected } = state;

  const [isModalOpen, setIsOpen] = useState(false);
  const handleModalClose = () => setIsOpen(false);
  const handleModalOpen = () => setIsOpen(true);

  const handleConnectWallet = () => {
    !isWalletConnected && handleModalOpen();
  };

  const [value, setValue] = useState("");
  const handleValueChange = (e) => setValue(e.target.value);

  const handleSendTransaction = () => {
    if (!Number(value)) return;
    sendTransaction(value);
  };

  const ref = useRef(null);
  return (
    <>
      <div className="hero-card">
        <div className="hero-card-grid">
          <Fieldset>
            <Label>Smart Chain BNB Amount</Label>
            <Input
              placeholder="0"
              variant="secondary"
              value={value}
              type="number"
              onChange={handleValueChange}
            />
          </Fieldset>
          <Fieldset>
            <Label>Tokens</Label>
            <Input placeholder="0" variant="secondary" readOnly />
          </Fieldset>
        </div>
        <div className="quote">Tokens will be automatically sent after TGE</div>

        <div className="hero-card-grid buttons" ref={ref}>
          <Button variant="secondary" onClick={handleConnectWallet}>
            {isWalletConnected ? shortenAddress(account) : "Connect Wallet"}
          </Button>
          <Button onClick={handleSendTransaction}>Approve</Button>
        </div>
      </div>

      <WalletConnectModal
        open={isModalOpen}
        onClose={handleModalClose}
        ref={ref}
      />
    </>
  );
};

export default HeroCard;
