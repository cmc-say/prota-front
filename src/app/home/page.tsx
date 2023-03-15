"use client";
// import "swiper/swiper.css";
// import "./swiper.add.css";
// import "swiper/css/pagination";

import styled from "@emotion/styled";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import { CharacterCard } from "../components/home/CharacterCard";
import { css } from "@emotion/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import { ColorType } from "@/styled/color.type";
import { useState } from "react";
import { Theme } from "@/styled/theme";
import { Toggle } from "../components/home/Toggle";
import { CheckListCard } from "../components/home/CheckListCard";
import { useRecoilState } from "recoil";
import { onBoardState } from "../onboard/store/onBoardStore";
import { TopBar } from "../components/onboard/TopBar";

export default function HomePage() {
  const [percent, setPercent] = useState<number>(20);
  const [isToggleOn, setToggleState] = useState(true);
  const [state, _] = useRecoilState(onBoardState);
  const handleToggleContainerClick = () => {
    setToggleState((prev) => !prev);
  };

  return (
    <>
      <Layout.Wrapper>
        <Layout.Mobile>
          <Layout.FlexColumn>
            <Theme.Light></Theme.Light>
            {state}
            <TopBar></TopBar>
            <div onClick={handleToggleContainerClick}>
              <Toggle initialOnOff={isToggleOn}></Toggle>
            </div>
            {isToggleOn ? (
              <>
                <Swiper
                  modules={[Pagination]}
                  className={css`
                    width: 100%;
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
                <GraphText
                  color={ColorType.NEUTRAL00}
                  type={TextSizeType.KR_SUB_HEAD_01}
                >
                  캐릭터 과몰입 그래프
                </GraphText>
                <Container>
                  <Background />
                  <ProgressText
                    color={ColorType.NEUTRAL300}
                    type={TextSizeType.KR_CAPTION_01}
                    percent={percent}
                  >
                    {percent}
                  </ProgressText>
                  <Progress percent={percent} />
                </Container>
              </>
            ) : (
              <CheckListCard
                index={1}
                imageSrc="./"
                characterName="사과 농사꾼"
                characterDescription="흠 이정도면 잘익었군..."
              ></CheckListCard>
            )}
          </Layout.FlexColumn>
        </Layout.Mobile>
      </Layout.Wrapper>
    </>
  );
}

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
