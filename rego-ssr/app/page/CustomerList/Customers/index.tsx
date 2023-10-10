import { Customer, Option } from '@/app/types';
import {
  Container,
  Badge,
  CustomerBox,
  InfoContainer,
  LeftInfo,
  Name,
  NameContainer,
  RightInfo,
} from './style';
import { formatDate } from '@/app/util';

interface CustomersProps {
  registerTypeOption: Option;
  customers: Customer[];
}

const Customers = ({ customers }: CustomersProps) => {
  return (
    <Container>
      {customers.map(
        ({
          id,
          nickname,
          stampCount,
          maxStampCount,
          rewardCount,
          isRegistered,
          recentVisitDate,
          visitCount,
        }: Customer) => (
          <CustomerBox key={id}>
            <LeftInfo>
              <NameContainer>
                <Name>{nickname}</Name>
                <Badge $isRegistered={isRegistered}>
                  {isRegistered ? '회원' : '임시'}
                </Badge>
              </NameContainer>
              <InfoContainer>
                스탬프: {stampCount}/{maxStampCount} <br />
                리워드: {rewardCount}개
              </InfoContainer>
            </LeftInfo>
            <RightInfo>
              <InfoContainer>
                최근 방문일: {formatDate(recentVisitDate)}
                <br /> 방문 횟수: {visitCount}번
              </InfoContainer>
            </RightInfo>
          </CustomerBox>
        )
      )}
    </Container>
  );
};

export default Customers;
