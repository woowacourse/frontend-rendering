import All from "@/assets/category/all.svg";
import Asian from "@/assets/category/asian.svg";
import Korean from "@/assets/category/korean.svg";
import Chinese from "@/assets/category/chinese.svg";
import Japanese from "@/assets/category/japanese.svg";
import Beef from "@/assets/category/beef.svg";
import Soup from "@/assets/category/soup.svg";
import Bakery from "@/assets/category/bakery.svg";
import Noodle from "@/assets/category/noodle.svg";
import Pizza from "@/assets/category/pizza.svg";
import Sushi from "@/assets/category/sushi.svg";
import Spaghetti from "@/assets/category/spaghetti.svg";
import Snackbar from "@/assets/category/snackbar.svg";
import Wine from "@/assets/category/wine.svg";
import World from "@/assets/category/world.svg";

interface Category {
  label: string;
  icon: React.ReactNode;
}

export const RESTAURANT_CATEGORY: Category[] = [
  { label: "전체", icon: <All /> },
  { label: "한식", icon: <Korean /> },
  { label: "탕, 찌개", icon: <Soup /> },
  { label: "중식", icon: <Chinese /> },
  { label: "일식", icon: <Japanese /> },
  { label: "양식", icon: <Spaghetti /> },
  { label: "회, 수산물", icon: <Sushi /> },
  { label: "고기", icon: <Beef /> },
  { label: "아시안", icon: <Asian /> },
  { label: "면류", icon: <Noodle /> },
  { label: "분식", icon: <Snackbar /> },
  { label: "치킨, 피자, 햄버거", icon: <Pizza /> },
  { label: "커피, 디저트, 빵", icon: <Bakery /> },
  { label: "세계요리", icon: <World /> },
  { label: "주점", icon: <Wine /> },
];

export const RECOMMENDED_REGION = {
  jamsil: {
    name: ["잠실"],
    code: [1171010100],
  },
  seongsu: {
    name: ["성수"],
    code: [1120011400, 1120011500],
  },
  hongdae: {
    name: ["홍대", "합정"],
    code: [1144012100, 1144012000, 1144011500, 1144012400, 1144012200],
  },
  eulji: {
    name: ["을지로", "종로"],
    code: [1111000000, 1114000000],
  },
  apgujeong: {
    name: ["압구정", "청담"],
    code: [1168011000, 1168010400],
  },
  yeoui: {
    name: ["여의도"],
    code: [1156011000],
  },
  itaewon: {
    name: ["이태원"],
    code: [1117013000],
  },
  sokcho: {
    name: ["속초", "강릉", "양양"],
    code: [5121000000, 5121000000, 5183000000],
  },
  busan: {
    name: ["부산"],
    code: [2600000000],
  },
  jeju: {
    name: ["제주"],
    code: [5000000000],
  },
};
