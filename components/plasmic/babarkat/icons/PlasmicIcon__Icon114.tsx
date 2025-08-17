/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon114IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon114Icon(props: Icon114IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      fill={"currentColor"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24 2.5C12.126 2.5 2.5 12.126 2.5 24c0 5.49 2.075 10.484 5.462 14.283-.971 2.801-2.994 3.675-5.462 4.567 2.26 2.182 6.668 2.76 10.623-.327A21.368 21.368 0 0024 45.5c11.874 0 21.5-9.626 21.5-21.5S35.874 2.5 24 2.5z"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <rect
        x={"31.64"}
        y={"19.888"}
        width={"5.818"}
        height={"7.709"}
        rx={"2.909"}
        ry={"2.909"}
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></rect>

      <g
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <path
          d={
            "M16.918 22.797a2.909 2.909 0 012.909-2.91h0a2.909 2.909 0 012.909 2.91v4.8m-5.818-7.709v7.709"
          }
        ></path>

        <path
          d={
            "M22.736 22.797a2.909 2.909 0 012.909-2.91h0a2.909 2.909 0 012.909 2.91v4.8"
          }
        ></path>
      </g>

      <circle
        cx={"13.56"}
        cy={"17.179"}
        r={".75"}
        fill={"currentColor"}
      ></circle>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        d={"M13.56 19.888v7.709"}
      ></path>
    </svg>
  );
}

export default Icon114Icon;
/* prettier-ignore-end */
