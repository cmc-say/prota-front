import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

type Props = {
  value: string;
  maxLength?: number;
  placeholder?: string;
  onChange?: (text: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const TextArea: React.FC<Props> = ({
  onChange,
  value,
  maxLength,
  placeholder = "",
}) => {
  return (
    <Styled.Container>
      <Styled.TextBox
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      ></Styled.TextBox>
      {maxLength && (
        <Styled.Count>
          {value.length}/{maxLength}
        </Styled.Count>
      )}
    </Styled.Container>
  );
};

const TextAreaStyled = {
  Container: styled.div`
    position: relative;
  `,
  TextBox: styled.textarea`
    width: 100%;
    height: 144px;
    resize: none;
    color: #efefef;
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    border: 1px solid ${ColorType.NEUTRAL100};
    padding: 10px;
    border-radius: 8px;
    background: none;
  `,
  Count: styled.span`
    color: ${ColorType.NEUTRAL300};
    font-size: 12px;
    position: absolute;
    bottom: 10px;
    right: 10px;
  `,
};

const Styled = TextAreaStyled;
