"use client";

import { ColorType } from "@/styled/color.type";
import styled from "@emotion/styled";

export const Search = () => {
  return (
    <Styled.Container>
      <Styled.BlackIcon src="/icons/black_search_btn.svg" alt="black_search" />
      <Styled.SearchInput placeholder="검색어를 입력해 보세요~!" />
    </Styled.Container>
  );
};

const SearchStyled = {
  Container: styled.div`
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    gap: 4px;
    background: ${ColorType.NEUTRAL500};
    border-radius: 32px;
    margin-left: 16px;
  `,
  BlackIcon: styled.img``,
  SearchInput: styled.input`
    flex: 1 1 auto;
    background: none;
    border: none;
  `,
};

const Styled = SearchStyled;
