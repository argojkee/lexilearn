import { MainSpinnerStyles } from './MainSpinner.styled';
import { LoaderCircle } from 'lucide-react';
const MainSpinner = () => {
  return (
    <MainSpinnerStyles>
      <LoaderCircle size={60} className="spinner" />
    </MainSpinnerStyles>
  );
};

export default MainSpinner;
