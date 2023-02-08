import { css } from "@emotion/react";
import Image from "next/image";
import logo from "@/main/logo.png";

import { MessageBox, SendMessageBtn } from "./component";
import { BottomBar } from "@/components/bottomBar";

export const MessagesView = () => {
  return (
    <div css={sx.root}>
      <div css={sx.header}>Messages</div>
      <MessageBox />
      <SendMessageBtn />
      <BottomBar />
    </div>
  );
};

const sx = {
  header: css`
    background: #6787b7;
    color: #fff;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 18px;
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
