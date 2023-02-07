import { css } from "@emotion/react";

export const Graph = () => {
  return (
    <div css={sx.root}>
      <div></div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 193px;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06),
      0px 0px 0px 1px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
  `,
};
