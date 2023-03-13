import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

export const TagIcon = () => {
  return (
    <TagIconStyled.Container color="#5960FF">
      <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_BODY_01}>
        #해리포터
      </Text>
    </TagIconStyled.Container>
  );
};

const TagIconStyled = {
  Container: styled.div`
    padding: 8px 16px;
    background: ${(props) => props.color};
    border-radius: 40px;
  `,
};
