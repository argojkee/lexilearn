import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLinkStyles = styled(Link)`
  display: flex;
  max-width: 100px;
  border: 1px solid grey;
  justify-content: center;
  align-items: center;
  column-gap: 4px;
  border-radius: 12px;
  padding: 4px 8px;
  transition: 250ms linear;

  @media screen and (min-width:768px) {
    &:hover {
    background-color: rgba(150, 150, 150, 0.2);
  }
  }
`;
