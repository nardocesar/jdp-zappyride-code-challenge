import styled from "styled-components";

export const IconsWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;

  figure {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    figcaption {
      display: flex;
      align-items: center;
      height: 45px;
      font-weight: 700;
      font-size: 16px;
      color: ${({ theme }) => theme.title.color};
    }
  }
`;
