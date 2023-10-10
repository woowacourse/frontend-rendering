"use client";
import { useRouter } from "next/navigation";

export const useNavigator = () => {
  const router = useRouter();

  const routePage = (url: string | -1, value?: string | number | number[]) => {
    if (typeof url === "string") router.push(url);
    if (url === -1) router.back(); // useNavigate의 -1과 유사한 동작
  };

  return {
    routingHandler: {
      home: () => routePage("/"),
      favorite: () => routePage("/favorite"),
      profile: () => routePage("/profile"),
      seeTogether: () => routePage("/seeTogether"),
      newTopic: () => {
        routePage("/new-topic");
      },
      addMapOrPin: () => routePage("/addMapOrPin"),
      search: (searchTerm: string) =>
        routePage(`/search?searchTerm=${searchTerm}`),
    },
    routePage,
  };
};
