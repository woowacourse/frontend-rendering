import Head from 'next/head';

type titleProps = {
  title: string;
};

export default function Seo({ title }: titleProps) {
  return (
    <Head>
      <title>{`${title} | Next`}</title>
    </Head>
  );
}
