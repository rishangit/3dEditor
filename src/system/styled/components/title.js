import styled, { css } from 'styled-components';


export const SubTitle = styled.h3`
  display: flex;
  align-items: center;
  ${({ theme: { fontSize} }) => css`
   font-size: ${fontSize.title};
   font-weight:700;
  `}
`;