import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import React from "react";

function Checkbox({ text }: { text: string }) {
  return (
    <>
      <StyledLabel htmlFor={text}>
        <Text color={ColorType.NEUTRAL100} type={TextSizeType.KR_SUB_HEAD_01}>
          {text}
        </Text>
      </StyledLabel>
      <StyledInput type="checkbox" id={text} name={text} />
    </>
  );
}

export default Checkbox;

const StyledLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: default;

  &:after {
    display: block;
    content: "";
    height: 20px;
    width: 20px;
    background-color: ${ColorType.NEUTRAL300};

    border-radius: 2px;
  }

  &:before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: block;
    opacity: 0;
    content: "";
    height: 20px;
    width: 20px;
    border-radius: 2px;

    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
  }
`;

const StyledInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
`;
