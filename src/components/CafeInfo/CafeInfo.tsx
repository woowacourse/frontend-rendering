import styled from './CafeInfo.module.css';
import Color from 'color-thief-react';
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';
import { AiOutlineStar } from '@react-icons/all-files/ai/AiOutlineStar';
import ProgressBar from '../ProgressBar/ProgressBar';
import { addGoogleProxyUrl } from '@/lib';
import { Coupon, CouponInfo } from '@/types/coupon';

interface CafeInfoProps {
  cafeInfo: Coupon;
  couponInfo: CouponInfo;
  onClickStar: () => void;
}

const CafeInfo = ({
  cafeInfo: { cafeInfo },
  couponInfo,
  onClickStar,
}: CafeInfoProps) => {
  const { name: cafeName, isFavorites } = cafeInfo;
  const { stampCount, maxStampCount, frontImageUrl } = couponInfo;
  return (
    <>
      <div className={styled.infoContainer}>
        <div className={styled.nameContainer}>
          <span className={styled.cafeName} aria-label='카페 이름'>
            {cafeName}
          </span>
          {isFavorites ? (
            <AiFillStar
              size={40}
              color={'#FFD600'}
              onClick={onClickStar}
              aria-label='즐겨찾기 해제'
              role='button'
            />
          ) : (
            <AiOutlineStar
              size={40}
              color={'#FFD600'}
              onClick={onClickStar}
              aria-label='즐겨찾기 등록'
              role='button'
            />
          )}
        </div>
        <div className={styled.progressBarContainer} aria-label='스탬프 개수'>
          <Color
            src={addGoogleProxyUrl(frontImageUrl)}
            format='hex'
            crossOrigin='anonymous'
          >
            {({ data: color }) => (
              <>
                <div
                  className={styled.backDrop}
                  style={{
                    background: `linear-gradient(
      white,
      rgba(255, 255, 255, 0.5) 32%,
      ${color ? color : 'gray'} 80%,
      white
    )`,
                  }}
                />
                <ProgressBar
                  stampCount={stampCount}
                  maxCount={maxStampCount}
                  color={color}
                />
              </>
            )}
          </Color>
          <div
            className={styled.stampCount}
            aria-label={`현재 스탬프 개수 ${stampCount}개`}
          >
            {stampCount}
          </div>
          /
          <div className={styled.maxStampCount} aria-label='필요한 스탬프 개수'>
            {maxStampCount}
          </div>
        </div>
      </div>
    </>
  );
};

export default CafeInfo;
