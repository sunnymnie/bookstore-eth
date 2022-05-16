import { BookList, BookCard } from "@components/ui/book"
import { BaseLayout } from "@components/ui/layout"
import { getAllBooks } from "@content/books/fetcher"
import { WalletBar } from "@components/ui/web3"
import { useAccount } from "@components/hooks/web3/useAccount"
import { useNetwork } from "@components/hooks/web3/useNetwork"

export default function Marketplace({books}) {
    const { account } = useAccount()
    const { network } = useNetwork()

    return (
        <>
            <div className="py-4">
                <WalletBar
                    address={account.data}
                    network={network.data}
                />
            </div>
            <BookList books={books}>
                {book =>
                    <BookCard
                        key={book.id}
                        book={book}
                    />
                }
            </BookList>
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

Marketplace.Layout = BaseLayout