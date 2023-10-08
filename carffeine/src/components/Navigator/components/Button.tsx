'use client';

import { useState } from 'react';

export default function Button() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button onClick={() => setIsClicked((prev) => !prev)}>
      {isClicked ? 'isClicked: true' : 'isClicked: false'}
    </button>
  );
}
