import { forwardRef } from "react";
import { StyledImage } from "./Image.style";

export type ImageType = "circle" | "square" | "wide";

interface ImageProps {
  src: string;
  alt: string;
  size?: number;
  type?: ImageType;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(function Image(
  props,
  ref
) {
  const { size = 77, type = "circle" } = props;

  const setErrorImage: React.ReactEventHandler<HTMLImageElement> = ({
    currentTarget,
  }) => {
    currentTarget.src = "/piumi-sad.png";
  };

  return (
    <StyledImage
      loading="lazy"
      ref={ref}
      $type={type}
      $size={size}
      onError={setErrorImage}
      {...props}
    />
  );
});

export default Image;
