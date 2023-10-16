type SpacingProps = {
  direction: 'vertical' | 'horizontal';
  size: number;
};

export default function Spacing({ direction, size }: SpacingProps) {
  const styles = {
    flex: 'none',
    minWidth: direction === 'horizontal' ? `${size}px` : '0',
    minHeight: direction === 'vertical' ? `${size}px` : '0',
  };

  return <div style={styles} />;
}
