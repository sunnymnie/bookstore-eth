import { BookList, BookCard } from "@components/ui/book"
import { NarrowLayout, BaseLayout } from "@components/ui/layout"
import { getAllBooks } from "@content/books/fetcher"
import { EthRates, WalletBar } from "@components/ui/web3"
import { useWalletInfo } from "@components/hooks/web3"
import { Breadcrumbs, Button } from "@components/ui/common"
import { OrderModal } from "@components/ui/order"
import { useState } from "react"
import { useEthPrice } from "@components/hooks/useEthPrice"


export default function Marketplace({ books }) {
    const [selectedBook, setSelectedBook] = useState(null)
    const { account, network, canPurchaseCourse } = useWalletInfo()
    const { eth } = useEthPrice()

    return (
        <>
            <div className="pt-4">
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
            <NarrowLayout>
                <div className="flex py-6">
                    <Breadcrumbs />
                </div>
                <BookList books={books}>
                    {book =>
                        <BookCard
                            key={book.id}
                            book={book}
                            disabled={!canPurchaseCourse}
                            Footer={() =>
                                <div className="mt-4">
                                    <Button
                                        onClick={() => setSelectedBook(book)}
                                        disabled={!canPurchaseCourse}
                                        variant="light">
                                        Purchase
                                    </Button>
                                </div>
                            }
                        />
                    }
                </BookList>
            </NarrowLayout>
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