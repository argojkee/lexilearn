import ProgressCard from 'components/ProgressCard/ProgressCard';
import { ProgressListStyles } from './ProgressListStyles.styled';
import { nanoid } from 'nanoid';

const ProgressList = ({ data }) => {
  return (
    <ProgressListStyles>
      {data &&
        data.length > 0 &&
        data.map((card, i) => <ProgressCard key={nanoid()} {...card} />)}
    </ProgressListStyles>
  );
};

export default ProgressList;
