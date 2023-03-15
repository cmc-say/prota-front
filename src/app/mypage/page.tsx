"use client";

import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";
import { Header } from "../components/header/Header";
import { Text } from "@/styled/typography";
import { WorldRectBox } from "../components/world/WorldRectBox";

export default function MyPage() {
  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header />
          <Styled.Attainment></Styled.Attainment>
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
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}
const MyPageStyled = {
  LWrapper: styled(Layout.Wrapper)`
    overflow-y: scroll;
  `,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
  `,
  Attainment: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  `,
  Title: styled(Text)``,
  GridContainer: styled.div`
    width: 100%;
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    flex: 1;
    padding-bottom: 120px;
  `,
};

const Styled = MyPageStyled;
