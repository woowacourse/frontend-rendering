import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

function getIconComponent(src: string | StaticImport) {
  return ({ width = 16, height = 16 }: { width?: number; height?: number }) => (
    <Image src={src} width={width} height={height} alt="icon" priority />
  );
}

export const HomeIcon = getIconComponent('/icons/home.svg');
export const CalendarIcon = getIconComponent('/icons/calendar.svg');
export const PlusCircleIcon = getIconComponent('/icons/plus-circle.svg');
export const SearchIcon = getIconComponent('/icons/search.svg');
export const StatsIcon = getIconComponent('/icons/stats.svg');
export const TagIcon = getIconComponent('/icons/tag.svg');
export const LeftArrowHeadIcon = getIconComponent('/icons/left-arrow-head.svg');
export const TistoryLogoIcon = getIconComponent('/icons/tistory-logo.svg');
export const MediumLogoIcon = getIconComponent('/icons/medium-logo.svg');
export const CloseIcon = getIconComponent('/icons/close-rounded.svg');
export const SidebarLeftIcon = getIconComponent('/icons/sidebar-left.svg');
export const SidebarRightIcon = getIconComponent('/icons/sidebar-right.svg');
export const SettingIcon = getIconComponent('/icons/setting.svg');
export const InfoIcon = getIconComponent('/icons/info.svg');
export const PublishingIcon = getIconComponent('/icons/publishing.svg');
export const ArrowRightIcon = getIconComponent('/icons/arrow-right.svg');
export const TrashCanIcon = getIconComponent('/icons/trash-can.svg');
export const TrashCanEmptyIcon = getIconComponent('/icons/trash-can-empty.svg');
export const PencilIcon = getIconComponent('/icons/pencil.svg');
export const WritingIcon = getIconComponent('/icons/writing.svg');
export const ImportIcon = getIconComponent('/icons/import.svg');
export const PlusIcon = getIconComponent('/icons/plus.svg');
export const KakaoSymbol = getIconComponent('/icons/kakao-symbol.svg');
export const DefaultUserProfileIcon = getIconComponent('/icons/default-user-profile.svg');
export const NotionIcon = getIconComponent('/icons/notion.svg');
export const DonggleIcon = getIconComponent('/icons/donggle-logo.svg');
export const BlurBackgroundIcon = getIconComponent('/icons/blur-background.svg');
export const HyperlinkIcon = getIconComponent('/icons/hyperlink.svg');
export const HomeBorderIcon = getIconComponent('/icons/home-border.svg');
export const TimeIcon = getIconComponent('/icons/time.svg');
export const PasswordIcon = getIconComponent('/icons/password.svg');
export const PublishIcon = getIconComponent('/icons/publish.svg');
export const EmptyWritingTableIcon = getIconComponent('/icons/empty-writing-table.svg');
export const CategoryIcon = getIconComponent('/icons/category.svg');
export const HelpMenuBook = getIconComponent('/icons/help-menu-book.svg');
export const HelpMenuFeedback = getIconComponent('/icons/help-menu-feedback.svg');
