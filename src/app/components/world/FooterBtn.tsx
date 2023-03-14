import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Link from "next/link";

type Props = {
  subTitle?: string | false;
  error?: boolean;
  children: React.ReactNode;
  href?: string;
};

export const FooterBtn: React.FC<Props> = ({
  subTitle,
  error = false,
  children,
  href = "/",
}) => {
  return (
    <Footer>
      {subTitle && (
        <SubTitle
          color={error ? ColorType.ERROR : ColorType.NEUTRAL100}
          type={TextSizeType.KR_CAPTION_01}
        >
          {subTitle}
        </SubTitle>
      )}
      <Button>
        <Link href={href}>
          <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_SUB_HEAD_01}>
            {children}
          </Text>
        </Link>
      </Button>
    </Footer>
  );
};

const Footer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50px;
`;

const SubTitle = styled(Text)``;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 28px;
  gap: 10px;

  width: 342px;
  height: 54px;

  background: #5960ff;
  border-radius: 400px;
  border: none;
`;
