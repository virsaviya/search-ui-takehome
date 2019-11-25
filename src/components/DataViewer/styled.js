import styled from "styled-components";

export const ItemWrapper = styled.div`
  filter: ${({ disabled }) => disabled && "grayscale(90%)"};
  opacity: ${({ disabled }) => disabled && "0.4"};
`;

export const Highlighted = styled.span`
  background-color: yellow;
`;
