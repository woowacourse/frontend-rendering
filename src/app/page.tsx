import Header from '@/components/common/Header/Header';
import { landingContents, landingHeader } from './landing.css';
import MemberProfile from '../components/landing/MemberProfile/MemberProfile';
import LandingMainSection from '../components/landing/LandingMainSection/LandingMainSection';
import GuideSection from '../components/landing/GuideSection/GuideSection';
import StartSection from '../components/landing/StartSection/StartSection';
import Footer from '@/components/landing/Footer/Footer';

export default function Landing() {
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
      <Footer />
    </>
  );
}
