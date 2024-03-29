import Head from "next/head";
import { useRouter } from "next/router";

const HeadContent = ({ title }) => {
  const router = useRouter();
  let type = "";

  if (router.asPath === "/") {
    type = "website";
  } else {
    type = "article";
  }

  return (
    <Head>
      <title>{`MOKUMOKU - ${title}`}</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="MOKUMOKUのホームページです" />
      <meta
        property="og:url"
        content={`https://mokumoku-blog.vercel.app${router.asPath}`}
      />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content="MOKUMOKU CUP 実行委員会" />
      <meta
        property="og:image"
        content="https://mokumoku-blog.vercel.app/icon-192x192.png"
      />
      <meta name="twitter:card" content="summary" />
      <meta property="og:site_name" content="mokumoku-blog" />
      <meta property="og:locale" content="ja_JP" />
      <link rel="icon" href="/icon-192x192.png" />
      {/* WebFontの読み込み */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Noto+Sans+JP&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default HeadContent;
