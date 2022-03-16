# Getting started
1. build folder with NextJs components: `npx create-next-app bookstore-eth`
2. remove
    - `pages>api` folder
    - `styles>Home.module.css`
3. Replace `pages>index.js` with

```
export default function Home() {
  return (
    <>Hello World</>
  )
}
```

4. Install `tailwind`: https://tailwindcss.com/docs/guides/nextjs with command
  - `npm install -D tailwindcss postcss autoprefixer`
  - `npx tailwindcss init -p`
  - update `tailwind.config.js` with steps in link
  - delete everyting in `styles>globals.css` and paste in 
```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

5. Create `jsconfig.json` file in root for easier accessing components without
   `../../...`
```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@pages/*": ["pages/*"],
      "@components/*": ["components/*"],
      "@styles/*": ["styles/*"]
    }
  }
}
```
  - Make sure to go to `_app.js` and import from `@styles...`




## Basic commands
- `npm run dev` to run server


