/**
 * @info this file will include calls to all the custom hooks requrie for webe
 */

import {
  useInitializeWeb3,
  useAddWeb3ProviderListners,
  useOnInitialWeb3Run,
} from "./hooks/web3Hooks";

const Wrapper = ({ children }) => {
  useAddWeb3ProviderListners();
  useInitializeWeb3();
  useOnInitialWeb3Run();
  return <>{children}</>;
};

export default Wrapper;
