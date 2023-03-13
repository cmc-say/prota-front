"use client";
import { Header } from "@/app/components/header/Header";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";

export default function WordToday() {
  return (
    <Layout.Wrapper>
      <Layout.Mobile>
        <Layout.FlexColumn>
          <Container>
            <Header></Header>
            <TextBox placeholder="내일도 열심히 해야지~" />
            <FooterBtn subTitle="내가 참여한 세계관에 오늘의 한 마디가 보여집니다.">
              작성 완료했어요!
            </FooterBtn>
          </Container>
        </Layout.FlexColumn>
      </Layout.Mobile>
    </Layout.Wrapper>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextBox = styled.textarea`
  width: 100%;
  height: 144px;
  resize: none;
  color: #474e69;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  padding: 10px;
  background: none;
  outline: none;
  border: none;
`;
