
import { Hero, Breadcrumbs } from "@components/ui/common"
import { BookList } from "@components/ui/book"
import { BaseLayout } from "@components/ui/layout"
import { OrderCard } from "@components/ui/order"
import { EthRates, WalletBar } from "@components/ui/web3"
import { getAllBooks } from "@content/books/fetcher"
import { useWeb3 } from "@components/providers"

export default function Home({ books }) {
    const { web3, isInitialized } = useWeb3()
    console.log(web3)
    return (
    <>
        { isInitialized ? "IS INIT" : "IS NOT INIT" }
        <Hero />
      <Breadcrumbs />
      <WalletBar />
      <EthRates />
      <OrderCard />
      <BookList books={books} />
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllBooks()
  return {
    props: {
      books: data
    }
  }
}


Home.Layout = BaseLayout
