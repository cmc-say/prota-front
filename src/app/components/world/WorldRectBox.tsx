import React from "react";
import styled from "@emotion/styled";
import { Text, TextSizeType } from "@/styled/typography";
import { ColorType } from "@/styled/color.type";
import Image from "next/image";

interface WorldBoxProps {
  imageSrc: string;
  title: string;
}

export const WorldRectBox: React.FC<WorldBoxProps> = ({ imageSrc, title }) => {
  return (
    <Styled.Container>
      <Styled.WorldBox src={imageSrc} alt="box" width={160} height={160} />
      <WorldText color={ColorType.NEUTRAL00} type={TextSizeType.KR_HEAD_03}>
        {title}
      </WorldText>
    </Styled.Container>
  );
};

const WorldRectBoxStyled = {
  Container: styled.div`
    border-radius: 16px;
    overflow: hidden;
    position: relative;
  `,
  WorldBox: styled(Image)`
    background-color: ${ColorType.NEUTRAL500};
  `,
};

const Styled = WorldRectBoxStyled;

const WorldBox = styled.div<{ imageSrc: string }>`
  background: ${({ imageSrc }) => imageSrc};
  position: relative;
  width: 160px;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
`;

const WorldText = styled(Text)`
  position: absolute;
  bottom: 12px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
`;
