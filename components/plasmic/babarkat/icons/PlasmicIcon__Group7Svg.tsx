/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group7SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group7SvgIcon(props: Group7SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect width={"40"} height={"40"} rx={"16"} fill={"#E3E8ED"}></rect>

      <path
        d={"M25 20h-9.429m3.143-4.714L14 20l4.714 4.714"}
        stroke={"#777"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group7SvgIcon;
/* prettier-ignore-end */
