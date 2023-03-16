"use client";

import { Header } from "@/app/components/header/Header";
import { FileUpload } from "@/app/components/onboard/FileUpload";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { InputBox } from "@/app/components/world/InputBox";
import { TextArea } from "@/app/components/world/TextArea";
import { Button } from "@/styled/button";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";
import React from "react";

export default function MakeCharacterOnBoard() {
  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header />
          <FileUpload />
          <Styled.Description>
            <InputBox placeholder="캐릭터 이름" value={""} maxLength={6} />
            <TextArea
              value=""
              placeholder="캐릭터 상태 메시지"
              maxLength={30}
            />
          </Styled.Description>
          <FooterBtn>캐릭터 생성 완료!</FooterBtn>
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const MakeCharacterStyled = {
  LWrapper: styled(Layout.Wrapper)`
    overflow-y: scroll;
  `,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
  `,
  Description: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  `,
};

const Styled = MakeCharacterStyled;

const RecommenedCheckListContainer = styled.div`
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  flex: 1;
  align-items: center;
  overflow: auto;
`;
const CheckListFormContainer = styled.div`
  width: 100%;
  margin-top: 32px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

const CheckListButton = styled(Button)<{ isSelected: boolean }>`
  margin-top: 8px;
  width: 342px;
  height: 50px;

  background: transparent;

  border: 1px solid ${ColorType.NEUTRAL500};
  border-radius: 999px;
`;

const MakeCheckListButton = styled(Button)`
  padding: 8px 14px;
  margin-top: 16px;
  background: transparent;
  width: max-content;
  height: max-content;

  border: 1px dashed ${ColorType.NEUTRAL200};
  border-radius: 32px;
`;

const BottomButtonContainer = styled.div`
  position: absolute;
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 79px;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 9;
`;

const ButtomButton = styled(Button)`
  width: 342px;
  height: 54px;

  background: ${ColorType.PRIMARY1};
  border-radius: 400px;
`;
