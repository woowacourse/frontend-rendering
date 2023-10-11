import * as S from "./ButtonStyled";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  colorTheme: "RED" | "WHITE" | "GRAY" | "BLACK";
  fontSize?: string | number;
  fontWeight?: number;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  dataType?: string;
}

const Button = ({
  colorTheme,
  children,
  type,
  fontSize,
  fontWeight,
  onClick,
  ariaLabel,
  dataType,
  disabled,
  width,
  height,
}: Props) => {
  return (
    <S.ButtonWrapper>
      <S.Button
        data-type={dataType}
        $colorTheme={colorTheme}
        type={type}
        disabled={disabled}
        $fontSize={fontSize}
        $fontWeight={fontWeight}
        onClick={onClick}
        aria-label={ariaLabel}
        $width={width}
        $height={height}
      >
        {children}
      </S.Button>
    </S.ButtonWrapper>
  );
};

export default Button;
