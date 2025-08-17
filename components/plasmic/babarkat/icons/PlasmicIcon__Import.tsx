/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ImportIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ImportIcon(props: ImportIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeOpacity={".72"}
        strokeWidth={"1.5"}
        d={"m9.32 11.68 2.56 2.56 2.56-2.56M11.88 4v10.17"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeOpacity={".72"}
        strokeWidth={"1.5"}
        d={"M20 12.18c0 4.42-3 8-8 8s-8-3.58-8-8"}
      ></path>
    </svg>
  );
}

export default ImportIcon;
/* prettier-ignore-end */
