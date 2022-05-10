import { BScMainnet } from "../../utils/chain.configs";
import { TYPES } from "./Types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, dispatch = () => {}) => {
  let {
    adminWallet,
    account,
    provider,
    web3Instance,
    WalletConnect,
    Web3,
    isWalletConnected,
    isCorrectChain,
  } = state;

  /**
   * @info this will load web3 library using dynamic import. by importing dynamically we minimize the main bundle size
   */
  const loadWeb3JS = async () => {
    const { default: web3 } = await import(
      "web3" /* webpackChunkName: "web3-main" */
    );

    dispatch({ type: TYPES.WEB3_JS_LOADED, payload: web3 });
  };

  /**
   * @info this will create an instance of web3Modal
   */
  const initializeWalletConnectProvider = async () => {
    const { default: WalletConnectProvider } = await import(
      "@walletconnect/web3-provider" /* webpackChunkName: "walletconnect/web3-provider" */
    );

    const WalletConnect = new WalletConnectProvider({
      chainId: 56,
      rpc: {
        56: "https://bsc-dataseed1.binance.org",
      },
    });

    dispatch({
      type: TYPES.WALLET_CONNECT_INITIALIZED,
      payload: WalletConnect,
    });
  };
  const connectMetamask = async () => {
    const { ethereum } = window;
    if (!ethereum) return window.open("https://metamask.io/download", "_blank");
    await ethereum.request({
      method: "eth_requestAccounts",
    });

    handleProviderChange(ethereum);
  };

  const connectWalletWtihQR = async () => {
    await WalletConnect.enable();

    handleProviderChange(WalletConnect);
  };

  /**
   * @dev this will display web3 modal with options. once user selects provider it will update the seleted provider and wallet address in application state.
   */
  const handleProviderChange = async (provider) => {
    const web3Instance = new Web3(provider);
    const account = await web3Instance.eth.getCoinbase();

    dispatch({
      type: TYPES.WALLET_CONNECTED,
      payload: {
        web3Instance,
        account,
        provider,
      },
    });
    return { web3Instance, account, provider };
  };

  /**
   *
   * @dev this function creates request for the network changes in metmaks. if the requested netwok is not available it will request to add it in metmask.
   * @params chainId is the hex string of the chain Id. default is set to Binance mainnet
   */
  const switchChain = async (chainId = "0x38") => {
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId }],
      });
    } catch (err) {
      // if no chain found request to add
      if (err.code === 4902 || /Unrecognized chain ID/.test(err.message)) {
        await provider.request({
          method: "wallet_addEthereumChain",
          params: BScMainnet,
        });
      }
    }
  };

  /**
   * @info this function will checked the pre-conditions for the transaction to be sent
      1) is wallet connected?
      2) is seleted network correct?
   * @dev this function will send transaction
   */
  const sendTransaction = async (value) => {
    if (!isWalletConnected) return;
    if (!isCorrectChain) await switchChain();

    value = web3Instance.utils.toWei(value.toString(), "ether"); // amount should be in wei. this function converts BnB to wei which is equivalent 1e18 (1BNB = 1e18 wei)

    const transactionParameters = {
      to: adminWallet, // Required except during contract publications.
      from: account, // Required must match user's active address.
      value: web3Instance.utils.toHex(value), // the wei amount should be in hex. this function converts to hex. Only required to send ether to the recipient from the initiating external account.
    };

    // txHash is a hex string
    // As with any RPC call, it may throw an error
    return await provider.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
  };

  /**
   * @dev it returns current selected blockchain network in metamask
   */
  const getChainId = async () => {
    if (!web3Instance) return null;
    const chainId = await web3Instance.eth.getChainId();
    return chainId;
  };

  return {
    state,
    dispatch,
    sendTransaction,
    switchChain,
    getChainId,
    initializeWalletConnectProvider,
    loadWeb3JS,

    connectMetamask,
    connectWalletWtihQR,
  };
};
