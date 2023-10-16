import Button from 'components/@common/Button/Button';
import { Container, ErrorMessageContainer, Status } from './not-foundStyle';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container>
      <Status>404 Not Found</Status>
      <ErrorMessageContainer>
        <p>길을 잃으셨나요?</p>
      </ErrorMessageContainer>
      <Button variant="text">
        <Link href="/">홈으로</Link>
      </Button>
    </Container>
  );
}
