import { BookList, BookCard } from "@components/ui/book"
import { BaseLayout } from "@components/ui/layout"
import { getAllBooks } from "@content/books/fetcher"
import { EthRates, WalletBar } from "@components/ui/web3"
import { useAccount, useNetwork } from "@components/hooks/web3"
import { Button } from "@components/ui/common"
import { OrderModal } from "@components/ui/order"
import { useState } from "react"
import { useEthPrice } from "@components/hooks/useEthPrice"


export default function Marketplace({ books }) {
    const [selectedBook, setSelectedBook] = useState(null)
    const { account } = useAccount()
    const { network } = useNetwork()
    const { eth } = useEthPrice()

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
                    eth={eth.data}
                />
            </div>
            <BookList books={books}>
                {book =>
                    <BookCard
                        key={book.id}
                        book={book}
                        Footer={() =>
                            <div className="mt-4">
                                <Button
                                    onClick={() => setSelectedBook(book)}
                                    variant="lightPurple">
                                    Purchase
                                </Button>
                            </div>
                        }
                    />
                }
            </BookList>
            {selectedBook &&
                <OrderModal
                    book={selectedBook}
                    onClose={() => setSelectedBook(null)}
                />
            }
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