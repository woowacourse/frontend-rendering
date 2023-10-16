'use client';

import CarffeineMap from '@components/CarffeineMap';
import Loading from '@components/Loading';
import Navigator from '@components/Navigator';
import { Status, Wrapper } from '@googlemaps/react-wrapper';

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <Loading />;
    case Status.FAILURE:
      return <>에러 발생</>;
    case Status.SUCCESS:
      return <CarffeineMap />;
  }
};

export default function Home() {
  return (
    <>
      <Navigator />
      <Wrapper
        apiKey={
          process.env.NODE_ENV === 'production'
            ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY_PROD
            : process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY_DEV
        }
        render={render}
        libraries={['marker']}
      />
    </>
  );
}
