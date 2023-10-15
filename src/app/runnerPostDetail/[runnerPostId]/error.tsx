'use client';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div>
      <h2>게시물을 불러오지 못했습니다. {error.message}</h2>
      <button onClick={() => reset()}>다시 시도</button>
    </div>
  );
}
