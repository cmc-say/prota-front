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
      {imageSrc ? (
        <Styled.WorldBox src={imageSrc} alt="box" width={160} height={160} />
      ) : (
        <Styled.NoneBox />
      )}
      <Styled.WorldText
        color={ColorType.NEUTRAL00}
        type={TextSizeType.KR_HEAD_03}
      >
        {title}
      </Styled.WorldText>
    </Styled.Container>
  );
};

const WorldRectBoxStyled = {
  Container: styled.div`
    position: relative;
  `,
  WorldBox: styled(Image)`
    border-radius: 16px;
  `,
  NoneBox: styled.div`
    background-color: ${ColorType.NEUTRAL500};
    width: 160px;
    height: 160px;
    border-radius: 16px;
  `,
  WorldText: styled(Text)`
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  `,
};

const Styled = WorldRectBoxStyled;
