# 렌더링 탐구 및 비교 분석

## 렌더링 방식

### CSR (Client Side Rendering)

- 렌더링 주체가 클라이언트 (브라우저) 인 방식
- 최초 페이지 로딩이 오래걸리지만 로딩 이후 좋은 UX 제공 가능
- SPA (Single Page Application)
- SEO 최적화가 어려움
- 서버 부하가 적음

### SSR (Server Side Rendering)

- 렌더링 주체가 서버인 방식
- 최초 페이지 로딩이 CSR에 비해 상대적으로 빠르지만 플리커링 발생
- MPA (Multi Page Application)
- SEO 최적화에 장점이 있음
- 서버 부하가 많음

### SSG (Static Site Generation)

- 정적 HTML 파일을 빌드 시점에서 생성하여 제공하는 방식
- 초기 페이지 로딩 속도가 매우 빠름
- 캐싱하여 제공할 수 있으므로 CDN 사용시 효율이 극대화 됨
- 변경사항이 발생한 경우 빌드부터 다시 해야함

### ISR (Incremental Static Regeneration)

- SSG 방식과 정적 파일을 제공하는 것은 동일하되 데이터를 주기적으로 갱신함
- 초기 페이지 로딩 속도가 일정 시간 동안 매우 빠름을 보장함 (캐싱)
- 일정 시간이 지나면 동적 데이터를 갱신하므로 SSG의 단점을 보완할 수 있음

## 괜찮을지도 렌더링 방식 비교

### CSR 방식의 괜찮을지도 메인 페이지 (현재 방식)

#### 최초 로딩 시

![](https://velog.velcdn.com/images/semnil5202/post/6793ea4b-ed9d-4c11-aab3-0fe2ec83b2de/image.png)

![](https://velog.velcdn.com/images/semnil5202/post/6ec4aacd-7d3a-4c5e-8b36-78071df3f019/image.png)

#### 이후 로딩 시 (disk 캐싱, 일부는 memory 캐싱 됨)

![](https://velog.velcdn.com/images/semnil5202/post/3e14ddd2-f0c0-4518-97f4-0e3622e8be27/image.png)

- 최초 로딩 시에 모든 데이터를 한 번에 받아와 브라우저에서 렌더링함
- 이후 로딩 시에는 캐싱 (disk, memory 방식) 된 데이터로 불러옴
- preview 에서도 볼 수 있듯이 최초에는 빈 파일이므로 SEO에 불리한 조건

### SSG 방식의 괜찮을지도 메인 페이지 (미션 방식)

#### 최초 로딩 시

![](https://velog.velcdn.com/images/semnil5202/post/50bc58e6-51fb-43ef-a1b7-c9341519ad89/image.png)

![](https://velog.velcdn.com/images/semnil5202/post/ca025d4e-0e49-4a08-b7a4-0d43a51e55b3/image.png)

#### 이후 로딩 시 (memory 캐싱 됨)

![](https://velog.velcdn.com/images/semnil5202/post/dd765974-e48b-4137-9aa4-2fc359ae4d73/image.png)

- 최초 로딩 시에 서버에서 빌드하여 내려주는 정적 파일을 받아와 브라우저에서 표현함
- 이후 로딩 시에는 캐싱 (memory 방식) 된 파일을 받아옴
- preview 에서 데이터를 확인할 수 있어 SEO 최적화에 장점

## 성능 측정

### CSR 방식의 괜찮을지도 메인 페이지 성능 측정

![](https://velog.velcdn.com/images/semnil5202/post/b29e439b-04c2-4769-8d8e-d06251cd23ab/image.png)

### SSG 방식의 괜찮을지도 메인 페이지 성능 측정

![](https://velog.velcdn.com/images/semnil5202/post/7976d81d-4604-47d4-8359-163e9ccac9ed/image.png)

### 비교 결론

메인 페이지는 NEXT JS 프레임워크를 이용하여 SSG 방식이 초기 로딩속도 및 LCP, SEO 개선에 상당한 장점을 가져다 줄 것으로 기대됩니다. 하지만 메인페이지에서 상호작용 요소가 발생할 경우 SSR 방식으로 진행하게 될텐데 이는 서버에 지나친 과부화 및 플리커링을 발생할 가능성이 있어 오히려 사용자 경험을 반감시킬 수도 있겠습니다.

따라서 **ISR 방식**으로 일정 시간 동안 캐싱을 유지하다가 갱신하는 것이 효율을 극대화할 수 있을 것으로 생각합니다.

![](https://velog.velcdn.com/images/semnil5202/post/503dd5c2-9c4d-49d5-8dca-2eb748c310bb/image.png)

따라서 위와 같이 기본적으로 ISR 방식을 사용하고 Server Component를 적극적으로 사용하되 사용자와 상호작용을 하는 부분을 말단으로 하고 Client Component로 지정합니다. 데이터를 갱신할 때 다음 두 가지 방법을 사용해볼 수 있을 것 같습니다.

#### [Time-based Revalidation](https://nextjs.org/docs/app/building-your-application/caching#time-based-revalidation)

```js
fetch('https://mapbefine.kro.kr/api', { next: { revalidate: 600000 } }); // 10분간 캐시
```

- 시간 단위를 명시하여 일정 시간동안 캐시된 데이터를 사용하고, 갱신하여 사용자에게 최신화된 데이터를 보여줍니다.

#### [On-demand Revalidation](https://nextjs.org/docs/app/building-your-application/caching#on-demand-revalidation)

```js
// revalidatePath 방식
revalidatePath('/');

// revalidateTag 방식
fetch(`https://mapbefine.kro.kr/api`, { next: { tags: ['a', 'b', 'c'] } });

revalidateTag('a');
```

- revalidatePath 메서드를 호출하면 데이터 캐시의 유효성이 다시 검사되고, 결과적으로 전체 경로 캐시가 무효화됩니다.
- revalidateTag를 호출하여 해당 태그와 연결된 캐시 항목을 제거할 수 있습니다.

모아보기 버튼 및 즐겨찾기 버튼을 눌렀을 때만 캐싱을 초기화하는 정책을 세울 경우 revalidateTag 방식이, 버튼을 눌러도 일정 시간이 경과한 이후에 캐싱을 갱신하는 정책을 세울 경우 time-base revalidation 방식이 적합할 것으로 생각됩니다.
