import { Link } from 'react-router-dom';
import { DictionaryActionCardStyles } from './DictionaryActionCardStyles.styled';
const DictionaryActionCard = ({
  icon: Icon,
  title,
  text,
  description,
  to,
  color,
}) => {
  return (
    <DictionaryActionCardStyles $color={color}>
      <Link to={to}>
        <div className="title-container">
          <div className="icon-container">
            <Icon color={`rgb(${color})`} size={40} />
          </div>
          <div className="info-container">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
        <p className="description">{description}</p>
      </Link>
    </DictionaryActionCardStyles>
  );
};

export default DictionaryActionCard;
