## 🎯 2단계 - 렌더링 방식 탐구 및 비교 분석

### 렌더링 방식 비교

- SPA (Single Page Application)
  - 특징: 페이지 로딩 시에 모든 리소스를 불러와 앱이 하나의 페이지에서 동작.
  - 동작 방식: 클라이언트 측에서 라우팅을 담당하며, 초기에 필요한 리소스를 로드한 후에는 서버와의 통신이 최소화됨.
  - 장점: 빠른 페이지 전환, 부드러운 사용자 경험.
  - 단점: 초기 로딩 시에 모든 리소스를 다운로드해야 하므로 초기 로딩 속도가 느릴 수 있음. 검색 엔진 최적화(SEO)에 불리할 수 있음.
- SSR (Server-Side Rendering)
  - 특징: 각 페이지 요청마다 서버에서 페이지를 렌더링한 후에 클라이언트에 전달.
  - 동작 방식: 서버에서 페이지를 완전히 렌더링한 후에 클라이언트에게 전달되므로 초기 로딩 속도가 개선됨.
  - 장점: 초기 로딩 속도 개선, 검색 엔진 최적화(SEO) 용이.
  - 단점: 서버 리소스가 많이 사용되고, 페이지 이동 시 서버에 요청을 보내야 함.
- SSG (Static Site Generation)
  - 특징: 사전에 페이지를 미리 렌더링하고 정적 파일로 생성한 후에 배포.
  - 동작 방식: 빌드 시에 모든 페이지를 렌더링하여 정적 파일로 저장하므로 서버 부하가 거의 없음.
  - 장점: 빠른 초기 로딩 속도, 서버 부하 감소, CDN 캐싱 가능.
  - 단점: 동적인 콘텐츠 업데이트에는 추가적인 빌드가 필요.
- ISR (Incremental Static Regeneration)
  - 특징: 정적 파일로 미리 렌더링하되, 일부 페이지는 동적으로 업데이트 가능.
  - 동작 방식: 일정 주기마다 정적 파일을 재생성하여 갱신된 콘텐츠를 반영. 동시에 정적 파일은 유지됨.
  - 장점: 정적 파일의 장점을 유지하면서 일부 페이지를 동적으로 업데이트 가능.
  - 단점: 일부 페이지가 갱신되는 동안에는 이전 콘텐츠를 보여주게 될 수 있음.

### 바톤의 SPA & SSR

SPA - 메인 페이지

<img width="600" alt="image" src="https://github.com/guridaek/frontend-rendering/assets/116625502/d9749dfd-9ac3-4f0a-9b79-f506c48da023">

SSR - 메인 페이지

<img width="600" alt="image" src="https://github.com/guridaek/frontend-rendering/assets/116625502/33a66f9d-e15b-427a-9b19-45db1ec768d1">

SPA - 상세 페이지

<img width="600" alt="image" src="https://github.com/guridaek/frontend-rendering/assets/116625502/4886f535-4373-4e1a-a64c-59ef68b49860">

SSR - 상세 페이지

<img width="600" alt="image" src="https://github.com/guridaek/frontend-rendering/assets/116625502/049cc563-d06a-422f-ae78-c043f8554bef">

클라이언트에서 렌더링을 진행하는 SPA에 비해, 서버에서 렌더링된 페이지를 불러오는 SSR 방식이 LCP가 빠른 것을 확인할 수 있었습니다.

하지만 렌더링되는 데이터가 완전히 같지 않고, 배포 환경을 고려하면 정확한 비교는 어려울 것 같습니다.
