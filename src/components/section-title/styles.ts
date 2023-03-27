import styled from "styled-components";

export const SectionTitleContainer = styled.div`
  max-width: 530px;
  text-align: center;

  h1 {
    font-size: ${({ theme }) => theme.title.fontSize};
    color: ${({ theme }) => theme.title.color};
  }
  h2 {
    font-size: ${({ theme }) => theme.description.fontSize};
    color: ${({ theme }) => theme.description.color};
    font-weight: 400;
    line-height: 150%;
  }
`;
