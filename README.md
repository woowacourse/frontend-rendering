# 🧐 2단계 - 렌더링 방식의 분석

## ✅ 체크리스트

### 렌더링 시점 비교

- [x] SPA와 본인이 선택한 렌더링 방식(SSR, SSG, ISR) 중 본인이 선택한 방식간의 렌더링 시점에 어떤 일이 벌어지는지 설명 (그림 또는 다이어그램 활용도 좋습니다)

SPA : 초기에 클라이언트측에서 html, css, 자바스크립트 번들을 다운로드 받은 후 페이지 이동 시에는 다운받은 자바스크립트 코드로 동적으로 화면을 그려준다. 자바스크립트 용량이 클 수록 초기 렌더링 속도는 느려진다. 그리고 SPA는 CSS를 동적으로 그려주는 경우도 많기 때문에 CSS 코드의 용량도 자바스크립트 안에 포함되어 있어 초기 렌더링에 영향을 줄 수 있다.

SSR : 매번 변하는 데이터가 있을 때 서버에서 패치해와서 그려준 HTML과 CSS를 주고, 클라이언트 컴포넌트에 사용되는 javascript 파일을 다운받아 사용자에게 보여줍니다. 미리 서버에서 그려준 뒤 보내주기 때문에 자바스크립트 용량을 줄일 수 있고, 사이트의 모든 페이지에서 필요한 파일이 아닌 해당 페이지가 필요한 파일만 보내줘서 초기 렌더링 속도를 빠르게 보여줄 수 있습니다. 하지만 단점으로는 페이지를 이동할때마다 자원을 다운로드받기 때문에 유저가 사용할 때 깜빡거리는 화면을 볼 수 있습니다.

ISR : 일정 주기적으로 변하는 데이터가 있을 때 사용하는 렌더링 방식입니다. 렌더링 횟수를 줄여서 서버의 부하를 줄일 수 있다는 장점이 있습니다.

SSG: 데이터가 변하지 않는 페이지일 때 빌드 시 만들어진 HTML, CSS, Javascript를 고정적으로 반환합니다. 서버의 부하를 줄일 수 있고, 따로 서버와의 통신이 필요하지 않아서 서버의 부하를 최대로 줄일 수 있다는 장점이 있습니다.

<img width="1294" alt="image" src="https://github.com/woowacourse/frontend-rendering/assets/80146176/9e420b16-476a-45bf-abd7-59216c8b643c">

<img width="1257" alt="image" src="https://github.com/woowacourse/frontend-rendering/assets/80146176/67fb920a-3541-4ed7-beea-420c29f03c4a">

### 사용자 경험(UX) 측면 분석

- [x] 각 렌더링 방식이 사용자 경험에 어떻게 영향을 미치는지 설명

SPA: 초기 렌더링 속도가 상대적으로 느립니다. 대신 유저가 페이지 이동을 할 때 로딩이 필요 없기에 빠르다라는 느낌을 줄 수 있습니다.

SSR, ISR, SSG : 초기 렌더링 속도가 SPA에 비해 빠른편이지만, 단점으로는 페이지 이동 시 깜빡거리는 현상이 있습니다

### 성능 측정 및 비교

- [x] SPA와 본인이 선택한 렌더링 방식(SSR, SSG, ISR)의 성능을 측정하고 비교 (사용한 측정 도구나 방법을 명시)

#### FCP

SSR과 SPA 두 개를 비교한 결과 FCP (페이지 로드가 시작된 시점부터 페이지 콘텐츠의 일부가 화면에 렌더링되는 시점까지의 시간)은 동일했습니다

#### LCP

LCP(페이지가 처음 로드하기 시작한 시점을 기준으로 표시 영역 내에 표시되는 가장 큰 이미지 또는 텍스트 블록의 렌더링 시간)는 차이가 있었는데 SSR은 0.5초인 반면, SPA는 1.6초였습니다. 두 개의 방법에 따라 차이가 나게 된 이유는 SSR은 HTML을 서버에서 그려줘서 HTML을 다운받고 보여주면 되지만, SPA의 경우에는 자바스크립트를 다운받고, 실행하여 HTML을 그린 후 콘텐츠를 보여줘야 하기에 시간이 더 걸린 것으로 생각듭니다.

#### TBT

또 하나의 차이점으로는 TBT(total blocking time, 입력 응답을 방지하기에 충분한 시간 동안 기본 스레드가 차단된 콘텐츠가 포함된 첫 페인트 (FCP)와 상호작용 시작 시간 (TTI) 사이의 총 시간)의 지표가 달랐는데요. SPA의 경우 0.05초, SSR의 경우 0초였습니다. 이 또한 SSR은 HTML을 바로 받고, SPA는 자바스크립트를 다운로드하고 실행해야 하기에 시간 차이가 난 것으로 생각이 듭니다

### SSR로 만든 페이지

<img width="1439" alt="image" src="https://github.com/woowacourse/frontend-rendering/assets/80146176/7f2a1c71-7de0-4239-af5e-5d1ed2d09975">

### SPA로 만든 페이지

<img width="1439" alt="image" src="https://github.com/woowacourse/frontend-rendering/assets/80146176/8b35ed13-1c63-4784-8c84-6c41f16e8a44">
