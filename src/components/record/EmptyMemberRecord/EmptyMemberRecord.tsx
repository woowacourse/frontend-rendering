import color from '@/styles/color';
import PagesIcon from '../../icons/PagesIcon';
import Link from 'next/link';
import Button from '@/components/common/Button/Button';
import { buttonContainer, description, layout } from './emptyMemberRecord.css';

const EmptyMemberRecord = () => {
  return (
    <div className={layout}>
      <PagesIcon
        color={color.black}
        style={{ width: '80px', height: '80px' }}
      />
      <div className={description}>
        완료한 스터디가 없어요.
        <br />
        스터디를 시작해 보세요.
      </div>
      <div className={buttonContainer}>
        <Link href="/">
          <Button>스터디 시작하기</Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyMemberRecord;
