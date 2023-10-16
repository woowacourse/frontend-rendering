<p align="middle" >
  <img width="100px;" src="https://em-content.zobj.net/thumbs/160/apple/81/artist-palette_1f3a8.png"/>
</p>
<h2 align="middle">프론트엔드의 렌더링 방식</h2>
<p align="middle">내 서비스의 클론 코딩을 통해 프론트엔드 렌더링 방식 이해하기</p>
<br/>

### 렌더링 시점 비교하기

1. SSG

- "빌드 시에 딱 한 번"만 호출되고, 바로 static file로 빌드됩니다. 따라서, 이후 수정이 불가능합니다.

- 앱 빌드 후에 웬만하면 바뀌지 않는 내용 **(고정된 내용)이 있는 page**가 있는 경우에만 사용하는 것이 좋을 것 같다.

- 장점은 호출 시 마다 매번 data fetch를 하지 않으니 getServerSideProps보다 **성능면에서 좋습니다**.

2. SSR

- "page가 요청받을때마다" 호출되어 pre-rendering합니다.

- **pre-render가 꼭 필요한 동적 데이터가 있는 page**에 사용하면 됩니다.

- 매 요청마다 호출되므로 성능은 getStaticProps에 뒤지지만, **내용을 언제든 동적으로 수정이 가능**합니다.

3. ISR

- ISR은 일정 주기마다 데이터의 최신 정보를 검사해서 업데이트된 데이터로 다시 페이지를 생성한다.

- 한 번 만들어진 SSG 페이지, 업데이트된 정보를 보여줄 수 없다는 단점을 보완하기 위해 만들어진 개념이다.

- fetch정보가 동적으로 바뀌진 않지만 fetch 결과가 바뀔 가능성이 있을 경우 사용하면 좋을 것 같다.

### 사용자 경험 측면 분석

1. SSG
   <img width="432" alt="스크린샷 2023-10-16 오후 2 58 33" src="https://github.com/turtle601/json-server-for-react-payment/assets/78203399/d9f20eeb-61d1-41d4-a093-9d97af08bd01">

2. SSR
   <img width="403" alt="스크린샷 2023-10-16 오후 3 22 29" src="https://github.com/ssi02014/react-query-tutorial/assets/78203399/9217d643-4713-457b-bf24-a96df157e681">

3. ISR

