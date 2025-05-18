/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon120IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon120Icon(props: Icon120IconProps) {
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
        <circle cx={"10"} cy={"10"} r={"6"}></circle>

        <path d={"M14.5 14.5L19 19"}></path>
      </g>
    </svg>
  );
}

export default Icon120Icon;
/* prettier-ignore-end */
