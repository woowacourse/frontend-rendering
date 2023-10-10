'use client';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import CarFfeineMapListener from '@map/CarFfeineListener';
import ClientStationFilters from '@ui/ClientStationFilters';
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
      return <CarFfeineMapListener />;
  }
};

export default function Home() {
  return (
    <>
      <Navigator />
      <ClientStationFilters />
      <MapController />
      <Wrapper
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        render={render}
        libraries={['marker']}
      />
    </>
  );
}
