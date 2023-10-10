'use client';

import Menu from '@/components/common/Menu/Menu';
import { useRouter } from 'next/navigation';
import MenuTrigger from '../MenuTrigger/MenuTrigger';

const DEFAULT_MENU_ITEMS = [
  {
    key: 0,
    text: '사용자 피드백',
    onClick: () => {
      window.open('https://forms.gle/gjEejNBaQmbhwh3C8', 'blank');
    },
  },
  {
    key: 1,
    text: 'github',
    onClick: () => {
      window.open(
        'https://github.com/woowacourse-teams/2023-haru-study',
        'blank'
      );
    },
  },
];

const MemberProfile = () => {
  const router = useRouter();

  return (
    <Menu trigger={<MenuTrigger />}>
      <Menu.Item
        onClick={() => router.push('member-record/list?period=entire&page=1')}
      >
        스터디 기록
      </Menu.Item>
      <Menu.Item onClick={() => window.alert('로그아웃')} bottomSeparator>
        로그아웃
      </Menu.Item>
      {DEFAULT_MENU_ITEMS.map(({ key, text, onClick }) => (
        <Menu.Item key={key} onClick={onClick}>
          {text}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MemberProfile;
