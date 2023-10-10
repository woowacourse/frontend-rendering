'use client';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import CarFfeineMap from '@map/CarFfeineMap';
import Loading from '@ui/Loading';
import MapController from '@ui/MapController';
import Navigator from '@ui/Navigator/Navigator';

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <Loading />;
    case Status.FAILURE:
      return <>에러 발생</>;
    case Status.SUCCESS:
      return <CarFfeineMap />;
  }
};

export default function Home() {
  return (
    <>
      <Navigator />
      <MapController />
      <Wrapper
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        render={render}
        libraries={['marker']}
      />
    </>
  );
}
