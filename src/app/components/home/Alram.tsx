import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Image from "next/image";

export const Alarm = () => {
  return (
    <Styled.Container>
      <Styled.Dot />
      <Styled.Profile
        src={"/icons/steve_jobs.svg"}
        alt="profile"
        width={32}
        height={32}
      />
      <Styled.Description
        color={ColorType.NEUTRAL00}
        type={TextSizeType.KR_BODY_01}
      >
        눈썹리스 님이 잠자고 있는 당신의 대머리 캐릭터를 깨웠어요!: "그렇게
        살래요?"
      </Styled.Description>
      <Styled.Date
        color={ColorType.NEUTRAL200}
        type={TextSizeType.KR_CAPTION_02}
      >
        11:40PM
      </Styled.Date>
    </Styled.Container>
  );
};

const AlarmStyled = {
  Container: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
  `,
  Dot: styled.div`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${ColorType.TARTIARY1};
    margin-right: 4px;
  `,
  Profile: styled(Image)`
    margin-right: 6px;
  `,
  Description: styled(Text)`
    flex: 1 1 0;
    margin-right: 8px;
  `,
  Date: styled(Text)``,
};

const Styled = AlarmStyled;
