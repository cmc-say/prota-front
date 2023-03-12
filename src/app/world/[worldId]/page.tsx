"use client";

import { Header } from "@/app/components/header/Header";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { WorldCharacter } from "@/app/components/world/WorldCharacter";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

export default function WorldDetail() {
  return (
    <Layout.Wrapper>
      <Layout.Mobile>
        <Layout.FlexColumn>
          <Container>
            <Header></Header>
            <SubHeader>
              <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_BODY_01}>
                공지사항 & 체크리스트 확인
              </Text>
            </SubHeader>
            <div></div>
            <div></div>
            <CheckListCharacter>
              <WorldCharacter
                size={66}
                src={"/icons/steve_jobs.svg"}
                value="이미지"
              />
              <WorldCharacter
                size={66}
                src={"/icons/steve_jobs.svg"}
                value="이미지"
              />
              <WorldCharacter
                size={66}
                src={"/icons/steve_jobs.svg"}
                value="이미지"
              />
              <WorldCharacter
                size={66}
                src={"/icons/steve_jobs.svg"}
                value="이미지"
              />
              <WorldCharacter
                size={66}
                src={"/icons/steve_jobs.svg"}
                value="이미지"
              />
              <WorldCharacter
                size={66}
                src={"/icons/steve_jobs.svg"}
                value="이미지"
              />
              <WorldCharacter
                size={66}
                src={"/icons/steve_jobs.svg"}
                value="이미지"
              />
              <WorldCharacter
                size={66}
                src={"/icons/steve_jobs.svg"}
                value="이미지"
              />
            </CheckListCharacter>
          </Container>
          <FooterBtn>오늘의 한 마디 작성할래요!</FooterBtn>
        </Layout.FlexColumn>
      </Layout.Mobile>
    </Layout.Wrapper>
  );
}

const WorldDetailStyled = {};

const Container = styled.div`
  padding: 24px;
`;

const SubHeader = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 19px;

  width: 342px;
  height: 40px;

  background: #474e69;
  border-radius: 200px;
  border: none;
`;

const Date = styled.div`
  margin: 16px 0;
`;

const CheckListCharacter = styled.div`
  display: flex;
  column-gap: 26px;
  justify-contents: space-between;
  flex-wrap: wrap;
`;
