import { BookList, BookCard } from "@components/ui/book"
import { BaseLayout } from "@components/ui/layout"
import { getAllBooks } from "@content/books/fetcher"
import { WalletBar } from "@components/ui/web3"
import { useAccount, useNetwork } from "@components/hooks/web3"

export default function Marketplace({ books }) {
    const { account } = useAccount()
    const { network } = useNetwork()

    return (
        <>
            <div className="py-4">
                <WalletBar
                    address={account.data}
                    network={{
                        data: network.data,
                        target: network.target,
                        isSupported: network.isSupported,
                        hasInitialResponse: network.hasInitialResponse
                    }}
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