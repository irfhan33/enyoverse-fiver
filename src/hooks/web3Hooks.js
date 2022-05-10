import { useEffect } from "react";
import { TYPES } from "../contexts/web3Context/Types.js";
import { Web3UserContext } from "../contexts/web3Context/index.js";

/**
 * @note this hook should only be called inside the Web3Context. otherwise it will not work properly
 * @dev  this custom hook will run when the webpage loads. it will listen for changes in network (blockchain network) and account.
 */
export const useAddWeb3ProviderListners = () => {
  const {
    dispatch,
    state: { provider, acceptedChainId },
    switchChain,
  } = Web3UserContext();
  useEffect(() => {
    provider &&
      provider.on("accountsChanged", async (accounts) => {
        let payload = {
          isWalletConnected: false,
          account: null,
        };
        if (accounts && accounts.length) {
          payload = { isWalletConnected: true, account: accounts[0] };
        }
        dispatch({
          type: TYPES.UPDATE_CONNECTED_WALLET,
          payload: payload,
        });
      });
    //  network event listeners
    provider &&
      provider.on("chainChanged", async (chainId) => {
        const isCorrectChain = parseInt(acceptedChainId) === parseInt(chainId);
        dispatch({
          type: TYPES.UDATE_CHAIN_DETAILS,
          payload: {
            isCorrectChain: isCorrectChain,
            connectedChainId: chainId,
          },
        });
        if (!isCorrectChain) await switchChain();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider]);
};

export const useInitializeWeb3 = () => {
  const { loadWeb3JS, initializeWalletConnectProvider } = Web3UserContext();

  useEffect(() => {
    initializeWalletConnectProvider();
    loadWeb3JS();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useOnInitialWeb3Run = () => {
  const {
    dispatch,
    state: { acceptedChainId, web3Instance },
    switchChain,
    getChainId,
  } = Web3UserContext();
  useEffect(() => {
    (async () => {
      if (!web3Instance) return null;
      //  this method will fetch the current connected blockchain network
      const chainId = await getChainId();

      //  if the connected network is not as required it will ask to switch it
      if (parseInt(acceptedChainId) !== parseInt(chainId)) await switchChain();
      else
        dispatch({
          type: TYPES.UDATE_CHAIN_DETAILS,
          payload: {
            isCorrectChain: true,
            connectedChainId: chainId,
          },
        });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [web3Instance]);
};
