import { Modal } from "@components/ui/common";
import {
    BookHero,
    Curriculum,
    Keypoints
} from "@components/ui/book";
import { BaseLayout } from "@components/ui/layout";
import {getAllBooks} from "@content/books/fetcher";

export default function Book({book}) {

    return (
        <>
            <div className="py-4">
                <BookHero
                    title={book.title}
                    description={book.description}
                    image={book.coverImage}
                />
            </div>
            <Keypoints
                points={book.wsl}
            />
            <Curriculum
                locked={true}
            />
            <Modal />
        </>
    )
}

export function getStaticPaths() {
    const { data } = getAllBooks()

    return {
        paths: data.map(c => ({
            params: {
                slug: c.slug
            }
        })),
        fallback: false
    }
}


export function getStaticProps({params}) {
    const { data } = getAllBooks()
    const book = data.filter(c => c.slug === params.slug)[0]

    return {
        props: {
            book
        }
    }
}

Book.Layout = BaseLayout