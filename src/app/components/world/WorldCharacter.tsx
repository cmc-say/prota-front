"use client";

import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Image from "next/image";

type Props = {
  src: string;
  value: string;
};

export const WorldCharacter: React.FC<Props> = ({ src, value }) => {
  return (
    <>
      <WorldCharacterStyled.Container>
        <WorldCharacterStyled.Icon
          width={44}
          height={44}
          alt={value}
          src={src}
        />
        <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_CAPTION_01}>
          {value}
        </Text>
      </WorldCharacterStyled.Container>
    </>
  );
};

const WorldCharacterStyled = {
  Container: styled(Layout.FlexColumn)`
    width: auto;
    align-items: center;
    row-gap: 4px;
  `,
  Icon: styled(Image)``,
};
