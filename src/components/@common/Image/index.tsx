'use client';

import { forwardRef, useEffect, useMemo, useState } from 'react';
import type { StyledImageProps } from './Image.style';
import { StyledImage } from './Image.style';
import ImageSourceList from 'models/ImageSourceList';
import sadpiumiPng from 'assets/sadpiumi-imageFail.png';

type ImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'onError'> &
  Partial<StyledImageProps>;

const Image = forwardRef<HTMLImageElement, ImageProps>(function Image(props, ref) {
  const { type = 'circle', size = '77px', src: srcProp = sadpiumiPng, ...imageProps } = props;

  const [src, setSrc] = useState(srcProp);

  const sizeValue = Number(size.slice(0, -2));
  const imageSources = useMemo(
    () => new ImageSourceList(typeof srcProp === 'string' ? srcProp : srcProp.src, sizeValue),
    [srcProp, sizeValue]
  );

  const setErrorImage: React.ReactEventHandler<HTMLImageElement> = () => {
    setSrc(imageSources.getNext());
  };

  useEffect(() => {
    setSrc(imageSources.getCurrent());
  }, [imageSources]);

  return (
    <StyledImage
      ref={ref}
      type={type}
      size={size}
      onError={setErrorImage}
      loading="lazy"
      src={typeof src === 'string' ? src : src.src}
      {...imageProps}
    />
  );
});

export default Image;
