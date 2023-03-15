import { Text } from "@/styled/typography";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
  question?: string;
};

export const SubFooter: React.FC<Props> = ({ children, question }) => {
  return (
    <Styled.Container>
      {question && (
        <Styled.Message color={} type={}>
          {question}
        </Styled.Message>
      )}
      <Styled.Button>
        <Text color={} type={}>
          {children}
        </Text>
      </Styled.Button>
    </Styled.Container>
  );
};

const SubFooterStyled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Message: styled(Text)``,
  Button: styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px 8px 24px;
    gap: 10px;

    width: 152px;
    height: 36px;

    /* Neutral/Neutral 300 */

    background: #474e69;
    border-radius: 32px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  `,
};

const Styled = SubFooterStyled;
