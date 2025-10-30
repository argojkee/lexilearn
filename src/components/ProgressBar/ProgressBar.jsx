import { ProgressBarStyles } from './ProgressBarStyles.styled';

const ProgressBar = ({ height, percentage, isColored = false }) => {
  return (
    <ProgressBarStyles
      $height={height}
      $percentage={percentage}
      $isColored={isColored}
      className="progress-bar"
    >
      <div></div>
    </ProgressBarStyles>
  );
};

export default ProgressBar;
