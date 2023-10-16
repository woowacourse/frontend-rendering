<p align="middle" >
  <img width="100px;" src="https://em-content.zobj.net/thumbs/160/apple/81/artist-palette_1f3a8.png"/>
</p>
<h2 align="middle">프론트엔드의 렌더링 방식</h2>
<p align="middle">내 서비스의 클론 코딩을 통해 프론트엔드 렌더링 방식 이해하기</p>
<br/>

### 렌더링 시점 비교

#### CSR의 렌더링 시점

거의 빈 html을 받아오고, 자바스크립트가 로드된 이후에 모든 컴포넌트를 렌더링하게 되어 동적인 인터렉션이 바로 가능합니다.

#### SSR의 렌더링 시점

서버에서 html을 렌더링하고, 클라이언트에서 css가 로드되고 화면에 컴포넌트가 보이지만 자바스크립트가 로드되기 전까지 동적인 인터렉션은 불가능합니다.

### 사용자 경험(UX) 측면 분석

#### CSR의 사용자 경험

장점

- 자바스크립트 번들에 CSR을 위한 스크립트가 모두 포함되어 있어 후속 렌더링이 빠르다.
- 페이지 전환 간에 화면 깜빡임이 없어 자연스러운
- 스크립트가 캐싱된 경우 인터넷 없이도 CSR 웹 어플리케이션을 실행할 수도 있다.
- 서버를 호출할 때마다 전체 UI를 다시 로드할 필요가 없다.

단점

- 클라이언트에서 자바스크립트 번들을 다운로드 받고 렌더링 되기 때문에 초기 로딩이 늦다.
- 검색 엔진 최적화(SEO)가 어렵다.
- 브라우저가 HTML과 자바스크립트 번들을 다운로드하고 실행하는 동안 사용자는 빈 페이지를 보게 되어 안좋은 경험을 할 수 있다.

#### SSR의 사용자 경험

장점

- 렌더링이 준비된 HTML 파일을 브라우저에서 로드하기 때문에 CSR에 비해 초기 페이지 로드 시간이 빠르다.
- 서버에서 페이지 로직 및 렌더링을 실행하면 많은 자바스크립트 번들을 클라이언트에 보내지 않아도 되므로 TTI(Time To Interactive)를 빠르게 수행할 수 있다.
- SEO에 친화적이다. 검색엔진 크롤러의 요청에 대한 응답으로 이미 만들어진 페이지를 주기 때문이다.

단점

- 페이지 이동시마다 서버에서 페이지를 생성하는데 시간이 걸리기 때문에 TTFB(Time To First Byte)가 느리다.
- 초기 페이지 로드시 데이터가 많이 필요하다던지 페이지 로드가 무겁다면 오히려 사용자 경험을 해칠 수 있다.

### 성능 측정 및 비교

성능 측정은 lighthouse와 performance 탭을 활용하였습니다.

ligthhouse 탭의 위 4가지 점수는 순서대로 Performance, Accessibility, Best Practices, SEO입니다.  
서버 사이드로 미리 렌더링하여 보내주다 보니 LCP가 크게 줄어들었음을 확인할 수 있었습니다.
SEO 점수도 73점에서 100점으로 크게 향상했습니다.

performance 탭을 활용해서는 script 로드 시간을 측정 해봤는데요!
SSR로 렌더링을 넘기다보니 CSR에 필요한 스크립트가 줄어들어 로드 시간을 93ms에서 66ms로 줄일 수 있었습니다.

#### CSR

![csr-lighthouse](/docs/images/csr-lighthouse.png)
![csr-performance](/docs/images/csr-performance.png)

#### SSR

![ssr-lighthouse](/docs/images/ssr-lighthouse.png)
![ssr-performance](/docs/images/ssr-performance.png)
