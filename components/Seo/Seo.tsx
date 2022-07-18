import Head from "next/head";

type SeoProps = {
  title: string;
  meta: {
    name: string;
    content: string;
  }[];
};

export default function Seo({ title, meta }: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name={meta[0].name} content={meta[0].content} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
