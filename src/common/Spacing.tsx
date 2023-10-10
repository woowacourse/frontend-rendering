interface SpacingProps {
  direction: 'horizontal' | 'vertical';
  size: number;
}

const Spacing = ({ direction, size }: SpacingProps) => {
  const style = {
    flex: 'none',
    minWidth: direction === 'horizontal' ? `${size}px` : '0',
    minHeight: direction === 'vertical' ? `${size}px` : '0',
  };

  return <div style={style}></div>;
};

export default Spacing;
