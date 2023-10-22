'use client';
import { getMemberInfo } from 'apis/member';
import { useMember } from 'hooks/queries/useMember';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const MyPage = () => {
  const [name, setName] = useState('');
  // const { isLoading, name } = useMember();

  useEffect(() => {
    const getMember = async () => {
      const member = await getMemberInfo();
      setName(member.name);
    };
    getMember();
  }, []);

  return (
    <S.Section>
      <S.Header>
        <S.Title>마이 페이지</S.Title>
      </S.Header>
      <S.Container>
        <h1>{name}</h1>
      </S.Container>
    </S.Section>
  );
};

export default MyPage;

const S = {
  Section: styled.section`
    width: 100vw;
    height: 100vh;
  `,

  Header: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
  `,

  Title: styled.h1`
    display: flex;
    align-items: center;
    height: 10rem;
    font-size: 3.2rem;
  `,

  Container: styled.div`
    display: flex;
    width: 100%;
    height: calc(100% - 12rem);
    border-top: 1px solid ${({ theme }) => theme.color.gray5};
  `,

  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8rem;
    width: 70%;
    padding: 4rem;
    font-size: 1.2rem;
  `,
};
