'use client';
import { Status, Wrapper } from '@googlemaps/react-wrapper';

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <div>로딩중</div>;
    case Status.FAILURE:
      return <>에러 발생</>;
    case Status.SUCCESS:
      return <>지도</>;
  }
};

const App = () => {
  return (
    <Wrapper
      apiKey=""
      render={render}
      libraries={['marker']}
    />
  );
};

export default App;
