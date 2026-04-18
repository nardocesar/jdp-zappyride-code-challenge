import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 159px;
  background-color: ${({ theme }) => theme.header.background1};
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  height: 86px;
  background-color: ${({ theme }) => theme.header.background2};
  align-self: flex-end;
`;
