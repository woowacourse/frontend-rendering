# 쵸파 step2

## 렌더링 시점 비교

메인 페이지는 `검색 상태`를 Client Component로 추출하여 서버 컴포넌트로 작성했습니다.

식물 상세 페이지는 `useQuery`의 데이터를 그대로 사용해서 Client Component 입니다.

원래 코드의 재사용성을 위해 styled-components를 사용했습니다.

### 원래의 메인 페이지 / 식물 상세 페이지

- **렌더링 방식: SPA**
- 빌드 결과: 비어있는 index.html + chunks/chunk.js

#### 1. HTML 요청

처음엔 body가 비어있는 HTML을 요청합니다.
대신 head에 pre-load할 리소스나 메타데이터가 포함되어있습니다.

특히, 비어있는 body를 동적으로 그려줄 자바스크립트 파일의 경로도 script 태그 안에 있습니다.

아직 사용자에게 빈 페이지로 보입니다.

#### 2. 번들(JS) 요청

HTML을 받고 나면 script태그의 src 경로로 번들파일을 다시 요청합니다.
이후 번들을 로드하면 JS코드에 의해서 DOM트리를 그릴 수 있습니다.

#### 3. 데이터(백엔드 API) 요청

어떤 페이지들은 필수적으로 백엔드의 데이터가 있어야 합니다.

이를 위해 JS코드는 백엔드에 데이터를 요청하고,
요청이 완료되기 전 로딩 페이지를 보여주거나 스켈레톤을 보여줄 수 있습니다.

#### 4. 렌더링

요청이 완료되면 JS코드는 다시 제대로된 페이지를 그립니다.
이때, 네트워크 요청에 오류가 생기면 에러페이지를 보여주는 등 핸들링할 수 있습니다.

### NextJS / 메인 페이지

- **렌더링 방식: ServerComponent / Static Rendering**
- 빌드 결과: Static

메인 페이지에서 검색 영역을 제외하면 `클라이언트 상태`가 없기 때문에 HTML과 스타일이 바뀌지 않습니다.

따라서 빌드 시에 미리 렌더링 하고, 이후에 사용자가 페이지를 요청할 때 렌더링된 페이지를 제공합니다.

#### 1. 빌드시에 렌더링

NextJS에서는 styled-components `useServerInsertedHTML` 함수를 제공하는데,

이는 추출된 styled-components의 CSS를 head태그에 넣어서 static HTML을 만들 수 있게 합니다.

#### 2. HTML 요청

고정된 스타일이 적용되어있는 static HTML을 제공받습니다.

CSR과는 달리 빈 페이지가 아닙니다.

#### 3. Client Component 관련 번들 요청

HTML을 받고 나면 JS 명령어를 통해 Client Component가 필요한 영역을 hydrate합니다.

### NextJS / 메인 페이지의 검색창

- 렌더링 방식: Client Component
- 빌드 결과: chunk.js

### NextJS / 식물 상세 페이지

- **렌더링 방식: Client Component / Full page load**
- 빌드 결과: Server

일반적인 컴포넌트가 아닌 페이지로 사용되는 Client Component는 조금 다릅니다.

마치 Server Component / Dynamic Rendering 처럼 동작합니다.

#### 1. HTML 요청

서버에서 경로에 맞는 HTML을 렌더링 합니다.

이후 서버에서 렌더링 된 HTML을 제공 받습니다.

#### 2. Client Component 관련 번들 요청

마찬가지로 Client Component가 필요한 영역을 hydrate합니다.

## 사용자 경험(UX) 측면 분석

### SPA 문제점

- 기존의 SPA는 비어있는 HTML 때문에 검색 엔진의 크롤링에 불리합니다. 대부분의 크롤러는 JS를 실행하지 않기 때문입니다.

- 처음 페이지를 로드한다면 비어있는 HTML을 마주하는 것은 불가피합니다.

### 개선

static HTML 또는 server-side render를 활용하면 어느정도 렌더링 된 HTML을 제공받을 수 있습니다.

- 검색엔진의 크롤링에 더 유리합니다.

- 첫 페이지 로드에도 빈 화면을 보지 않습니다.

## 성능 측정 및 비교

### lighthouse

NextJS 앱이 성능과 SEO 점수가 더 높았습니다.

| SPA                                                                                                                            | NextJS/App Router                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| <img width="200" src="https://github.com/woowacourse/frontend-rendering/assets/54442420/4b49515a-614a-4c54-b7aa-574572229d6e"> | <img width="190" src="https://github.com/woowacourse/frontend-rendering/assets/54442420/bacaf87e-5f82-4bba-b169-e725094c6531"> |

### 네트워크 탭의 스크린 샷

빠른 3G 기준 첫 페이지를 보기까지

- SPA는 2.67 초가 걸렸습니다.
- NextJS 앱은 1.47초가 걸렸습니다.

| SPA                                                                                                                            | NextJS/App Router                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| <img width="200" src="https://github.com/woowacourse/frontend-rendering/assets/54442420/41543c4f-2758-4d9b-afed-7dfa193d4956"> | <img width="110" src="https://github.com/woowacourse/frontend-rendering/assets/54442420/df4b232e-8dbf-4a28-91cf-337f04f54cab"> |
