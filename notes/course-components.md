# Course component notes

## Images (21.4)
- To use NextJs: `import Image from "next/image"`
- Make sure to allow access from domain images are stored. In `next.config.js` add 
```text
  images: {
    domains: [
      "thrangra.sirv.com"
    ]
  }
```
- `<Image className="object-cover" src={book.coverImage} layout="fixed" width="200" height="230" alt={book.title} />`
- See usage in `book>list>index.js`

## Multi-pages (21.5-21.6)
- In pages folder create `summaries`, and in `summaries` create `[slug].js`
- For links use NextJs: `import Link from "next/link"`
- Set link href like: ```<Link href={`/summaries/${book.slug}`}><a className="">{title}</a>```
- In `[slug].js` export `getStaticPaths` and `getStaticProps` and take in as paramater a `book`
- 