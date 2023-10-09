import { Fragment } from 'react';
import { styled } from 'styled-components';

import Box from '../common/Box';
import Flex from '../common/Flex';
import Space from '../common/Space';
import Text from '../common/Text';
import TopicCard from '../TopicCard';
import { Topic } from '@/types/topic';

interface TopicCardContainerProps {
  topics: Topic[]; 
  containerTitle: string;
  containerDescription: string;
}

async function TopicCardContainer({ topics, containerTitle, containerDescription }: TopicCardContainerProps) {
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
