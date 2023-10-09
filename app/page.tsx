import fetchCafes from "./actions/fetchCafes";
import CafeRank from "./components/cafeRank/CafeRank";
import LoadMore from "./components/loadMore/LoadMore";
import Navbar from "./components/navbar/Navbar";
import TitleAndCategory from "./components/titleAndCategory/TitleAndCategory";

const Page = async () => {
  const cafes = (await fetchCafes(1)) as Cafe[];
  return (
    <>
      <Navbar />
      <TitleAndCategory />
      <CafeRank cafes={cafes} />
      <LoadMore />
    </>
  );
};

export default Page;
