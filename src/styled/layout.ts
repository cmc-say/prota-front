import styled from "@emotion/styled";
import { ColorType } from "./color.type";

export const Layout = {
  Wrapper: styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: ${ColorType.BACKGROUND};
  `,
  Mobile: styled.div`
    max-width: 390px;
    width: 100%;
    height: 100%;

    margin: auto;
  `,
};
