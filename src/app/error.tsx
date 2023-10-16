'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>에러가 발생했습니다.</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>다시 시도하기</button>
    </div>
  );
}
