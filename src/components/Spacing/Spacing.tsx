interface SpacingProps {
  size?: number;
  direction?: 'vertical' | 'horizontal';
}

const Spacing = (props: SpacingProps) => {
  const { size = 1, direction = 'vertical' } = props;

  return (
    <div
      style={{
        width: direction === 'vertical' ? '1px' : size + 'px',
        height: direction === 'vertical' ? size + 'px' : '1px',
      }}
    />
  );
};

export default Spacing;
