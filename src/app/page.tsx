import Header from '@/components/Header/Header';
import { landingContents, landingHeader } from './main.css';
import MemberProfile from './components/MemberProfile/MemberProfile';
import LandingMainSection from './components/LandingMainSection/LandingMainSection';
import GuideSection from './components/GuideSection/GuideSection';
import StartSection from './components/StartSection/StartSection';

export default function Home() {
  return (
    <>
      <main className={landingHeader}>
        <Header />
        <MemberProfile />
      </main>
      <div className={landingContents}>
        <LandingMainSection />
        <GuideSection />
        <StartSection />
      </div>
    </>
  );
}
