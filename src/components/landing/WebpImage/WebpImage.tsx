import Image from 'next/image';
import { CSSProperties } from 'react';

type Props = {
  webpUrl: string[] | string;
  originUrl: string;
  alt: string;
  imageStyle?: CSSProperties;
  width: number;
  height: number;
};

const WebpImage = ({
  webpUrl,
  originUrl,
  alt,
  imageStyle,
  width,
  height,
}: Props) => {
  if (typeof webpUrl === 'string') {
    webpUrl = [webpUrl];
  }

  return (
    <picture>
      {webpUrl.map((item, index) => (
        <source key={index} type="image/webp" srcSet={item} />
      ))}
      <Image
        src={originUrl}
        alt={alt}
        width={width}
        height={height}
        style={imageStyle}
      />
    </picture>
  );
};

export default WebpImage;
