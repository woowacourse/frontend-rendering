'use client';

import Link from 'next/link';

export default function Error() {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <Link href="/">Try again</Link>
    </div>
  );
}
