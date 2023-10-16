import Layout from '@/components/common/Layout';

import ToggleSwitch from '@/components/common/ToggleSwitch';

import * as S from '@/styles/rankingStyle';

import firstRankIcon from '@/assets/first-rank.webp';
import secondRankIcon from '@/assets/second-rank.webp';
import thirdRankIcon from '@/assets/third-rank.webp';

import Image, { StaticImageData } from 'next/image';
import { getPassionUserRanking } from '@/api/ranking';
import { PassionUserRanking } from '@/types/ranking';
import Seo from '@/components/Seo';
import { use } from 'react';

const columnNameList = ['등수', '닉네임', '작성글 수', '투표 수', '점수'];

const rankIconUrl: Record<number, StaticImageData> = {
  1: firstRankIcon,
  2: secondRankIcon,
  3: thirdRankIcon,
};

let selectedButton = '열정 유저';

export default function RankingPage() {
  const rankerList: PassionUserRanking[] = use(getPassionUserRanking());

  const firstButton = {
    text: '열정 유저',
    event: async () => {
      'use server';
    },
  };
  const secondButton = {
    text: '인기글 유저',
    event: async () => {
      'use server';
    },
  };

  return (
    <>
      <Seo title='랭킹' />
      <Layout isSidebarVisible>
        <S.Container>
          <S.PageHeader>🏆 랭킹 🏆</S.PageHeader>
          <S.ContentContainer>
            <ToggleSwitch
              size='md'
              selectedButton={selectedButton}
              firstButton={firstButton}
              secondButton={secondButton}
            />
            {selectedButton === '열정 유저' && (
              <S.Background>
                <S.Table>
                  <thead>
                    <S.Tr>
                      {columnNameList.map((text) => (
                        <S.Th key={text}>{text}</S.Th>
                      ))}
                    </S.Tr>
                  </thead>
                  <S.Tbody>
                    {rankerList &&
                      new Array(10).fill(0).map((_, index) => {
                        const ranker = rankerList[index] ?? {
                          ranking: '',
                          nickname: '',
                          postCount: '',
                          voteCount: '',
                          score: '',
                        };

                        const rankIcon = rankIconUrl[ranker.ranking] && (
                          <Image
                            src={rankIconUrl[ranker.ranking]}
                            alt={ranker.ranking.toString()}
                          />
                        );

                        return (
                          <S.Tr key={index}>
                            <S.RankingTd>
                              {rankIcon ?? ranker.ranking}
                            </S.RankingTd>
                            <S.Td>{ranker.nickname}</S.Td>
                            <S.Td>{ranker.postCount}</S.Td>
                            <S.Td>{ranker.voteCount}</S.Td>
                            <S.Td>{ranker.score}</S.Td>
                          </S.Tr>
                        );
                      })}
                  </S.Tbody>
                </S.Table>
              </S.Background>
            )}
            {selectedButton === '인기글 유저' && (
              <S.Background>인기글 랭킹입니다.</S.Background>
            )}
          </S.ContentContainer>
        </S.Container>
      </Layout>
    </>
  );
}
