"use client";

import { useRouter } from "next/navigation";
import useDictionaryPlantDetail from "@/hooks/useDictionaryPlantDetail";
import {
  Header,
  BackButton,
  BottomSheet,
  Main,
  PrimaryButton,
} from "./page.style";
import Image from "@/components/common/Image/Image";
import DictionaryPlantContent from "@/components/dictionaryPlant/DictionaryPlantContent/DictionaryPlantContent";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page(props: PageProps) {
  const { params } = props;
  const dictionaryPlantId = Number(params.id);

  const router = useRouter();

  const { data: dictionaryPlantDetail } =
    useDictionaryPlantDetail(dictionaryPlantId);
  const { image, name } = dictionaryPlantDetail;

  // const goPetPlantRegisterForm = () => {
  //   router.push("/pet/register/" + dictionaryPlantId);
  // };

  // const goLogin = () => {
  //   navigate(URL_PATH.login);
  // };

  // const warning = () => {
  //   addToast({
  //     type: "info",
  //     message: "로그인 후 등록할 수 있어요",
  //     time: 4000,
  //     buttonContent: "로그인",
  //     onClickButton: goLogin,
  //   });
  // };

  return (
    <>
      <Header>
        <BackButton onClick={router.back}>{"<"}</BackButton>
      </Header>
      <Main>
        <Image type="wide" src={image} alt={name} size={300} />
        <DictionaryPlantContent {...dictionaryPlantDetail} />
      </Main>
      <BottomSheet>
        <PrimaryButton
        // onClick={warning}
        >
          반려 식물로 등록하기
        </PrimaryButton>
      </BottomSheet>
    </>
  );
}
