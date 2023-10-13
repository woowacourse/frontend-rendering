"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>예상치 못한 오류가 발생하였습니다.</h2>
        <span>오류 메시지: {error.message}</span>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
