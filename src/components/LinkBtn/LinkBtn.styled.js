import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkBtnStyles = styled(Link)`
  border-radius: 12px;
  text-decoration: none;
  padding: 12px 24px;
  background-color: ${({ $bg }) => $bg};
  color: ${({ $bg }) => ($bg === 'black' ? 'white' : 'black')};
  border: 1px solid ${({ $bg }) => ($bg === 'black' ? 'black' : 'grey')};
  transition: 250ms linear;
  &:hover {
    background-color: ${({ $bg }) =>
      $bg === 'black' ? 'rgba(0,0,0,0.7)' : 'rgba(150,150,150,0.4)'};
  }
`;
