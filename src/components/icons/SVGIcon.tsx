import * as Icons from "@/components/icons/svgIcons";

type SVGIconsProps = {
  name: keyof typeof Icons;
  size?: string | number;
  color?: string;
  noFill?: boolean;
};

const SVGIcon = ({
  name,
  size = "30",
  color = "#000",
  noFill = false,
}: SVGIconsProps) => {
  const SVGIconComponent = Icons[name];

  return (
    <SVGIconComponent
      width={size}
      fill={color}
      style={{ color: noFill ? color : "inherit" }}
    />
  );
};

export default SVGIcon;
