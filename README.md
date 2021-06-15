# JAM stack based on NextJS

Example of the landing with optional blog, using [NextJS](https://nextjs.org) SSR with TypeScript. Content coming from [Forestry](https://forestry.io), styling with [TailwindCSS](https://tailwindcss.com). As an example we're using [Kitwind](https://kitwind.io/products/kometa) as free layouts for TailwindCSS.

## Usage

Use `yarn` or `npm` to run scripts and see local results at <https://localhost:3000>

```bash
yarn dev
```

When we run `next dev` the next time, NextJS will start looking for any .ts or .tsx files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

## Structure

Default structure of the NextJS project diplaced at the root folder, but NextJS support `./src` as well.

* Main routes is at `./src/pages/`
* Template for blog posts is `./src/blog/[id].tsx`
* Static content like images at `./public/static/`

## Configuration

Example already contain TailwindCSS 2.x with SCSS support which require such files: `tailwind.config.js`, `postcss.config.js`. It also uses new [Just-In-Time](https://tailwindcss.com/docs/just-in-time-mode) mode of TailwindCSS.

Installation of the related packages:

```bash
yarn add tailwindcss postcss autoprefixer
```

If you don't want to use SASS or cutom styles, then you don't need `scss` module and `./src/styles.scss`. Just remember to include TailwindCSS globally into `./src/pages/_app.tsx`:

```TypeScript
import 'tailwindcss/tailwind.css'
```

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/uxpulse/jam-landing-next)

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
