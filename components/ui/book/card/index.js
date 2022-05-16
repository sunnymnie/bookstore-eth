

import Image from "next/image"
import Link from "next/link"

export default function Card({ book }) {
    return (
        <div key={book.id} className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="flex h-full">
                <div className="flex h-full">
                    <Image
                        className="object-cover"
                        src={book.coverImage}
                        layout="fixed"
                        width="200"
                        height="230"
                        alt={book.title}
                    />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{book.type}</div>
                    <Link href={`/summaries/${book.slug}`}>
                        <a
                            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                            {book.title}
                        </a>
                    </Link>
                    <p className="mt-2 text-gray-500">{book.description}</p>
                </div>
            </div>
        </div>
    )
}
