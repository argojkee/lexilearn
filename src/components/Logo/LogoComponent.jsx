import { BookOpen } from 'lucide-react';
import { LogoStyles } from './LogoStyles.styled';

const LogoComponent = ({ size }) => {
  return (
    <LogoStyles $size={size} className="logo">
      <BookOpen size={size} fill="black" color="white" />
    </LogoStyles>
  );
};

export default LogoComponent;
