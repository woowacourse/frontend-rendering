import All from '../assets/icon/category/all.svg';
import Asian from '../assets/icon/category/asian.svg';
import Korean from '../assets/icon/category/korean.svg';
import Chinese from '../assets/icon/category/chinese.svg';
import Japanese from '../assets/icon/category/japanese.svg';
import Beef from '../assets/icon/category/beef.svg';
import Soup from '../assets/icon/category/soup.svg';
import Bakery from '../assets/icon/category/bakery.svg';
import Noodle from '../assets/icon/category/noodle.svg';
import Pizza from '../assets/icon/category/pizza.svg';
import Sushi from '../assets/icon/category/sushi.svg';
import Spaghetti from '../assets/icon/category/spaghetti.svg';
import Snackbar from '../assets/icon/category/snackbar.svg';
import Wine from '../assets/icon/category/wine.svg';
import World from '../assets/icon/category/world.svg';

interface Category {
  label: string;
  icon: React.ReactNode;
}

const RESTAURANT_CATEGORY: Category[] = [
  // { label: '전체', icon: <All /> },
  { label: '한식', icon: <Korean /> },
  // { label: '탕,찌개', icon: <Soup /> },
  { label: '중식', icon: <Chinese /> },
  { label: '일식', icon: <Japanese /> },
  { label: '양식', icon: <Spaghetti /> },
  // { label: '회,수산물', icon: <Sushi /> },
  { label: '고기', icon: <Beef /> },
  { label: '아시안', icon: <Asian /> },
  { label: '면류', icon: <Noodle /> },
  { label: '분식', icon: <Snackbar /> },
  // { label: '패스트푸드', icon: <Pizza /> },
  { label: '디저트', icon: <Bakery /> },
  { label: '세계요리', icon: <World /> },
  { label: '주점', icon: <Wine /> },
];

export default RESTAURANT_CATEGORY;
