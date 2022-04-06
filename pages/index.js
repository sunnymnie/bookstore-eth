
import { Hero, Breadcrumbs } from "@components/common"
import { BookList } from "@components/book"
import { BaseLayout } from "@components/layout"
import { OrderCard } from "@components/order"
import { EthRates, WalletBar } from "@components/web3"
import { getAllBooks } from "@content/books/fetcher"

export default function Home({ books }) {
  return (
    <>
      <Hero />
      <Breadcrumbs />
      <WalletBar />
      <EthRates />
      <OrderCard />
      {/* {JSON.stringify(books)} */}
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
