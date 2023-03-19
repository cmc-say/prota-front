"use client";

import { Worlds } from "@/app/atoms/atom";
import { Header } from "@/app/components/header/Header";
import { Search } from "@/app/components/world/Search";
import { TagIcon } from "@/app/components/world/TagIcon";
import { WorldCard } from "@/app/components/world/WorldCard";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import { useState } from "react";

const mockSearch = [
  {
    worldId: 1,
    worldName: "명화가 살아있다.",
    worldUserLimit: 10,
    worldImg: "/icons/명화1.svg",
    worldStartDate: "2023-02-21T00:00:00",
    worldEndDate: "2023-03-21T00:00:00",
    hashtags: [
      {
        worldHashtagId: 1,
        hashtagId: 1,
        hashtagName: "명화모임",
      },
      {
        worldHashtagId: 2,
        hashtagId: 2,
        hashtagName: "자기관리",
      },
      {
        worldHashtagId: 3,
        hashtagId: 3,
        hashtagName: "공부",
      },
      {
        worldHashtagId: 4,
        hashtagId: 4,
        hashtagName: "외국어",
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
];

const mockTag = [
  {
    name: "#뉴진스하입보이",
    color: ColorType.NEUTRAL00,
    background: ColorType.PRIMARY1,
  },
  {
    name: "#해리포터",
    color: ColorType.NEUTRAL600,
    background: ColorType.SECONDARY1,
  },
  {
    name: "#짱구는못말려",
    color: ColorType.NEUTRAL00,
    background: ColorType.TARTIARY1,
  },
  {
    name: "#범죄도시",
    color: ColorType.NEUTRAL00,
    background: ColorType.PRIMARY1,
  },
  {
    name: "#개구리소년",
    color: ColorType.NEUTRAL600,
    background: ColorType.SECONDARY1,
  },
];

export default function SearchWorld() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Worlds>([]);

  const onSearchEvent = () => {
    setData(mockSearch);
  };

  return (
    <SearchWorldStyled.LWrapper>
      <Layout.Mobile>
        <SearchWorldStyled.Container>
          <Header search back>
            <Search
              submit={onSearchEvent}
              value={search}
              onChange={setSearch}
            />
          </Header>
          {data.length ? (
            <>
              {data.map((item) => (
                <WorldCard key={item.worldId} data={item} />
              ))}
            </>
          ) : (
            <>
              <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_HEAD_03}>
                #실시간 인기 해시태그
              </Text>
              <SearchWorldStyled.TagList>
                {mockTag.map((item, index) => (
                  <TagIcon key={index} item={item} />
                ))}
              </SearchWorldStyled.TagList>
            </>
          )}
        </SearchWorldStyled.Container>
      </Layout.Mobile>
    </SearchWorldStyled.LWrapper>
  );
}

const SearchWorldStyled = {
  LWrapper: styled(Layout.Wrapper)`
    overflow-y: scroll;
  `,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  TagList: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    margin-top: 16px;
    align-items: center;
  `,
};
