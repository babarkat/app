/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
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
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <circle cx={"12.478"} cy={"18.077"} r={".755"}></circle>

        <path
          d={
            "M16.516 16.024a4.529 4.529 0 00-8.076 0m-2.755-2.722a8.293 8.293 0 016.793-3.528 8.293 8.293 0 016.793 3.528"
          }
        ></path>

        <path
          d={
            "M21.974 10.614A12.056 12.056 0 0012.478 6 12.055 12.055 0 003 10.592"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
