import Head from "next/head";

export default function Header({ siteTitle }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Student Information portal, pretty poggers right?"
        />
        <meta property="og:image" content={`/favicon.ico`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    </>
  );
}
