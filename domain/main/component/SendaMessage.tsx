import { css } from "@emotion/react";
import Image from "next/image";
import send from "@/main/send-ic.png";
export const SendaMessage = () => {
  return (
    <div css={sx.root}>
      <div>
        <p css={sx.text1}>Send us a message</p>
        <p css={sx.text2}>We typically reply within a day</p>
      </div>
      <Image src={send} alt="send" width={13} height={14} />
    </div>
  );
};

const sx = {
  text1: css`
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
  `,
  text2: css`
    font-size: 14px;
    color: #737373;
    font-weight: 400;
    line-height: 21px;
  `,
  root: css`
    width: 100%;
    height: 74px;
    border-radius: 10px;
    background-color: #fff;
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06),
      0px 0px 0px 1px rgba(0, 0, 0, 0.08);
  `,
};
