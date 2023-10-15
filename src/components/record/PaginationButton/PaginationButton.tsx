'use client';

import ArrowIcon from '@/components/icons/ArrowIcon';
import color from '@/styles/color';
import {
  currentButton,
  layout,
  paginationButton,
} from './paginationButton.css';

type Props = {
  totalPagesNumber: number;
  currentPageNumber: number;
  shiftPage: (page: number) => void;
};

const PaginationButton = ({
  totalPagesNumber,
  currentPageNumber,
  shiftPage,
}: Props) => {
  const handleClickPageButton = (page: number) => {
    if (page < 1) {
      window.alert('첫 페이지예요.');
      return;
    }

    if (page > totalPagesNumber) {
      window.alert('마지막 페이지예요.');
      return;
    }

    window.scroll({
      top: 0,
    });

    shiftPage(page);
  };

  const getRenderingPageButtons = () => {
    const renderingPages = Array.from({ length: totalPagesNumber }).map(
      (_, index) => index + 1
    );

    if (totalPagesNumber < 6) return renderingPages.slice();

    if (currentPageNumber < 5) return renderingPages.slice(0, 5);

    if (currentPageNumber === totalPagesNumber) return renderingPages.slice(-5);

    return renderingPages.slice(currentPageNumber - 4, currentPageNumber + 1);
  };

  return (
    <div className={layout}>
      <button
        className={paginationButton}
        onClick={() => handleClickPageButton(currentPageNumber - 1)}
      >
        <ArrowIcon color={color.neutral[500]} direction="left" />
      </button>
      {getRenderingPageButtons().map((pageNumber) => {
        const isCurrentButton = currentPageNumber === pageNumber;
        return (
          <button
            className={`${paginationButton} ${
              isCurrentButton && currentButton
            }`}
            key={pageNumber}
            onClick={() => handleClickPageButton(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        className={paginationButton}
        onClick={() => handleClickPageButton(currentPageNumber + 1)}
      >
        <ArrowIcon
          color={color.neutral[500]}
          direction="right"
          style={{ width: '12px', height: '12px' }}
        />
      </button>
    </div>
  );
};

export default PaginationButton;
