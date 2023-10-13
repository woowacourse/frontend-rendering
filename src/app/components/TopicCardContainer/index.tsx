import { Fragment } from 'react';
import { getTopics } from '@/apis/topics';
import Box from '../common/Box';
import Flex from '../common/Flex';
import Space from '../common/Space';
import Text from '../common/Text';
import TopicCard from '../TopicCard';
import * as S from './TopicCardContainer.style';

interface TopicCardContainerProps {
  containerTitle: string;
  containerDescription: string;
}

async function TopicCardContainer({ containerTitle, containerDescription }: TopicCardContainerProps) {
  const topics = await getTopics();

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

        <S.PointerText color="primary" $fontSize="small" $fontWeight="normal" tabIndex={0}>
          전체 보기
        </S.PointerText>
      </Flex>

      <Space size={4} />

      <S.TopicsWrapper>
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
      </S.TopicsWrapper>
    </section>
  );
}

export default TopicCardContainer;
