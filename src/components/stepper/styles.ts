import styled from "styled-components";

export const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  width: 100%;
  max-width: 432px;
  margin: 0 auto;

  span {
    display: inline-block;
    text-align: center;
    color: #333;
    font-size: 16px;
    line-height: 125%;
  }
`;

export const StepperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  column-gap: 8px;
`;

export const StepperButton = styled.button<{ active: boolean }>`
  display: flex;
  width: 100%;
  max-width: 80px;
  height: 4px;
  background-color: ${({ active }) => (active ? "#0072ce" : "#595959")};

  transition: all 200ms ease-out;
`;
