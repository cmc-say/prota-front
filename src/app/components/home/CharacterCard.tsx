import { ColorType, OpacityHex } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

interface CharacterCardProps {
  imageSrc: string;
  characterName: string;
  characterDescription: string;
  index: number;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  imageSrc,
  characterName,
  characterDescription,
  index,
}) => {
  return (
    <CardContainer>
      <TextWrapper.IndexedText
        color={ColorType.NEUTRAL00}
        type={TextSizeType.KR_CAPTION_01}
      >
        캐릭터 0{index}
      </TextWrapper.IndexedText>
      <TextWrapper.NameText
        color={ColorType.NEUTRAL00}
        type={TextSizeType.KR_HEAD_01}
      >
        {characterName}
      </TextWrapper.NameText>
      <TextWrapper.DescriptionText
        color={ColorType.NEUTRAL00}
        type={TextSizeType.KR_SUB_HEAD_02}
      >
        {characterDescription}
      </TextWrapper.DescriptionText>

      <TextWrapper.RouteText
        color={ColorType.NEUTRAL00}
        type={TextSizeType.KR_CAPTION_01}
      >
        세계관으로 이동 {`>`}
      </TextWrapper.RouteText>
      <Link href={"/home/1/edit"}>
        <CardEditContainer></CardEditContainer>
      </Link>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  margin: auto;
  position: relative;
  width: 290px;
  height: 404px;
  border-radius: 16px;
  padding: 30px 28px;
  background-color: #ffffff80;
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const TextWrapper = {
  IndexedText: styled(Text)`
    border-radius: 999px;
    display: inline-block;
    padding: 2px 12px;
    width: max-content;
    background-color: ${ColorType.NEUTRAL600 + OpacityHex["50%"]};
  `,
  NameText: styled(Text)`
    margin-top: 8px;
  `,
  DescriptionText: styled(Text)`
    margin-top: 4px;
  `,
  RouteText: styled(Text)`
    margin-top: 42px;
  `,
};

const CardEditContainer = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background-color: white;
  right: -12px;
  bottom: -12px;
`;
