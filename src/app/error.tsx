'use client';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div>
      <h2>오류가 발생했습니다! {error.message}</h2>
      <button onClick={() => reset()}>다시 시도</button>
    </div>
  );
}
