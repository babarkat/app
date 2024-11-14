// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon46IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon46Icon(props: Icon46IconProps) {
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

      <path
        d={
          "M21 8.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2h5.875M19 14v-2a2 2 0 10-4 0v2m-1 6h6a1 1 0 001-1v-4a1 1 0 00-1-1h-6a1 1 0 00-1 1v4a1 1 0 001 1z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <circle cx={"7.5"} cy={"8.5"} r={"1.5"} fill={"currentColor"}></circle>

      <circle cx={"12"} cy={"8.5"} r={"1.5"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Icon46Icon;
/* prettier-ignore-end */
