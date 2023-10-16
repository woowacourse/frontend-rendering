"use client";

import {
  Button,
  ButtonSection,
  SadPiumiImage,
  Section,
  Text,
  Title,
  Wrapper,
} from "./error.style";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <Wrapper>
      <picture>
        <SadPiumiImage
          width={250}
          height={160}
          src={"/piumi-sad.png"}
          alt="슬픈 표정을 하는 피우미"
        />
      </picture>
      <Section>
        <Text>이런!</Text>
        <Title>페이지를 찾지 못했어요</Title>
      </Section>
      <Section>
        <Text>주소가 올바른지 확인해 보세요</Text>
        <Text>잠시 후에 다시 시도해 주세요</Text>
      </Section>
      <ButtonSection>
        <Button type="button" onClick={goToHome}>
          메인 화면으로
        </Button>
      </ButtonSection>
    </Wrapper>
  );
};

export default NotFound;
