import styles from "./index.module.scss";

import CommunityHeader from "../components/CommunityHeader/CommunityHeader";
import CommunityTripItemList from "../components/CommunityTripItemList/CommunityTripItemList";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <CommunityHeader />
      <h4 className={styles.subTitleStyling}>지금 인기있는 여행들이에요</h4>
      <CommunityTripItemList />
      <div style={{ padding: "81px" }} />
    </>
  );
};

export default Home;
