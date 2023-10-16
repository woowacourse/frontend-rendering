import Header from '@/components/common/Header/Header';
import type { PropsWithChildren } from 'react';
import { contentsContainer, layout } from './recordLayout.css';

const RecordLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={layout}>
      <Header />
      <div className={contentsContainer}>{children}</div>
    </div>
  );
};

export default RecordLayout;
