import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Creativefolks Next 13 Typescript Tailwind template</title>
        <meta name="description" content="TypeScript starter for Next.js that includes all you need to build amazing apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <h1 className="text-4xl">Creativefolks</h1>
          <h2>Nextjs 13.0 Typescript Tailwindcss Template</h2>
        </div>
      </main>
    </>
  );
}
