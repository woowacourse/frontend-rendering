import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

const Home = () => {
  return (
    <>
      <Head>
        <title>Main Page!!</title>
      </Head>
      <Script src="https://connect.facebook.net/en_US/sdk.js" />
      <Image
        src="/images/image.png"
        alt="image"
        width={400}
        height={420}
        priority={true}
      />
      <h1>Hello, Next!</h1>
      <Link href="/second">Second Link</Link>
    </>
  );
};

export default Home;
