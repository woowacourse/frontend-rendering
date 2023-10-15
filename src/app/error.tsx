"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  const resetHandler = () => {
    reset();
  };

  return (
    <div>
      <h1>Something went wrong!</h1>
      <div>
        <p>{error.message}</p>
      </div>
      <button onClick={resetHandler}>다시 시도하기</button>
    </div>
  );
}
