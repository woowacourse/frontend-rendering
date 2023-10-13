"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>예상치 못한 에러가 발생했습니다.</h2>
      <button onClick={() => reset()}>다시 시작</button>
    </div>
  );
}
