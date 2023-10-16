## 렌더링 시점 비교
- [ ] SPA와 본인이 선택한 렌더링 방식(SSR, SSG, ISR) 중 본인이 선택한 방식간의 렌더링 시점에 어떤 일이 벌어지는지 설명 (그림 또는 다이어그램 활용도 좋습니다)
제가 선택한 방식은 SSG에 가깝습니다.

### 렌더링이란?

`**React` 에서 작성한 코드를 `HTML`로 변환하는 작업**이다.

렌더링은 서버와 클라이언트 두 군데에서 할 수 있다. 즉 빌드타임, 런타임에 수행할 수 있다.

Next.js는 3개의 렌더링 방법을 제공한다.

- 클라이언트 측 렌더링: **Client Side Rendering (CSR)**
- 서버 측 렌더링: **Server Side Rendering (SSR)**
- 정적 사이트 생성: **Static Site Generation (SSG)**

### Pre-Rendering

`SSR`과 `SSG` 는 서버에서 fetch한 외부 데이터를 이용해 리액트 컴포넌트를 HTML로 만든 뒤 클라이언트에게 응답하기 때문에 `Pre-Rendering` 이라고도 한다.

### CSR vs Pre-Rendering(SSR, SSG)

### CSR

**일반적인 리액트 앱**에서 브라우저는 서버로부터 빈 HTML 파일과 UI를 구성하기 위한 Javascript 파일을 받는다. 

이후 브라우저는 Javascript 파일을 실행해 HTML을 채우는 렌더링 작업을 수행한다.

즉 초기 렌더링이 사용자 기기(브라우저)에서 수행되기 때문에 이를 **Client Side Rendering** 이라고 한다.

<img width="553" alt="image" src="https://github.com/yogjin/frontend-rendering/assets/33623078/732c0573-ac56-4e05-8bb1-58a1b19bae96">


따라서 맨 처음 클라이언트가 받은 HTML 파일은 기본 태그를 제외하고는 비어있기 때문에, 렌더링 작업이 끝나기 전까지 브라우저에는 빈 화면만 표시될 뿐이다.

### Pre-Rendering (SSR과 SSG)

순정 리액트와는 다르게 **Next.js**는 모든 페이지를 pre-render 한다. 

`Pre-Rendering`이란 리액트 컴포넌트를 HTML로 바꾸는 작업, 즉 렌더링을 서버에서 수행하는 것을 의미힌다.

<img width="550" alt="image" src="https://github.com/yogjin/frontend-rendering/assets/33623078/424163dc-c91a-4e28-b203-b974fb4451f1">


서버에서 렌더링이 되기 때문에 클라이언트는 리액트 컴포넌트로 만든 dom이 포함된 화면을 바로 볼 수 있다.

### SSR

`SSR`은 클라이언트가 서버에게 요청하면 그 때 HTML을 생성한다.

이 후 생성한 HTML과 JSON 데이터, 페이지를 상호작용할 수 있게 하는 Javascript 코드를 클라이언트로 응답한다.

응답을 받은 클라이언트는 먼저 HTML을 이용해 페이지를 빠르게 표시한다.

이 후 JSON 데이터와 Javascript 코드를 이용해 HTML을 상호작용할 수 있게 만든다.(예: 버튼에 이벤트 핸들러 연결) → 이 과정을 `Hydration` 이라고 한다.

Next.js는 `getServerSideProps`를 이용해 `SSR` 페이지를 만들 수 있다.

> React18과 Next 12에서 React **서버 컴포넌트**에 대한 알파 버전이 도입되었다. 서버 컴포넌트도 서버에서 렌더링된다. 서버 컴포넌트에 대해 궁금하다면 [카카오 기술블로그](https://tech.kakaopay.com/post/react-server-components/)와 [데모](https://github.com/reactjs/server-components-demo)를 살펴보자.
> 

### SSG

`SSG` 는 HTML이 서버에서 생성되지만 `SSR` 과 다르게 런타임에 서버가 없다.

대신 필요한 데이터가 앱을 빌드할 때 생성되고 HTML이 CDN에 저장되어 각 요청에 재사용된다.

Next.js는 `getStaticProps` 을 이용해 SSG 페이지를 만들 수 있다.

> `ISR`(**Incremental Static Regeneration**)을 이용해 정적 페이지를 만들면, 앱이 배포된 이후에도 업데이트할 수 있다. 즉 정적 페이지가 변경되어도 전체 앱을 다시 빌드할 필요가 없다.
> 

즉 Next.js는 위 세가지 방식으로 페이지를 만들 수 있다는 장점이 있다.

## 사용자 경험(UX) 측면 분석
- [ ] 각 렌더링 방식이 사용자 경험에 어떻게 영향을 미치는지 설명

- SPA
  - 첫 로드 시 흰 화면을 보게되어 사용자 입장에서 불편하다.
  - 한번 로드 후에는 다시 요청하지 않아 매끄러운 렌더링이 일어난다.
- SSG
  - html이 이미 서버에서 만들어져서 클라이언트에게 오기 때문에 첫 화면에서 유저가 볼 요소들이 많다.
  - 매번 서버에 요청해야하기 때문에 깜박임이 일어난다. 


## 성능 측정 및 비교
- [ ] SPA와 본인이 선택한 렌더링 방식(SSR, SSG, ISR)의 성능을 측정하고 비교 (사용한 측정 도구나 방법을 명시)

### lighthouse

#### SPA
<img width="751" alt="image" src="https://github.com/yogjin/frontend-rendering/assets/33623078/0f4d55ca-dc49-4e32-9df1-df4a265c3419">

#### SSG
<img width="756" alt="image" src="https://github.com/yogjin/frontend-rendering/assets/33623078/188ca9a9-7668-498e-98d6-e1ad3c10bcf0">

전체적으로 성능이 좋아졌습니다.

### webpagetest.org
데스크탑, 엣지브라우저, 캐나다 토론토, Cable 환경(5Mbps, 28ms latency)

#### SPA
<img width="1450" alt="image" src="https://github.com/yogjin/frontend-rendering/assets/33623078/eca07152-7285-4217-b20c-987fa09cd52e">
TTFB: 0.911s FCP: 3.748s FCP: 4.549s

#### SSG
<img width="1477" alt="image" src="https://github.com/yogjin/frontend-rendering/assets/33623078/90853963-da55-420d-8066-39505727c8dc">
TTFB: 0.223s
FCP: 0.422s
FCP: 1.231s

충격적인 결과입니다.
SSG가 훨씬 좋네요..
확실히 인터넷이 느린 환경에서는 네트워크 연결하는데 시간이 오래걸리는 듯 합니다
