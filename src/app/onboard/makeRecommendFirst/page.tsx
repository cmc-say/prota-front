"use client";

import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import React from "react";
import { Button } from "@/styled/button";
import { WorldRectBox } from "@/app/components/world/WorldRectBox";
import { Layout } from "@/styled/layout";
import { Header } from "@/app/components/header/Header";
import Link from "next/link";

export default function FirstOnBoard() {
  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header />
          <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_HEAD_02}>
            세계관 추천 목록이에요.
          </Text>
          <Styled.GridContainer>
            <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
            <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
            <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
            <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
            <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
            <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
            <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
            <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
            <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
            <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
            <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
            <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
          </Styled.GridContainer>
          <Styled.BottomButtonContainer>
            <Styled.DIYBottomButton>
              <Link href={"/onboard/makeWorldFirst"}>
                <Text
                  color={ColorType.NEUTRAL00}
                  type={TextSizeType.KR_SUB_HEAD_01}
                >
                  직접 만들래요!
                </Text>
              </Link>
            </Styled.DIYBottomButton>
            <Styled.SelectedBottomButton>
              <Link href={"/onboard/makeRecommendSecond"}>
                <Text
                  color={ColorType.NEUTRAL00}
                  type={TextSizeType.KR_SUB_HEAD_01}
                >
                  선택했어요!
                </Text>
              </Link>
            </Styled.SelectedBottomButton>
          </Styled.BottomButtonContainer>
          <Styled.BottomScrollBlur></Styled.BottomScrollBlur>
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const BottomButton = styled(Button)`
  width: 164px;
  height: 54px;
`;

const MakeRecommendFirstStyled = {
  LWrapper: styled(Layout.Wrapper)`
    overflow-y: scroll;
  `,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
  `,
  GridContainer: styled.div`
    width: 100%;
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    flex: 1;
    padding-bottom: 120px;
  `,
  BottomButtonContainer: styled.div`
    position: fixed;
    width: max-content;
    height: 54px;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 9;
  `,
  DIYBottomButton: styled(BottomButton)`
    margin-right: 16px;
    background: ${ColorType.NEUTRAL300};
  `,
  SelectedBottomButton: styled(BottomButton)`
    background: ${ColorType.PRIMARY1};
  `,
  BottomScrollBlur: styled.div`
    position: fixed;
    width: 100%;
    height: 148px;
    bottom: 0;
    background: linear-gradient(180deg, rgba(21, 22, 28, 0) 0%, #15161c 100%);
  `,
};

const Styled = MakeRecommendFirstStyled;
