import Header from '@/components/Header/Header';
import { landingContents, landingHeader } from './main.css';
import MemberProfile from './components/MemberProfile/MemberProfile';
import LandingMainSection from './components/LandingMainSection/LandingMainSection';

export default function Home() {
  return (
    <>
      <main className={landingHeader}>
        <Header />
        <MemberProfile />
      </main>
      <div className={landingContents}>
        <LandingMainSection />
        {/* <GuideSection />
        <StartSection /> */}
      </div>
    </>
  );
}
