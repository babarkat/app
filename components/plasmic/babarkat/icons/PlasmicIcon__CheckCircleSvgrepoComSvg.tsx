// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckCircleSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckCircleSvgrepoComSvgIcon(
  props: CheckCircleSvgrepoComSvgIconProps
) {
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

      <g
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      >
        <circle opacity={".5"} cx={"12"} cy={"12"} r={"10"}></circle>

        <path
          d={"M8.5 12.5l2 2 5-5"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
      </g>

      <g stroke={"currentColor"} strokeWidth={"1.5"}>
        <circle opacity={".5"} cx={"12"} cy={"12"} r={"10"}></circle>

        <path
          d={"M8.5 12.5l2 2 5-5"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
      </g>
    </svg>
  );
}

export default CheckCircleSvgrepoComSvgIcon;
/* prettier-ignore-end */
