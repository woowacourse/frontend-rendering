# 🎯 렌더링 방식 탐구 및 비교 분석

## 각 렌더링 방식(SPA, SSR, SSG, ISR)의 특징

### 1. SPA (Single Page Application)

- SPA는 하나의 HTML 페이지로 시작하며(HTML에 CSS 및 번들링된 JS가 포함), 초기 로드 후에 페이지 갱신을 위해 Ajax를 사용하여 필요한 데이터만 받아와서 동적으로 내용을 변경.
- 전체 페이지를 다시 렌더링하지 않기 때문에 빠르고 부드러운 사용자 경험을 제공 가능
- 하지만 검색 엔진 최적화에 어려움이 있음

### 2. SSR (Server Side Rendering)

- SSR은 서버에서 웹 페이지의 초기 렌더링을 수행하고 브라우저에 보내는 방식
- 검색 엔진 최적화(SEO)에 우수하며, 초기 로딩 시간이 느릴 수 있는 SPA의 단점을 극복
- 클라이언트에서는 초기 로딩된 페이지를 받아오고, 이후 클라이언트 측 렌더링을 사용하여 상호작용을 수행

### 3. SSG (Static Site Generation)

- SSG는 빌드 시점에서 정적인 HTML을 미리 생성.
- 사전에 렌더링된 페이지를 서빙하기 때문에 초기 로딩 속도가 매우 빠름
- CDN을 통한 전 세계적인 캐싱이 쉽다.

### 4. ISR (Incremental Static Regeneration)

- ISR는 SSG와 비슷하지만 동적 데이터를 주기적으로 업데이트하는 데 특히 유용.
- 정적 페이지는 사전 렌더링되며, 이후에도 데이터의 일부가 동적으로 업데이트 됨.

## 렌더링 시점 비교

### SPA 방식인 하루스터디 메인 페이지

<img src="https://github.com/yeopto/frontend-rendering/blob/step2/img/spa.png?raw=true", height="170px", width="150px">

### Next.js를 이용하여 SSG 방식으로 구현한 메인 페이지

<img src="https://github.com/yeopto/frontend-rendering/blob/step2/img/ssg.png?raw=true", height="170px", width="150px">

기존 하루스터디 메인페이지는 SPA 방식으로, 네트워크 탭을 보면 빈 HTML을 불러오는걸 확인할 수 있습니다. 그 후 번들링된 JS 파일을 실행시켜 화면을 렌더링 시켜줍니다(CSR). 반면에, Next.js를 이용하여 SSG 방식으로 구현한 하루스터디 메인페이지는 빌드시점에 정적인 HTML파일을 만들어 브라우저로 내려줌으로써, 네트워크 탭을 확인하면 컨텐츠가 채워진 HTML을 받아오는 것을 확인할 수 있습니다.

## 성능 측정 및 비교

### 하루스터디 메인페이지

<img src="https://github.com/yeopto/frontend-rendering/blob/step2/img/react.png?raw=true", height="170px", width="150px">

### Next.js로 마이그레이션한 하루스터디 메인페이지

<img src="https://github.com/yeopto/frontend-rendering/blob/step2/img/next.png?raw=true", height="170px", width="150px">

Chrome LightHouse로 두 페이지를 성능 측정한 결과입니다.

Next.js를 이용해 SSG로 구현한 메인페이지가 성능이 더 좋은걸 확인할 수 있습니다. 또, SEO 점수도 더 높게 평가되는걸 확인할 수 있습니다. 수치적으로 볼 것은 LCP(Largest Contentful Paint) 지표입니다. 1.1s 가량 더 좋아진 것을 확인할 수 있습니다. 이는 기존 하루스터디 메인페이지에 이미지가 많은데, 클라이언트 측에서 이미지를 그려주지 않고 빌드 시 정적으로 이미지를 HTML에 그려놓기 때문에 LCP 지표가 더 좋아집니다.

## 사용자 경험(UX) 측면 분석

위의 성능 측정 결과를 바탕으로 Next.js를 이용하여 SSG 방식으로 구현한 메인페이지가 First Render가 더 빠르기 때문에 유저가 페이지를 보기까지의 기다리는 시간이 줄어듭니다. 초기 로딩 시간이 줄어들기 때문에 초기 로딩이 느려 사용자가 이탈하는 것을 해결할 수 있으며, 사용자에게 더 좋은 경험을 줄 수 있습니다.
