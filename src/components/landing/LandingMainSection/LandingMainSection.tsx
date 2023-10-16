import {
  emphasis,
  header,
  heroImageContainer,
  landingContents,
  loadMoreContents,
  mainDescription,
} from './landingMainSection.css';
import ArrowIcon from '@/components/icons/ArrowIcon';
import LandingButton from '../LandingButton/LandingButton';
import WebpImage from '../WebpImage/WebpImage';

const LandingMainSection = () => {
  return (
    <main>
      <div className={header}>
        <div className={landingContents}>
          <h2 className={mainDescription}>
            <span className={emphasis}>하루</span>스터디만의
            <br />
            학습 사이클을 통해
            <br />
            효율적으로 학습해보세요.
          </h2>
          <LandingButton />
        </div>
        <div className={heroImageContainer}>
          <WebpImage
            originUrl="/assets/heroImage.jpg"
            webpUrl="/assets/heroImage.webp"
            alt="목표, 학습, 회고 스탭"
            width={1000}
            height={300}
            imageStyle={{
              minWidth: '50%',
              height: 'auto',
            }}
          />
        </div>
      </div>
      <div className={loadMoreContents}>
        <p>하루스터디만의 학습 사이클이란?</p>
        <ArrowIcon direction="down" />
      </div>
    </main>
  );
};

export default LandingMainSection;
