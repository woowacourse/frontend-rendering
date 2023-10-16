import * as S from './TeamCalendarDecoration.styled';
import Text from '../common/Text/Text';
import Image from 'next/image';

interface TeamCalendarDecorationProps {
  animation?: boolean;
}

const TeamCalendarDecoration = (props: TeamCalendarDecorationProps) => {
  const { animation = true } = props;

  return (
    <S.Container>
      <S.SampleBadge />
      <S.CalendarHeaderContainer>
        <Image width={32} height={32} src="/images/arrow-left.svg" alt="" />
        <Text as="p" css={S.calendarHeaderText}>
          2023-11
        </Text>
        <Image width={32} height={32} src="/images/arrow-right.svg" alt="" />
      </S.CalendarHeaderContainer>
      <S.CalendarContainer>
        <S.CalendarTable>
          {Array.from({ length: 42 }).map((_, index) => (
            <S.CalendarCell key={index} />
          ))}
        </S.CalendarTable>
        <S.SampleCalendarBarContainer>
          <S.SampleCalendarBar
            row={0}
            column={0}
            length={4}
            level={0}
            roundedStart={true}
            roundedEnd={true}
            color="#193ecb"
          />
          <S.SampleCalendarBar
            row={0}
            column={2}
            length={4}
            level={1}
            roundedStart={true}
            roundedEnd={true}
            color="#7c25ff"
          />
          <S.SampleCalendarBar
            row={2}
            column={2}
            length={5}
            level={0}
            roundedStart={true}
            roundedEnd={false}
            color="#2546ff"
          />
          <S.SampleCalendarBar
            row={3}
            column={0}
            length={7}
            level={0}
            roundedStart={false}
            roundedEnd={false}
            color="#2546ff"
          />
          <S.SampleCalendarBar
            row={4}
            column={0}
            length={3}
            level={0}
            roundedStart={false}
            roundedEnd={true}
            color="#2546ff"
          />
          <S.SampleCalendarBar
            row={3}
            column={1}
            length={5}
            level={1}
            roundedStart={true}
            roundedEnd={true}
            color="#2596ff"
          />
          <S.SampleCalendarBar
            row={5}
            column={4}
            length={3}
            level={0}
            roundedStart={true}
            roundedEnd={false}
            color="#2cbeeb"
          />
        </S.SampleCalendarBarContainer>
      </S.CalendarContainer>
      <S.MousePointer
        src="/images/mouse-pointer.png"
        width={40}
        height={50}
        animation={animation}
        alt=""
      />
    </S.Container>
  );
};

export default TeamCalendarDecoration;
