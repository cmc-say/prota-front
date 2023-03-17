"use client";

import styled from "@emotion/styled";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import { css } from "@emotion/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "./swiper.add.css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { ColorType } from "@/styled/color.type";
import { CharacterCard } from "@/app/components/home/CharacterCard";
import { Header } from "@/app/components/header/Header";
import { SubFooter } from "@/app/components/world/SubFooter";
import { FooterBtn } from "@/app/components/world/FooterBtn";

export default function CreateWorldFour() {
  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header back>캐릭터 선택</Header>
          <Swiper
            modules={[Pagination]}
            className={css`
              width: 100%;
              margin-top: 24px;
            `}
            pagination={{ clickable: true }}
            direction="horizontal"
            spaceBetween={0}
            slidesPerView={1}
          >
            <SwiperSlide>
              <CharacterCard
                index={1}
                imageSrc="./"
                characterName="사과 농사꾼"
                characterDescription="흠 이정도면 잘익었군..."
              ></CharacterCard>
            </SwiperSlide>
            <SwiperSlide>
              <CharacterCard
                index={2}
                imageSrc="./"
                characterName="사과 농사꾼 "
                characterDescription="흠 이정도면 잘익었군..."
              ></CharacterCard>
            </SwiperSlide>
            <SwiperSlide>
              <CharacterCard
                index={3}
                imageSrc="./"
                characterName="사과 농사꾼"
                characterDescription="흠 이정도면 잘익었군..."
              ></CharacterCard>
            </SwiperSlide>
          </Swiper>
          <SubFooter question="세계관의 캐릭터를 새로 만들래요">
            캐릭터 만들러가기 &gt;
          </SubFooter>
          <FooterBtn href="/world/1">세계관 시작하기!</FooterBtn>
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const CreateWorldFourStyled = {
  LWrapper: styled(Layout.Wrapper)``,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
  `,
};

const Styled = CreateWorldFourStyled;

const GraphText = styled(Text)`
  display: inline-block;
  width: 286px;
  margin: 50px auto 0px;
`;

const ProgressText = styled(Text)<{ percent: number }>`
  position: absolute;
  bottom: -4px;
  left: ${({ percent }) => `calc(${Math.max(percent, 9)}% - 20px)`};
  z-index: 10;
`;

const Container = styled.div`
  margin: 8px auto 0px;

  height: 14px;
  width: 286px;
  box-sizing: border-box;
  position: relative;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 999px;
  transition: width 1s ease-in-out;
`;

const Background = styled(BaseBox)`
  background: grey;
  width: 100%;
`;

const Progress = styled(BaseBox)<{ percent: number }>`
  background: ${ColorType.SECONDARY1};
  width: ${({ percent }) => percent}%;
`;
