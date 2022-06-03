
import { Hero, Breadcrumbs } from "@components/ui/common"
import { BookList, BookCard } from "@components/ui/book"
import { NarrowLayout, BaseLayout } from "@components/ui/layout"
import { OrderCard } from "@components/ui/order"
import { WalletBar } from "@components/ui/web3"
import { getAllBooks } from "@content/books/fetcher"

export default function Home({ books }) {
  return (
    <>
      <Hero />
      {/* <Breadcrumbs /> */}
      {/* <WalletBar /> */}
      {/* <OrderCard /> */}
      <NarrowLayout>
        <BookList books={books}>
          {book =>
            <BookCard
              key={book.id}
              book={book}
            />
          }
        </BookList>
      </NarrowLayout>
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
