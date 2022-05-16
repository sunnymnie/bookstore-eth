import { BookList } from "@components/ui/book"
import { BaseLayout } from "@components/ui/layout"
import { getAllBooks } from "@content/books/fetcher"
import { WalletBar } from "@components/ui/web3"
import { useAccount } from "@components/hooks/web3/useAccount"

export default function Marketplace({books}) {
    const { account } = useAccount()

    return (
        <>
            <div className="py-4">
                <WalletBar
                    address={account.data}
                />
            </div>
            <BookList
                books={books}
            />
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