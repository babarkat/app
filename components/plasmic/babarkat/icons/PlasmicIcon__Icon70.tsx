/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon70IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon70Icon(props: Icon70IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 192 192"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g stroke={"currentColor"} strokeWidth={"12"}>
        <path
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          d={"M78 114V98m0 0V78h32a4 4 0 014 4v12a4 4 0 01-4 4H78z"}
        ></path>

        <path strokeLinejoin={"round"} d={"M34 54h124v84H34z"}></path>

        <path
          strokeLinecap={"round"}
          d={"M32 74H22m148 0h-10M32 118H22m148 0h-10"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon70Icon;
/* prettier-ignore-end */
