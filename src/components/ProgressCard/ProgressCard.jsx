import { capitalizeFirstChar } from 'functions/capitalizeFirstChar';
import { ProgressCardStyles } from './ProgressCardStyles.styled';
const ProgressCard = ({ icon: Icon, count, text, color }) => {
  const capitalizeText = capitalizeFirstChar(text);
  return (
    <ProgressCardStyles>
      <Icon color={color} />
      <div>
        <p>{count}</p>
        <h4>{capitalizeText}</h4>
      </div>
    </ProgressCardStyles>
  );
};

export default ProgressCard;
