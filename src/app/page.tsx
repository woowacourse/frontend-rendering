import Image from 'next/image';

import { IMAGE_URL } from '@/constants';

const Home = () => {
  return (
    <section>
      <Image
        src={`${IMAGE_URL}banner.png`}
        width={600}
        height={360}
        alt='이벤트 배너'
      />
    </section>
  );
};

export default Home;
