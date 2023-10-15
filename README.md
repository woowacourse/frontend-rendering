# 🚀 2단계 - 렌더링 방식 토론

## 렌더링 시점의 비교

### SPA (Single Page Application)

- 특징
  - 클라이언트 측에서 동적으로 콘텐츠를 생성한다.
  - 초기에 필요한 HTML, CSS 및 JavaScript 파일을 한 번만 로드하고, 이후에는 데이터만 서버로부터 비동기적으로 가져와서 페이지를 업데이트한다.
  - 대표적인 SPA 프레임워크로는 React, Vue.js 등이 있다.
- 장점

  - 서버로부터 전체 페이지를 다시 로드할 필요가 없으므로 빠른 네비게이션과 부드러운 사용자 경험을 제공한다.

- 단점
  - 사용자가 첫 화면을 보기까지의 초기 로딩 시간이 길다.
  - 검색 엔진 최적화(SEO)에 취약하다. (검색 엔진이 크롤링할 때 로드 전의 빈 상태의 코드를 크롤링하므로 인덱싱이 제대로 되지 않음)

### SSR (Server-Side Rendering)

- 특징
  - 서버에서 페이지의 초기 렌더링을 수행해 완전한 HTML 문서를 클라이언트에게 제공한다.
  - 클라이언트 요청 시 서버에서 데이터를 가져와서 동적으로 페이지를 구성한 후 완성된 HTML 문서를 반환한다.
  - 대표적인 SSR 프레임워크로는 Next.js, Nuxt.js 등이 있다.
- 장점
  - 초기 구동 속도가 빠르다.
  - 검색 엔진 최적화(SEO)에 유용하다.
- 단점
  - TTV(Time to View)와 TTI(Time to Interact) 간의 시간 간격이 존재한다
  - 화면 깜박임이 있다.

### SSG (Static Site Generation)

- 특징
  - 사전에 모든 페이지의 정적 버전을 생성하여 서비스한다.
  - 개발자가 사전에 정해놓은 데이터와 템플릿을 기반으로 모든 페이지를 한 번에 생성하고 이를 정적 파일 형태로 제공한다.
  - SSR과 다른 점은 빌드 타임에 HTML 파일을 생성한다.
  - 대표적인 SSG 프레임워크로는 Gatsby.js, Next.js (with Static Generation) 등이 있다.
- 장점
  - 페이지 로딩 시간이 빠르다.
  - 검색 엔진 최적화(SEO)에 유용하다.
- 단점
  - 주기적으로 재빌드해야 변경된 콘텐츠가 반영된다. 따라서 동일한 콘텐츠를 여러 사용자에게 제공하거나 갱신 주기가 낮은 경우에 유용하다.

### ISR (Incremental Static Regeneration)

- 특징
  - SSG와 유사하지만 일부 페이지의 정적 버전을 사전 생성하고, 나머지 부분은 요청 시 동적으로 생성한다.
  - 초기 요청 시 사전 생성된 정적 버전을 제공하며, 그 후 백그라운드에서 해당 페이지의 내용을 갱신하여 캐시 된다. 일정 주기나 특정 이벤트 발생 시 재생성된다.
  - 대부분 Next.js에서 지원되는 기능이다.
- 장점
  - 데이터가 주기적으로 업데이트된다.
- 단점
  - 실시간으로 업데이트가 되지 않는다.

## 사용자 경험(UX) 측면 분석

### 서비스 예시

펀잇의 경우 React로 만들어져 SPA 방식을 사용하고 있다.

따라서 아래 사진과 같이 네트워크 탭에서 빈 HTML 화면을 가지고 온다.

<img width="600" alt="스크린샷 2023-10-16 오전 12 31 09" src="https://github.com/hae-on/woowacourse/assets/80464961/36d01c22-1dd0-4505-88dc-f83594cad801">

<br />

또한, 데이터 fetching이 일어났을 때 데이터만 비동기적으로 가져온다.

<img width="500" alt="스크린샷 2023-10-16 오전 12 39 22" src="https://github.com/hae-on/woowacourse/assets/80464961/d9a779c9-dbfb-43ad-92b7-2728ca1b0de7">

<br />

Next.js로 만든 펀잇의 경우 ISR과 SSG를 혼재하여 사용하였다.

메인 페이지의 경우 모두에게 똑같은 데이터가 보여지기 때문에 적합하다고 생각하였다.

ISR를 사용하면 빌드 타임에 HTML 파일이 생성되기 때문에 아래와 같이 콘텐츠가 보인다.

<img width="600" alt="스크린샷 2023-10-16 오전 12 31 17" src="https://github.com/hae-on/woowacourse/assets/80464961/fb8914c4-9d6b-4cc4-9d2d-6e85fb41b877">

<br />

또한, 초기 빌드 단계에서 모든 페이지의 내용과 데이터를 포함해 미리 준비해 둔 다음 클라이언트에게 제공하기 때문에, 네트워크 탭에 따로 뜨지 않는 것을 볼 수 있다.

<br />

<img width="500" alt="스크린샷 2023-10-16 오전 12 39 35" src="https://github.com/hae-on/woowacourse/assets/80464961/fcc635c7-6989-4dc7-a46c-79ee426e28f8">

<br />

카테고리처럼 주기적으로 업데이트가 될 필요가 없는 경우 SSG로 적용된다.

하지만 'Ranking' 부분의 데이터는 내부 알고리즘을 통해 특정 기간을 바탕으로 업데이트된다.

따라서 일정 주기나 특정 이벤트 발생 시 업데이트를 할 수 있는 ISR을 적용하였다.

revalidate의 Time-based Revalidation을 사용해 시간 기반의 업데이트를 할 수 있도록 설정하였다.

```tsx
export const getRecipeRanking = () => {
  const params = 'recipes';
  return fetchApi<RecipeRankingResponse>(`ranks/${params}`, {
    next: { revalidate: 7 * 24 * 60 * 60 },
  });
};
```

### Light House 점수

- SPA 방식

  <img width="600" alt="스크린샷 2023-10-16 오전 12 34 19" src="https://github.com/hae-on/woowacourse/assets/80464961/21a3935e-1d9f-435c-983b-f95ca1f6a95e">

- SSG & ISR 방식

  <img width="600" alt="스크린샷 2023-10-16 오전 12 33 46" src="https://github.com/hae-on/woowacourse/assets/80464961/0ffb2f78-ac44-4547-b4f0-4daf614f4487">

위 사진을 보면 SPA 방식일 때와 ISR 방식일 때 Light House 점수가 많이 차이 나는 것을 볼 수 있다.

서버 사이드 렌더링의 가장 장점이라고 말할 수 있는 SEO는 100점으로 나타난다.

가장 차이가 크게 나는 것은 LCP이다.

SPA일 때는 8초나 걸리던 것이 ISR일 때는 4배나 적은 2초로 줄어들었다.

## 사용자 경험

초기 렌더링 속도는 중요하다.

속도가 느릴수록 사용자의 이탈률이 기하급수적으로 증가하기 때문이다.

따라서 사용자가 처음으로 만나는 메인 페이지의 경우 ISR를 선택해 사용자 경험을 향상하는 것이 좋아 보인다.
