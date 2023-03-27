import { FC } from "react";
import { SectionTitleContainer } from "./styles";

interface SectionTitleProps {
  title: string;
  description: string;
}

export const SectionTitleComponent: FC<SectionTitleProps> = ({
  title,
  description,
}) => (
  <SectionTitleContainer>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </SectionTitleContainer>
);
