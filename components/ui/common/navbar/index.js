
import { useWeb3 } from "@components/providers"
import Link from "next/link"
import { Button } from "@components/ui/common"
import { useAccount } from "@components/hooks/web3"

export default function Navbar() {
  const { connect, isLoading, requireInstall } = useWeb3()
  const { account } = useAccount()
  const name = (address) => {
    return address.toString().slice(0, 6) + "..." + address.toString().slice(-4)
  }
  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/" >
                <a
                  className="font-medium mr-8 text-dark hover:text-hover">
                  Home
                </a>
              </Link>
              <Link href="/marketplace" >
                <a
                  className="font-medium mr-8 text-dark hover:text-hover">
                  Marketplace
                </a>
              </Link>
            </div>
            <div>
              <Link href="/" >
                <a
                  className="font-medium mr-8 text-dark hover:text-hover">
                  Wishlist
                </a>
              </Link>
              {isLoading ?
                <Button
                  disabled={true}
                  onClick={connect}>
                  Loading...
                </Button> :
                account.data ?
                  <Button
                    hoverable={false}
                    className="cursor-default">
                    Hi there {account.isAdmin ? "Admin" : name(account.data)}
                  </Button> :
                  requireInstall ?
                    <Button
                      onClick={() => window.open("https://metamask.io/download.html", "_blank")}>
                      Install Metamask
                    </Button> :
                    <Button
                      onClick={connect}>
                      Connect
                    </Button>
              }
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}


