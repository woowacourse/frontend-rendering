import { styled } from 'styled-components';

import Image from 'next/image';
import Box from '../common/Box';
import Flex from '../common/Flex';
import ImageCommon from '../common/Image';
import Space from '../common/Space';
import Text from '../common/Text';
import { Topic } from '@/types/Topic';

type TopicCardProps = Omit<Topic, 'id'>;

function TopicCard({ image, creator, name, updatedAt, pinCount, bookmarkCount }: TopicCardProps) {
  return (
    <Wrapper>
      <Flex position="relative" tabIndex={0} role="button">
        <ImageCommon height="138px" width="138px" src={image} alt="사진 이미지" $objectFit="cover" />

        <Box width="192px" padding={1}>
          <Box height="52px">
            <Text color="black" $fontSize="default" $fontWeight="bold" aria-label={`토픽 이름 ${name}`}>
              {name}
            </Text>
          </Box>

          <Text color="black" $fontSize="small" $fontWeight="normal" aria-label={`작성자 ${creator}`}>
            {creator}
          </Text>

          <Space size={0} />

          <Text color="gray" $fontSize="small" $fontWeight="normal">
            {updatedAt.split('T')[0].replaceAll('-', '.')} 업데이트
          </Text>

          <Space size={0} />

          <Flex>
            <Flex $alignItems="center" width="64px">
              <Image src="/smallTopicPin.svg" alt="핀 이미지" width={11} height={16} />
              <Space size={0} />
              <Text color="black" $fontSize="extraSmall" $fontWeight="normal" aria-label={`핀 갯수 ${pinCount}개`}>
                {pinCount > 999 ? '+999' : pinCount}개
              </Text>
            </Flex>
            <Flex $alignItems="center" width="64px">
              <Image src="/smallTopicStar.svg" alt="즐겨찾기 이미지" width={18} height={16} />
              <Space size={0} />
              <Text
                color="black"
                $fontSize="extraSmall"
                $fontWeight="normal"
                aria-label={`즐겨찾기 ${bookmarkCount}명`}
              >
                {bookmarkCount > 999 ? '+999' : bookmarkCount}명
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  width: 332px;
  height: 140px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: ${({ theme }) => theme.radius.small};
`;

const TopicImage = styled(Image)`
  border-radius: ${({ theme }) => theme.radius.small};
`;

export default TopicCard;
