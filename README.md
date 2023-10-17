## 🔵 동글 서비스의 렌더링 방식 분석 리포트

### 🎨 렌더링 시점 비교

- CSR

  <img width="514" alt="image" src="https://github.com/woowacourse/frontend-rendering/assets/57815133/dfa53cc8-2f1c-4a9b-bc08-4e018a5a1d03">

  이미지 출처: https://d2.naver.com/helloworld/7804182

  클라이언트 측에서 렌더링을 수행합니다. SPA는 초기 요청 시 HTML, JavaScript 및 CSS 파일을 다운로드하고, 그 이후에는 서버에서 데이터만 가져와서 동적으로 콘텐츠를 업데이트합니다.

  SPA에서 렌더링은 사용자가 페이지를 요청할 때 발생하며, JavaScript 코드에 의해 관리됩니다.

  렌더링은 브라우저에서 이루어지고, 콘텐츠의 업데이트는 서버로부터 데이터를 비동기적으로 가져와서 변경하는 방식입니다.

<br/>

- SSG

    <img width="479" alt="image" src="https://github.com/woowacourse/frontend-rendering/assets/57815133/455e02d6-593b-43c4-81d5-90b3673ee9e8">
    
    이미지 출처: https://d2.naver.com/helloworld/7804182

  SSG는 사전에 페이지의 HTML을 생성하여 서버로 배포합니다. 이렇게 생성된 HTML은 정적 파일로 저장되며, 클라이언트 요청 시에 서버에서 직접 전달됩니다.

  이는 빠른 초기 로딩 속도와 안정성을 제공하며, 서버 부하를 줄일 수 있습니다.

  렌더링은 빌드 시에 수행되며, 클라이언트 요청 시에는 서버가 단순히 정적 파일을 제공합니다.

    <br/>

### 👥 사용자 경험(UX) 측면 분석

- CSR

<img width="531" alt="image" src="https://github.com/woowacourse/frontend-rendering/assets/57815133/ca9d06c7-5a89-4a16-ad9a-e8219d920367">

인터넷이 느린 환경에서 테스트 해봤을 때 약 1초 동안 사용자는 흰 화면을 보게 됩니다.

초기 로딩 속도의 저하는 사용자의 이탈률을 늘릴 수 있습니다.

- SSG

<img width="321" alt="image" src="https://github.com/woowacourse/frontend-rendering/assets/57815133/214697c7-a1d9-4e34-a82a-c4954609c285">

서버에서 렌더링해서 보여주기 때문에 사용자는 흰 화면을 보지 않습니다.

초기 로딩 속도가 더 빠르고 사용자 경험에 도움을 줄 수 있습니다.

<br/>

### 🔋 **성능 측정 및 비교**

`lighthouse` 를 이용해서 성능 측정을 해보았습니다.

- 기존 동글 페이지

<img width="524" alt="image" src="https://github.com/woowacourse/frontend-rendering/assets/57815133/9ba2f6d4-d362-43f8-85f1-d9cfec42d1a7">

- SSG

<img width="520" alt="image" src="https://github.com/woowacourse/frontend-rendering/assets/57815133/5e933ba7-7806-4e7f-ac3f-7736689ef472">

Treemap을 보면 알 수 있듯이 서버에서 렌더링해서 보여주기 때문에 FCP `1.1s` 에서 `0.3s` 까지 개선된 것을 볼 수 있습니다.

또한 메타데이터 설정으로 인해서 SEO 점수도 크게 상승하였습니다.

`next/image`의 `Image`를 이용할 때 alt 속성이 필수이기 때문에 접근성 점수도 덩달아서 높아졌네요.
