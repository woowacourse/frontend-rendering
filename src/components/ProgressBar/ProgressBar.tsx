import styled from './ProgressBar.module.css';

interface ProgressBarProps {
  stampCount: number;
  maxCount: number;
  color?: string;
}

const ProgressBar = ({
  stampCount,
  maxCount,
  color = 'gray',
}: ProgressBarProps) => {
  const progressBarDesign = {
    width: `${(stampCount / maxCount) * 100}%`,
    background: color,
  };
  return (
    <div className={styled.bar}>
      <div style={progressBarDesign} className={styled.progress} />
    </div>
  );
};

export default ProgressBar;
