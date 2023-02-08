import { css } from "@emotion/react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { Colors } from "@/theme/Color";
export const BottomBar = () => {
  const models = [
    {
      title: "Home",
      src: "/bottomBar/home1.png",
      selected: "/bottomBar/home-selected.png",
      alt: "home",
      router: "/",
    },
    {
      title: "Message",
      src: "/bottomBar/message.png",
      alt: "Message",
      selected: "/bottomBar/message-selected.png",
      router: "messages",
    },
    {
      title: "Help",
      src: "/bottomBar/help-ic.svg",
      alt: "Help",
      selected: "/bottomBar/help-selected.png",
      router: "help",
    },
    {
      title: "News",
      src: "/bottomBar/news-ic.svg",
      alt: "News",
      selected: "/bottomBar/news-selected.png",
      router: "news",
    },
  ];

  const [isClicked, setIsClicked] = useState(0);
  const onClick = (index: number) => {
    setIsClicked(index);
  };
  const router = useRouter();
  return (
    <div css={sx.root}>
      {models.map((it, index) => (
        <div
          css={sx.innerBox}
          key={index}
          onClick={() => {
            onClick(index);
            router.push(`${it.router}`);
          }}
        >
          <Image
            src={index == isClicked ? it.selected : it.src}
            alt={it.alt}
            width={24}
            height={24}
          />

          <span css={sx.title(index == isClicked)}>{it.title}</span>
        </div>
      ))}
    </div>
  );
};

const sx = {
  title: (isClicked: boolean) => css`
    color: ${isClicked ? Colors.ActiveBlue : "#1A1A1A"};
  `,
  innerBox: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    cursor: pointer;
  `,
  root: css`
    width: 100%;
    height: 81px;
    border-top: solid 1px rgba(0, 0, 0, 0.05);
    display: flex;
    position: absolute;
    background-color: #fff;
    padding: 14px;
    bottom: 0;
    left: 0;
    justify-content: space-around;
    z-index: 55;
  `,
};
