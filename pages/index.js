
import { Hero, Breadcrumbs } from "@components/ui/common"
import { BookList } from "@components/ui/book"
import { BaseLayout } from "@components/ui/layout"
import { OrderCard } from "@components/ui/order"
import { EthRates, WalletBar } from "@components/ui/web3"
import { getAllBooks } from "@content/books/fetcher"

export default function Home({ books }) {
    return (
    <>
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
