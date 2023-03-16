"use client";

import { Header } from "@/app/components/header/Header";
import { WorldCard } from "@/app/components/world/WorldCard";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

const mockupData = {
  characters: {
    status: 200,
    success: true,
    message: "정보 조회 성공",
    data: [
      {
        avatarId: 1,
        characterName: "steve_jobs",
        characterImg: "/icons/steve_jobs.svg",
        characterMessage: "캐릭터 상태메세지",
      },
      {
        avatarId: 2,
        characterName: "masterpiece",
        characterImg: "/icons/masterpiece.svg",
        characterMessage: "캐릭터 상태메세지",
      },
    ],
  },
  worlds: {
    statusCode: 200,
    message: "캐릭터가 가지고 있는 세계관 조회에 성공하였습니다.",
    data: [
      {
        worldId: 1,
        worldName: "세계관 하나",
        worldUserLimit: 10,
        worldImg: "url",
        worldStartDate: "2023-02-21T00:00:00",
        worldEndDate: "2023-03-21T00:00:00",
        hashtags: [
          {
            worldHashtagId: 1,
            hashtagId: 1,
            hashtagName: "해시태그1",
          },
          {
            worldHashtagId: 2,
            hashtagId: 2,
            hashtagName: "해시태그2",
          },
          {
            worldHashtagId: 3,
            hashtagId: 3,
            hashtagName: "해시태그3",
          },
        ],
        worldHostUserId: 1,
        worldNotice: "공지",
        worldPassword: "123",
        worldAvatars: [
          {
            worldAvatarId: 1,
            worldId: 1,
            avatarId: 1,
          },
          {
            worldAvatarId: 3,
            worldId: 1,
            avatarId: 2,
          },
          {
            worldAvatarId: 4,
            worldId: 1,
            avatarId: 3,
          },
        ],
      },
      {
        worldId: 2,
        worldName: "세계관 하나",
        worldUserLimit: 10,
        worldImg: "url",
        worldStartDate: "2023-02-21T00:00:00",
        worldEndDate: "2023-03-21T00:00:00",
        hashtags: [
          {
            worldHashtagId: 1,
            hashtagId: 1,
            hashtagName: "해시태그1",
          },
          {
            worldHashtagId: 2,
            hashtagId: 2,
            hashtagName: "해시태그2",
          },
          {
            worldHashtagId: 3,
            hashtagId: 3,
            hashtagName: "해시태그3",
          },
        ],
        worldHostUserId: 1,
        worldNotice: "공지",
        worldPassword: "123",
        worldAvatars: [
          {
            worldAvatarId: 1,
            worldId: 1,
            avatarId: 1,
          },
          {
            worldAvatarId: 3,
            worldId: 1,
            avatarId: 2,
          },
          {
            worldAvatarId: 4,
            worldId: 1,
            avatarId: 3,
          },
        ],
      },
      {
        worldId: 3,
        worldName: "세계관 하나",
        worldUserLimit: 10,
        worldImg: "url",
        worldStartDate: "2023-02-21T00:00:00",
        worldEndDate: "2023-03-21T00:00:00",
        hashtags: [
          {
            worldHashtagId: 1,
            hashtagId: 1,
            hashtagName: "해시태그1",
          },
          {
            worldHashtagId: 2,
            hashtagId: 2,
            hashtagName: "해시태그2",
          },
          {
            worldHashtagId: 3,
            hashtagId: 3,
            hashtagName: "해시태그3",
          },
        ],
        worldHostUserId: 1,
        worldNotice: "공지",
        worldPassword: "123",
        worldAvatars: [
          {
            worldAvatarId: 1,
            worldId: 1,
            avatarId: 1,
          },
          {
            worldAvatarId: 3,
            worldId: 1,
            avatarId: 2,
          },
          {
            worldAvatarId: 4,
            worldId: 1,
            avatarId: 3,
          },
        ],
      },
      {
        worldId: 4,
        worldName: "세계관 둘 하나",
        worldUserLimit: 10,
        worldImg: "url",
        worldStartDate: "2023-02-21T00:00:00",
        worldEndDate: "2023-03-21T00:00:00",
        hashtags: [
          {
            worldHashtagId: 1,
            hashtagId: 4,
            hashtagName: "해시태그1",
          },
          {
            worldHashtagId: 4,
            hashtagId: 5,
            hashtagName: "해시태그4",
          },
          {
            worldHashtagId: 5,
            hashtagId: 6,
            hashtagName: "해시태그5",
          },
        ],
        worldHostUserId: 1,
        worldNotice: "공지",
        worldPassword: "123",
        worldAvatars: [
          {
            worldAvatarId: 2,
            worldId: 2,
            avatarId: 1,
          },
        ],
      },
      {
        worldId: 5,
        worldName: "세계관 둘 하나",
        worldUserLimit: 10,
        worldImg: "url",
        worldStartDate: "2023-02-21T00:00:00",
        worldEndDate: "2023-03-21T00:00:00",
        hashtags: [
          {
            worldHashtagId: 1,
            hashtagId: 4,
            hashtagName: "해시태그1",
          },
          {
            worldHashtagId: 4,
            hashtagId: 5,
            hashtagName: "해시태그4",
          },
          {
            worldHashtagId: 5,
            hashtagId: 6,
            hashtagName: "해시태그5",
          },
        ],
        worldHostUserId: 1,
        worldNotice: "공지",
        worldPassword: "123",
        worldAvatars: [
          {
            worldAvatarId: 2,
            worldId: 2,
            avatarId: 1,
          },
        ],
      },
      {
        worldId: 6,
        worldName: "세계관 둘 하나",
        worldUserLimit: 10,
        worldImg: "url",
        worldStartDate: "2023-02-21T00:00:00",
        worldEndDate: "2023-03-21T00:00:00",
        hashtags: [
          {
            worldHashtagId: 1,
            hashtagId: 4,
            hashtagName: "해시태그1",
          },
          {
            worldHashtagId: 4,
            hashtagId: 5,
            hashtagName: "해시태그4",
          },
          {
            worldHashtagId: 5,
            hashtagId: 6,
            hashtagName: "해시태그5",
          },
        ],
        worldHostUserId: 1,
        worldNotice: "공지",
        worldPassword: "123",
        worldAvatars: [
          {
            worldAvatarId: 2,
            worldId: 2,
            avatarId: 1,
          },
        ],
      },
    ],
  },
};

export default function PopularWorld() {
  return (
    <PopularWorldStyled.LWrapper>
      <Layout.Mobile>
        <PopularWorldStyled.Container>
          <Header></Header>
          <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_HEAD_03}>
            실시간 인기 세계관
          </Text>
          <PopularWorldStyled.WorldGapList>
            {mockupData.worlds.data.map((item) => (
              <WorldCard key={item.worldId} data={item} />
            ))}
          </PopularWorldStyled.WorldGapList>
        </PopularWorldStyled.Container>
      </Layout.Mobile>
    </PopularWorldStyled.LWrapper>
  );
}

const PopularWorldStyled = {
  LWrapper: styled(Layout.Wrapper)`
    overflow-y: scroll;
  `,
  WorldGapList: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  `,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  `,
  Title: styled(Text)``,
};
