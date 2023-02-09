import { css } from "@emotion/react";
import Image from "next/image";
import logo from "@/main/logo.png";
import { PieChart, SearchforHelp, SendaMessage } from "./component";
import { BottomBar } from "@/components/bottomBar";

export const Mainview = () => {
  return (
    <div css={sx.root}>
      <div css={sx.blueBg}></div>
      <div css={sx.inner}>
        <Image src={logo} alt="logo" width={32} height={32} />
        <div css={sx.titleWrap}>
          <p css={sx.title1}>Hello there</p>
          <p css={sx.title2}>How can we help?</p>
        </div>
        <SendaMessage />
        <SearchforHelp />
        <PieChart />
      </div>
      <BottomBar />
    </div>
  );
};

const sx = {
  title2: css`
    color: #fff;
  `,
  title1: css`
    color: #fff;
    opacity: 0.7;
  `,
  titleWrap: css`
    margin-top: 76px;
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
  `,
  inner: css`
    padding-bottom: 20px;
    height: 100%;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  blueBg: css`
    width: 100%;
    height: 388px;
    background: linear-gradient(
      117.67deg,
      #3f6193 0%,
      #5b8dd7 50%,
      #cbddf0 100%
    );
    position: absolute;
    left: 0;
    top: 0;
  `,

  root: css`
    width: 400px;
    height: 682.18px;
    border-radius: 16px;
    position: relative;
    padding: 28px 16px 80px 16px;
    overflow: hidden;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.16);
    font-size: 14px;
  `,
};
