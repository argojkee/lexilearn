import { ProgressBarStyles } from './ProgressBarStyles.styled';

const ProgressBar = ({ height, percentage }) => {
  return (
    <ProgressBarStyles
      $height={height}
      $percentage={percentage}
      className="progress-bar"
    >
      <div></div>
    </ProgressBarStyles>
  );
};

export default ProgressBar;
