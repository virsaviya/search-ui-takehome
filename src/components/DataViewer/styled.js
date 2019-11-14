import styled from 'styled-components';

export const ItemWrapper = styled.div`
  filter: ${({ disabled }) => disabled && 'grayscale(90%)'};
`;
