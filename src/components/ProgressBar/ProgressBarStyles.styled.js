import styled from 'styled-components';

export const ProgressBarStyles = styled.div`
  width: 100%;
  height: ${props => props.$height || '10px'};
  background-color: rgba(150, 150, 150, 0.4);
  border-radius: 8px;
  overflow: hidden;

  > div {
    height: 100%;
    width: ${props => props.$percentage || 0}%;
    background-color: ${({ $percentage, $isColored }) => {
      if (!$isColored) return 'black';
      if ($percentage < 25) return 'red';
      if ($percentage < 50) return 'orange';
      if ($percentage < 75) return 'yellow';
      if ($percentage <= 100) return 'green';
    }};
    transition: width 0.3s ease;
    border-radius: 0 8px 8px 0;
  }
`;
