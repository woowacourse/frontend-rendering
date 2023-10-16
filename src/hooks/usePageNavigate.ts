import { NAVIGATE_PATH } from 'constants/path';
import { useRouter } from 'next/navigation';

export const usePageNavigate = () => {
  const router = useRouter();

  const goIntroducePage = () => router.push(NAVIGATE_PATH.introducePage);

  const goSpacePage = () => router.push(NAVIGATE_PATH.spacePage);

  const goWritingTablePage = (categoryId: number) => {
    router.push(
      NAVIGATE_PATH.getWritingTablePage(categoryId)
      // {
      //   state: { categoryId },
      // }
    );
  };

  const goWritingPage = ({
    categoryId,
    writingId,
    isDeletedWriting,
  }: {
    categoryId: number;
    writingId: number;
    isDeletedWriting: boolean;
  }) => {
    router.push(NAVIGATE_PATH.getWritingPage(categoryId, writingId), {
      // state: {
      //   categoryId,
      //   writingId,
      //   isDeletedWriting,
      // },
    });
  };
  const goTrashCanPage = () => router.push(NAVIGATE_PATH.trashCanPage);

  const goMyPage = () => router.push(NAVIGATE_PATH.myPage);

  return {
    goIntroducePage,
    goSpacePage,
    goWritingTablePage,
    goWritingPage,
    goTrashCanPage,
    goMyPage,
  };
};
