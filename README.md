<p align="middle" >
  <img width="100px;" src="https://em-content.zobj.net/thumbs/160/apple/81/artist-palette_1f3a8.png"/>
</p>
<h2 align="middle">프론트엔드의 렌더링 방식</h2>
<p align="middle">내 서비스의 클론 코딩을 통해 프론트엔드 렌더링 방식 이해하기</p>
<br/>

![프론트엔드렌더링_미션_실행화면](https://github.com/woowacourse/frontend-rendering/assets/24777828/27946ad7-ff4e-4adc-8d7d-ff27629a4b04)

## 👀 클론 페이지 vs 원본 페이지

https://github.com/woowacourse/frontend-rendering/assets/24777828/4ce82a7f-722a-49f9-9036-04f30c44eb24

# 🎨 1단계 - 팀 서비스의 일부 페이지 클론 코딩

### 🚀 구현한 페이지의 주소와 방식

- 주소: [집사의고민 클론 페이지](https://frontend-rendering-kappa.vercel.app/)
- 렌더링 방식: SSG(Static Site Generation)

### ✅ SSG 렌더링 방식을 선택한 이유

이번 미션에서 클론 코딩한 페이지는 [집사의고민](https://zipgo.pet)의 메인페이지입니다.

사용자가 웹사이트를 처음 방문할 때 가장 먼저 보게 되는 중요한 페이지이기 때문에 선택했습니다.

메인페이지에서는 사료 목록을 확인할 수 있는데, 이 데이터는 변경이 거의 없기 때문에 SSG 렌더링 방식이 적합하다고 판단했습니다.

SSG방식은 프로젝트 빌드 시 미리 페이지를 사전에 렌더링하여 생성합니다. 이 페이지를 만들 때 필요한 데이터 또한 빌드 시점에 가져오게 됩니다.(fetching과정이 클라이언트 측 요청 시가 아니라 빌드 시 실행)

즉, 해당 페이지에 대한 요청이 발생했을 때 페이지를 동적으로 생성하는 게 아니라 이미 생성된 페이지를 정적으로 반환하는 형태로 동작합니다. 따라서 사용자들은 페이지 로딩 시 로딩 아이콘이 깜빡이는 현상 없이 더 빠르게 응답을 받을 수 있습니다.

# 🧐 2단계 - 렌더링 방식의 분석

### 렌더링 시점 비교(SPA vs SSG)

SPA는 클라이언트 측에서 초기 페이지 로딩(HTML, CSS, JavaScript 파일 로드) 후 필요한 데이터를 동적으로 가져와서 페이지를 업데이트하는 방식입니다.
반면, SSG는 프로젝트 빌드 시에 필요한 데이터를 가져와 페이지를 미리 렌더링합니다.

![Caching](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fcaching-overview.png&w=3840&q=75&dpl=dpl_2JVoZFRQV69MRwpAbmigV2nCkqKN)

Next.js의 서버 컴포넌트 Static Rendering에 대해 더 자세히 살펴보겠습니다.
React는 서버 컴포넌트를 RSC페이로드라는 특수한 데이터 형식으로 렌더링하며, Next.js는 RSC페이로드와 클라이언트 컴포넌트의 JavaScript 명령어를 사용하여 서버에서 HTML을 생성합니다.
이때, 렌더링 결과로 나오는 RSC 페이로드 및 HTML은 Full Route Cache(in Server)에 저장됩니다.
빌드 시점에 가져온 데이터 또한 Data Cache(in Server)에 저장됩니다.

클라이언트 측에서 해당 경로에 대해 처음 요청을 보내면 Router Cache(in Client)에는 RSC Payload가 없으므로 서버의 Full Router Cache에 접근합니다. 이로써 빌드 시점에 캐싱해둔 페이지를 가져와 사용자에게 빠르게 보여줍니다.

### 사용자 경험(UX) 측면 분석

SPA의 경우, 사용자가 첫 화면을 보기까지 초기 로딩 시간 동안 기다려야 합니다.
이에 반해, SSG의 경우 사전에 페이지를 미리 렌더링하여 반환하므로 사용자는 더 빠르게 첫 화면을 볼 수 있습니다.
초기 렌더링 속도는 사용자 경험에 가장 큰 영향을 미치기 때문에 가능한 한 Static Rendering방식을 사용하는 것이 좋다고 생각합니다.
빠른 초기 렌더링은 좋은 사용자 경험을 제공하며, 이에 따라 사용자 이탈률을 낮추고 사용자를 더 오래 유지할 수 있을 것으로 기대됩니다.
