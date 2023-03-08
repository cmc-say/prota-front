import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

export function WorldCard() {
  return (
    <CardWrapper>
      <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_CAPTION_01}>
        방 인원 14명
      </Text>
    </CardWrapper>
  );
}

// const WorldCardStyled = {
//   cardWrapper: styled.div`
//     width: 100%;

//   `
// }
const CardWrapper = styled.div`
  width: 100%;
  padding: 14px;
  background-color: ${ColorType.PRIMARY1};
`;
