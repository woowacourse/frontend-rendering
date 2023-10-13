import Flex from '../common/Flex';
import Space from '../common/Space';
import * as S from './TopicCard.style';

function TopicCardSkeleton() {
  return (
    <Flex $flexDirection="row">
      <S.SkeletonImg />
      <Space size={2} />
      <Flex $flexDirection="column">
        <S.SkeletonTitle />
        <Space size={5} />
        <S.SkeletonDescription />
      </Flex>
    </Flex>
  );
}

export default TopicCardSkeleton;
