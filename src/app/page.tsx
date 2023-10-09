'use client';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import CarFfeineMap from '@/components/google-maps/map/CarFfeineMap';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const render = (status: Status) => {
  switch (status) {
    case Status.FAILURE:
      return <>에러 발생</>;
    case Status.LOADING:
      return <div>로딩중</div>;
    case Status.SUCCESS:
      return <CarFfeineMap/>;
  }
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper
        apiKey=""
        render={render}
        libraries={['marker']}
      />
    </QueryClientProvider>
  );
};

export default App;
