# SPA (Single Page Application)

SPA는 페이지의 초기 로딩 시 모든 HTML, JavaScript 및 CSS를 한 번에 불러옵니다. 이후 데이터를 서버로부터 비동기식으로 받아와서 동적으로 페이지를 갱신합니다. 주로 React, Angular, Vue.js와 같은 프레임워크를 사용하여 개발합니다.

## 장점

- 사용자 경험이 매끄럽습니다. 전체 페이지가 아닌 필요한 부분만 업데이트되므로 화면 전환시 깜빡임이 없습니다.
- 서버 요청이 적어져서 서버 부하가 줄어듭니다.

## 단점

- 초기 로딩 속도가 다소 느릴 수 있습니다. 모든 자원을 한 번에 가져오기 때문입니다.
- 검색 엔진 최적화(SEO)에 어려움이 있을 수 있습니다. 크롤러가 JavaScript를 실행하지 않으면 콘텐츠를 인식할 수 없기 때문입니다.
  - 구글 크롤링의 경우 자바스크립트를 다운로드 할 때까지 기다리긴 하지만, 기다리는 시간 때문에 SEO 점수가 낮아지게 됩니다.

# SSR (Server-Side Rendering)

SSR은 서버에서 초기 HTML을 생성하고, 이를 클라이언트로 보내줍니다. 클라이언트에서는 초기 로딩된 페이지를 먼저 보여준 후, 자바스크립트 다운로드가 완료되면 상호작용을 수행합니다.

## 장점

- 초기 로딩 속도가 빠르며, SEO에 용이합니다. 검색 엔진은 초기 HTML을 쉽게 색인화할 수 있습니다.

## 단점

- 매 요청마다 서버에서 HTML 파일을 생성해야 하므로 서버 부하가 커질 수 있습니다.

# SSG (Static Site Generation)

SSG는 빌드 시점에서 웹 페이지의 모든 HTML을 미리 생성합니다. 사전에 렌더링된 페이지를 서빙하기 때문에 초기 로딩 속도가 매우 빠릅니다.

## 장점

- 초고속으로 웹사이트를 제공할 수 있으며 CDN(Content Delivery Network)과 함께 사용됩니다.
- SEO 친화적입니다.
- 서버 요청이 없거나 적기 때문에 서버 비용을 절약할 수 있습니다.

## 단점

- 사이트의 콘텐츠가 변경될 때마다 전체 사이트를 다시 빌드해야 합니다.
- 실시간으로 변경되는 데이터를 다루는 것이 어렵습니다.

# ISR (Incremental Static Regeneration)

SSG의 단점을 보완하기 위한 방식으로, 정적 페이지를 사전 생성하면서도 동적 데이터를 주기적으로 갱신할 수 있습니다. 페이지의 일부만 정적으로 생성하고 나머지는 동적으로 처리할 수 있습니다.

## 장점

- SSG와 비슷하게 초기 로딩 속도가 빠르며, 동적 데이터 갱신이 가능합니다. 따라서 실시간 업데이트가 필요한 웹사이트에 유용합니다.

## 단점

- 설정과 관리가 복잡할 수 있으며, 모든 환경에서 지원되지 않을 수 있습니다.

# 사용자 경험(UX) 측면 분석

이번 미션에서는 로드맵 디테일 페이지를 next.js app router를 통해 SSR 방식으로 구현했습니다.
기존 프로젝트의 컴포넌트를 그대로 재사용하기 위해 styled-components를 도입했고, 이 때문에 API 요청을 client side에서 수행해야 했기 때문입니다.
그 결과 사용자가 빠르게 초기 화면을 볼 수 있다는 장점이 있었지만 SEO 점수를 늘릴 수 있었지만, 크게 의미있는 컨텐츠를 보여줄 수 없다는 단점이 있었어요.
로드맵 디테일 정보는 변경되지 않기 때문에 SSG 방식이 가장 최적이었지 않을까 생각합니다.
위의 설명에서처럼 CDN과 함께 사용하면 실제 서버 요청을 줄일 수 있으며 초기 로딩 속도도 획기적으로 향상시킬 수 있기 때문입니다.
styled-components를 사용하더라도 SSG 방식으로 빌드 시에 정적 html을 생성하고 추후 client에서 자바스크립트 다운로드가 완료되면 CSS in JS를 추가하는 것으로 상호작용을 할 수 있습니다.
