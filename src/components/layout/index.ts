import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const PageContent = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 64px;
  gap: 24px;

  width: 100%;
  max-width: 1050px;
  min-height: 552px;

  background: #ffffff;
  border-radius: 16px;
`;

export const PageBackground = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CustomButton = styled.button<{ variant: "primary" | "secondary" }>`
  display: flex;
  align-items: center;
  height: 42px;
  border-radius: 21px;
  padding-left: 40px;
  padding-right: 40px;
  cursor: pointer;

  text-transform: uppercase;

  ${({ theme, variant }) =>
    theme.buttons[variant].border && "border:" + theme.buttons[variant].border};

  font-weight: ${({ variant }) => (variant === "primary" ? 700 : 400)};
  color: ${({ theme, variant }) => theme.buttons[variant].color};
  background-color: ${({ theme, variant }) =>
    theme.buttons[variant].background};

  transition: all 200ms ease-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const Spacer = styled.div<{ height: number }>`
  display: block;
  height: ${({ height }) => height + "px"};
`;

export const IconHolder = styled.i<{ size: number; icon: string }>`
  display: flex;
  content: "";

  background-image: url(${({ icon }) => icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
