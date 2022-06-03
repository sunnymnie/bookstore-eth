import { useWeb3 } from "@components/providers"


export default function WalletBar({ address, network, eth }) {
  const { requireInstall } = useWeb3()
  return (
    <section className="text-white bg-main">
      <div className="px-10 lg:px-20 py-10">
        <h1 className="text-2xl">Hello, {address}</h1>
        <h2 className="subtitle mb-5 text-xl">I hope you are having a great day! Each summary costs 0.1 ETH, around ${Math.round(eth * 10) / 100} if on mainnet. But given this is the Ropsten testnet, they are free! You can get Ropsten eth from many online faucets. This one gives out 10: {<a href="https://faucet.egorfine.com/" target="_blank">https://faucet.egorfine.com/</a>}</h2>
        <div className="flex justify-between items-center">
          <div className="sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
                Learn how to purchase
              </a>
            </div>
          </div>
          <div>
            {network.hasInitialResponse && !network.isSupported &&
              <div className="bg-error p-4 rounded-lg">
                <div>Connected to wrong network</div>
                <div>
                  Connect to: {` `}
                  <strong className="text-2xl">
                    {network.target}
                  </strong>
                </div>
              </div>
            }
            {requireInstall &&
              <div className="bg-error p-4 rounded-lg">
                Cannot connect to network. Please install Metamask.
              </div>
            }
            {network.data &&
              <div>
                <span>Currently on </span>
                <strong className="text-2xl">{network.data}</strong>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  )
}
