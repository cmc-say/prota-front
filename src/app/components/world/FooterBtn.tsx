import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

export const FooterBtn: React.FC<Props> = ({ children }) => {
  return (
    <Button>
      <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_SUB_HEAD_01}>
        {children}
      </Text>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 28px;
  gap: 10px;

  position: fixed;
  width: 342px;
  height: 54px;
  left: 50%;
  transform: translateX(-50%);
  top: 740px;

  background: #5960ff;
  border-radius: 400px;
  border: none;
`;
