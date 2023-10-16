import { PropsWithChildren } from 'react';
import Header from '../Header/Header';
import styled from './HomeTemplate.module.css';

const HomeTemplate = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className={styled.infoContainer}>{children}</div>
    </>
  );
};

export default HomeTemplate;
