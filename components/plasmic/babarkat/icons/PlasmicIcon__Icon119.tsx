/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon119IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon119Icon(props: Icon119IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#fff"} d={"M0 0h24v24H0z"}></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm7-.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM11.5 7a4.5 4.5 0 102.396 8.31l1.397 1.397a1 1 0 001.414-1.414l-1.397-1.397A4.5 4.5 0 0011.5 7z"
        }
        fill={"#323232"}
      ></path>
    </svg>
  );
}

export default Icon119Icon;
/* prettier-ignore-end */
