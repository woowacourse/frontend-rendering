'use client';

import { ImgHTMLAttributes } from 'react';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  $errorDefaultSrc?: string;
}

const DEFAULT_IMAGE =
  'https://dr702blqc4x5d.cloudfront.net/2023-map-be-fine/icon/topic_defaultImage.svg';

const CustomImage = ({
  width,
  height,
  src,
  alt,
  $errorDefaultSrc = DEFAULT_IMAGE,
}: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={(e) => {
        e.currentTarget.src = $errorDefaultSrc;
      }}
    />
  );
};

export default CustomImage;
