import { Fragment, useEffect, useState } from 'react';
import { styled } from 'styled-components';

import Box from '../common/Box';
import Flex from '../common/Flex';
import Space from '../common/Space';
import Text from '../common/Text';
import TopicCard from '../TopicCard';
import { getTopics } from '@/apis/topics';

export interface TopicCardProps {
  id: number;
  name: string;
  image: string;
  creator: string;
  pinCount: number;
  bookmarkCount: number;
  updatedAt: string;
}

export interface GetMyTopics {
  myTopics: TopicCardProps[];
}

interface TopicCardContainerProps {
  url: string;
  containerTitle: string;
  containerDescription: string;
}

function TopicCardContainer({ url, containerTitle, containerDescription }: TopicCardContainerProps) {
  const [topics, setTopics] = useState<TopicCardProps[] | null>(null);

  useEffect(() => {
    getTopics().then(res => {
      if (res !== topics) { 
        setTopics(res);
      }
    });
  }, []);

  return (
    <section>
      <Flex $justifyContent="space-between" $alignItems="flex-end">
        <Box>
          <Text color="black" $fontSize="extraLarge" $fontWeight="bold" tabIndex={0}>
            {containerTitle}
          </Text>
          <Space size={0} />
          <Text color="gray" $fontSize="default" $fontWeight="normal" tabIndex={0}>
            {containerDescription}
          </Text>
        </Box>

        <PointerText color="primary" $fontSize="small" $fontWeight="normal" tabIndex={0}>
          전체 보기
        </PointerText>
      </Flex>

      <Space size={4} />

      <TopicsWrapper>
        {topics &&
          topics.map(
            (topic, index) =>
              index < 6 && (
                <Fragment key={topic.id}>
                  <TopicCard
                    image={topic.image}
                    name={topic.name}
                    creator={topic.creator}
                    updatedAt={topic.updatedAt}
                    pinCount={topic.pinCount}
                    bookmarkCount={topic.bookmarkCount}
                  />
                </Fragment>
              )
          )}
      </TopicsWrapper>
    </section>
  );
}

const PointerText = styled(Text)`
  cursor: pointer;
`;

const TopicsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export default TopicCardContainer;
