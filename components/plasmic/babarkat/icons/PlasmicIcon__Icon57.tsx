// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon57IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon57Icon(props: Icon57IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
      >
        <path
          d={
            "M28 26H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2z"
          }
        ></path>

        <path
          d={
            "M25 22H7c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1z"
          }
        ></path>

        <circle cx={"19"} cy={"15"} r={"4"}></circle>

        <path d={"M17 15h-4m-8-4h2m-2 8h2m1 7H4v3h3zm16 0h4v3h-3z"}></path>
      </g>
    </svg>
  );
}

export default Icon57Icon;
/* prettier-ignore-end */
