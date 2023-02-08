import { BottomBar } from "@/components/bottomBar";
import { css } from "@emotion/react";

import { Content, SearchBar } from "./component";

export const HelpView = () => {
  return (
    <div css={sx.root}>
      <div css={sx.header}>
        <span>Help</span>
        <SearchBar />
      </div>
      <Content />
      <BottomBar />
    </div>
  );
};

const sx = {
  header: css`
    background: #6787b7;
    color: #fff;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 700;
    font-size: 18px;
    padding: 22px 0 11px 0;
    justify-content: space-between;
  `,
  root: css`
    width: 400px;
    height: 682.18px;
    border-radius: 16px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.16);
  `,
};
