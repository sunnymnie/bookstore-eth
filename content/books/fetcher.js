import books from "./index.json"

export const getAllBooks = () => {

    return {
        data: books,
        bookMap: books.reduce((a, b, i) => {
            a[b.id] = b
            a[b.id].index = i
            return a
        }, {})
    }
}