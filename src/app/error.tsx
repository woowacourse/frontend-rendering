'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error?: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleClickButton = () => {
    reset();
  };

  return (
    <div>
      <h2>에러가 발생했습니다!</h2>
      <button onClick={handleClickButton}>다시 시도</button>
    </div>
  );
}
