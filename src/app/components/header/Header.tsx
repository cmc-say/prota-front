"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

type Props = {
  back?: boolean;
  children?: React.ReactNode;
  action?: React.ReactNode;
  search?: boolean;
};

export const Header: React.FC<Props> = ({
  back = false,
  children = "",
  action,
  search = false,
}) => {
  const router = useRouter();

  console.log(search);

  const backClick = () => {
    router.back();
  };

  return (
    <Styled.Container>
      {back ? (
        <Styled.BackIcon
          onClick={backClick}
          src="/icons/back_btn.svg"
          alt="back_btn"
        />
      ) : (
        <Styled.Blank></Styled.Blank>
      )}
      <Styled.Children search={search}>{children}</Styled.Children>
      {action ? action : <Styled.Blank></Styled.Blank>}
    </Styled.Container>
  );
};

const NavStyled = {
  Container: styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    width: 100%;
    height: 52px;
    margin-bottom: 8px;
    align-items: center;
  `,
  BackIcon: styled.img``,
  Children: styled.div<{ search: boolean }>`
    ${(props) =>
      props.search
        ? `flex: 1 1 auto`
        : `
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    `}/* position: absolute;
    left: 50%;
    transform: translateX(-50%); */
    /* flex: 1 1 auto; */
  `,
  Blank: styled.div``,
};

const Styled = NavStyled;
