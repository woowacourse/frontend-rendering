'use client';

import Menu from '@/components/common/Menu/Menu';
import { useRouter } from 'next/navigation';
import MenuTrigger from '../MenuTrigger/MenuTrigger';
import Link from 'next/link';

const DEFAULT_MENU_ITEMS = [
  {
    key: 0,
    Link: (
      <Link href="https://forms.gle/gjEejNBaQmbhwh3C8" target="_blank">
        사용자 피드백
      </Link>
    ),
  },
  {
    key: 1,
    Link: (
      <Link
        href="https://github.com/woowacourse-teams/2023-haru-study"
        target="_blank"
      >
        github
      </Link>
    ),
  },
];

const MemberProfile = () => {
  const router = useRouter();

  return (
    <Menu trigger={<MenuTrigger />}>
      <Menu.Item>
        <Link href="member-record/list?period=entire&page=1">스터디 기록</Link>
      </Menu.Item>
      <Menu.Item onClick={() => window.alert('로그아웃')} bottomSeparator>
        로그아웃
      </Menu.Item>
      {DEFAULT_MENU_ITEMS.map(({ key, Link }) => (
        <Menu.Item key={key}>{Link}</Menu.Item>
      ))}
    </Menu>
  );
};

export default MemberProfile;
