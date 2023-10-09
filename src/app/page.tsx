import Header from '@/components/Header/Header';
import { landingHeader } from './main.css';
import MemberProfile from './components/MemberProfile/MemberProfile';

export default function Home() {
  return (
    <main className={landingHeader}>
      <Header />
      <MemberProfile />
    </main>
  );
}
