

import Image from "next/image"
import Link from "next/link"

export default function Card({ book, disabled, Footer }) {
    return (
        <div key={book.id} className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="flex h-full">
                <div className="flex-1 h-full next-image-wrapper">
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <Image
                            className={`thumbnail object-cover ${disabled && "filter grayscale"}`}
                            src={book.coverImage}
                            layout="fill"
                            // width="100%"
                            // height="100%"
                            // objectFit="contain"
                            alt={book.title}
                        />
                    </div>
                </div>
                <div className="p-8 pb-4 flex-2">
                    <div className="uppercase tracking-wide text-sm text-main font-semibold">{book.type}</div>
                    <Link href={`/summaries/${book.slug}`}>
                        <a
                            className="h-12 block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                            {book.title}
                        </a>
                    </Link>
                    <p className="mt-2 text-gray-500">{book.description.substring(0, 70)}...</p>
                    {Footer &&
                        <Footer />
                    }
                </div>
            </div>
        </div>
    )
}
