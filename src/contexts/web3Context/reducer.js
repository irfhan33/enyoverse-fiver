import { TYPES } from "./Types";

// state of the application
export const initialState = {
  adminWallet: "0x091700eff4Cb8e5ad59dd3c229561Ad8A345E8DA", // this wallet will be the recipient of the Transaction

  acceptedChainId: "0x38", // BSs network Id

  connectedChainId: null,
  isCorrectChain: false,

  account: null,
  balance: null,
  isWalletConnected: false,
  web3Instance: null,
  hasWeb3Provider: null,
  provider: null,

  WalletConnect: null,
  Web3: null,
};

export default function reducer(state, action) {
  switch (action.type) {
    case TYPES.UPDATE_NETWORK:
      return {
        ...state,
      };

    case TYPES.UPDATE_WEB3:
      return {
        ...state,
        ...action.payload,
      };
    case TYPES.UPDATE_BALANCE:
      return {
        ...state,
        ...action.payload,
      };

    case TYPES.DISCONNECT_WALLET:
      return {
        ...state,
        isWalletConnected: false,
        account: null,
        balance: null,
      };

    /*----------------------------------------*/
    case TYPES.UDATE_CHAIN_DETAILS:
      return {
        ...state,
        ...action.payload,
      };

    case TYPES.WALLET_CONNECTED:
      return {
        ...state,
        isWalletConnected: true,
        ...action.payload,
      };
    case TYPES.UPDATE_CONNECTED_WALLET:
      return {
        ...state,
        ...action.payload,
      };

    case TYPES.WALLET_CONNECT_INITIALIZED:
      return {
        ...state,
        WalletConnect: action.payload,
      };

    case TYPES.WEB3_JS_LOADED:
      return {
        ...state,
        Web3: action.payload,
      };
    default:
      return state;
  }
}
