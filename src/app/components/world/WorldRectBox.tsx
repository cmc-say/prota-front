import React from "react";
import styled from "@emotion/styled";
import { Text, TextSizeType } from "@/styled/typography";
import { ColorType } from "@/styled/color.type";

interface WorldBoxProps {
  imageSrc: string;
  title: string;
}

export const WorldRectBox: React.FC<WorldBoxProps> = ({ imageSrc, title }) => {
  return (
    <>
      <WorldBox imageSrc={imageSrc}>
        <WorldText color={ColorType.NEUTRAL00} type={TextSizeType.KR_HEAD_03}>
          {title}
        </WorldText>
      </WorldBox>
    </>
  );
};

const WorldBox = styled.div<{ imageSrc: string }>`
  background: ${({ imageSrc }) => imageSrc};
  position: relative;
  width: 160px;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  background-color: ${ColorType.NEUTRAL500};
`;

const WorldText = styled(Text)`
  position: absolute;
  bottom: 12px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
`;
