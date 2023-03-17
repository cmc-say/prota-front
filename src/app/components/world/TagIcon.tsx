import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

type Props = {
  item: {
    name: string;
    color: string;
    background: string;
  };
};

export const TagIcon: React.FC<Props> = ({ item }) => {
  return (
    <TagIconStyled.Container color={item.background}>
      <Text color={item.color} type={TextSizeType.KR_BODY_01}>
        {item.name}
      </Text>
    </TagIconStyled.Container>
  );
};

const TagIconStyled = {
  Container: styled.div`
    padding: 8px 16px;
    width: fit-content;
    background-color: ${(props) => props.color};
    border-radius: 40px;
  `,
};
