import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  subTitle?: string | false;
  error?: boolean;
  children: React.ReactNode;
  isBack?: boolean;
  popStack?: number;
  href?: string;
};

export const FooterBtn: React.FC<Props> = ({
  subTitle,
  error = false,
  children,
  isBack,
  popStack,
  href = "/",
}) => {
  const router = useRouter();
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

      {isBack ? (
        <Button onClick={() => router.back()}>
          <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_SUB_HEAD_01}>
            {children}
          </Text>
        </Button>
      ) : (
        <Button
          onClick={() => {
            if (!popStack) {
              return;
            }
            setTimeout(() => {
              router.replace(href);
            }, 100);
            for (let index = 0; index < popStack; index++) {
              router.back();
            }
          }}
        >
          <Link href={href}>
            <Text
              color={ColorType.NEUTRAL00}
              type={TextSizeType.KR_SUB_HEAD_01}
            >
              {children}
            </Text>
          </Link>
        </Button>
      )}
    </Footer>
  );
};

const Footer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  z-index: 10;
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
