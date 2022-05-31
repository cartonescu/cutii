import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>Cutii de carton - Cutii carton ambalare - Cutii de carton cu autoformare</title>
      <meta name="description" content=Cutii de carton pentru ambalarea produselor tale. Cele mai bune cutii de carton cu autoformare pentru ambalare si expediere. Cutii de carton cartonescu.ro />
      <meta property="og:title" content={title} />
    </Head>
  );
}
