"use client";

import { Header } from "@/app/components/header/Header";
import { TagIcon } from "@/app/components/world/TagIcon";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

export default function SearchWorld() {
  return (
    <SearchWorldStyled.LWrapper>
      <Layout.Mobile>
        <SearchWorldStyled.Container>
          <Header />
          <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_HEAD_03}>
            #실시간 인기 해시태그
          </Text>
          <SearchWorldStyled.TagList>
            <TagIcon />
          </SearchWorldStyled.TagList>
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
  `,
};
