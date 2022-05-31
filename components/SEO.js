import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>Cutii de carton - Cutii carton ambalare - Cutii de carton cu autoformare</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
}
