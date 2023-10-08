import Menu from '@/components/Menu/Menu';
import { useRouter } from 'next/navigation';
import MenuTrigger from '../MenuTrigger/MenuTrigger';
import { css } from 'styled-components';

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

  const today = new Date();

  return (
    <Menu
      trigger={<MenuTrigger />}
      $menuListPosition="left"
      $style={css`
        margin: 0 0 0 auto;
        cursor: pointer;
      `}
      $menuListStyle={css`
        top: 46px;
      `}
    >
      <Menu.Item
        onClick={() =>
          router.push(
            `record/calendar?year=${today.getFullYear()}&month=${
              today.getMonth() + 1
            }`
          )
        }
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
