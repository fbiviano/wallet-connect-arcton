import { configureChains, createClient } from '@wagmi/core'
import { arbitrum, mainnet, polygon } from '@wagmi/core/chains'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'

const chains = [arbitrum, mainnet, polygon]
const projectId = '0ccda2beb51cc8ed47c47b269c1e9c82'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  provider,
})
const ethereumClient = new EthereumClient(wagmiClient, chains)
const web3modal = new Web3Modal({ projectId }, ethereumClient)

console.log(web3modal)
