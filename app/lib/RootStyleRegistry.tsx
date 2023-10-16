'use client';

import React from 'react';
import { useServerInsertedHTML } from 'next/navigation';

import { useStyledComponentsRegistry } from './styled-components';

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();

  useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>);

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
