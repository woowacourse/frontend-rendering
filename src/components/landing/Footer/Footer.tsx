import { layout, linkContainer, typography } from './footer.css';

const URL = {
  github: 'https://github.com/woowacourse-teams/2023-haru-study',
  feedback:
    'https://docs.google.com/forms/d/e/1FAIpQLSdwvz3y9xYc9PHCLw1LiaLB8TGfGao91cVs_NwERHSV9c5Mfg/viewform',
};

const Footer = () => {
  return (
    <footer className={layout}>
      <p className={typography}>우아한테크코스 5기 하루스터디</p>
      <p className={typography}>
        Copyright © 2023 하루스터디 - All rights reserved.
      </p>
      <div className={linkContainer}>
        <a target="_blank" href={URL.github}>
          <p className={typography}>Github</p>
        </a>
        <a target="_blank" href={URL.feedback}>
          <p className={typography}>사용자 피드백</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
