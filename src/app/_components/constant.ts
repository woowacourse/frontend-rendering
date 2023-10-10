import Home from "../../../public/nav_home.svg";
import FocusHome from "../../../public/nav_home_focus.svg";
import SeeTogether from "../../../public/nav_seeTogether.svg";
import FocusSeeTogether from "../../../public/nav_seeTogether_focus.svg";
import AddMapOrPin from "../../../public/nav_addMapOrPin.svg";
import FocusAddMapOrPin from "../../../public/nav_addMapOrPin_focus.svg";
import Favorite from "../../../public/nav_favorite.svg";
import FocusFavorite from "../../../public/nav_favorite_focus.svg";
import Profile from "../../../public/nav_profile.svg";
import FocusProfile from "../../../public/nav_profile_focus.svg";

export type NavbarHighlightKeys =
  | "home"
  | "seeTogether"
  | "addMapOrPin"
  | "favorite"
  | "profile";

interface NavbarItemProps {
  key: NavbarHighlightKeys;
  label: string;
  icon: string;
  focusIcon: string;
}

export const NAV_ITEMS: NavbarItemProps[] = [
  {
    key: "home",
    label: "홈",
    icon: "/nav_home.svg",
    focusIcon: "/nav_home_focus.svg",
  },
  {
    key: "seeTogether",
    label: "모아보기",
    icon: "/nav_seeTogether.svg",
    focusIcon: "/nav_seeTogether_focus.svg",
  },
  {
    key: "addMapOrPin",
    label: "추가하기",
    icon: "/nav_addMapOrPin.svg",
    focusIcon: "/nav_addMapOrPin_focus.svg",
  },
  {
    key: "favorite",
    label: "즐겨찾기",
    icon: "/nav_favorite.svg",
    focusIcon: "/nav_favorite_focus.svg",
  },
  {
    key: "profile",
    label: "내 정보",
    icon: "/nav_profile.svg",
    focusIcon: "/nav_profile_focus.svg",
  },
];
