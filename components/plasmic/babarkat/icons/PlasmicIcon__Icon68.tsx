// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon68IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon68Icon(props: Icon68IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      data-name={"24x24/On Light/Support"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"none"} d={"M0 0h24v24H0z"}></path>

      <path
        d={
          "M9.75 20.001a2.749 2.749 0 015.127-1.382c2.09-.922 2.873-2.369 2.873-5.119v-3c0-3.992-2.251-6.75-5.75-6.75S6.25 6.509 6.25 10.5V14a.751.751 0 01-.75.75h-1a2.753 2.753 0 01-2.75-2.749v-1A2.754 2.754 0 014.5 8.25h.478c.757-3.571 3.348-6 7.022-6s6.264 2.429 7.021 6h.478a2.754 2.754 0 012.75 2.75v1a2.753 2.753 0 01-2.75 2.75h-.309a5.85 5.85 0 01-3.94 5.34 2.75 2.75 0 01-5.5-.089zm1.5 0a1.25 1.25 0 101.25-1.25 1.251 1.251 0 00-1.25 1.25zm8-6.75h.249a1.251 1.251 0 001.251-1.25v-1A1.251 1.251 0 0019.5 9.75h-.25zm-16-2.25v1A1.251 1.251 0 004.5 13.25h.25v-3.5H4.5a1.251 1.251 0 00-1.25 1.251z"
        }
        fill={"#141124"}
      ></path>
    </svg>
  );
}

export default Icon68Icon;
/* prettier-ignore-end */
