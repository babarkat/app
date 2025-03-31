/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon40IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon40Icon(props: Icon40IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 137 137"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M132 68.5c0 35.085-28.415 63.5-63.5 63.5S5 103.585 5 68.5 33.415 5 68.5 5 132 33.415 132 68.5z"
        }
        fill={"url(#Y-gfX3xTOtQga)"}
        stroke={"#fff"}
        strokeWidth={"10"}
      ></path>

      <path
        d={
          "M56.102 100c-2.218 0-1.82-.862-2.616-2.989L47 75.403 87.278 50 92 51.264 88.075 62.07 56.102 100z"
        }
        fill={"#C8DAEA"}
      ></path>

      <path
        d={
          "M56 100c1.714 0 2.457-.814 3.429-1.744C60.914 96.802 80 77.907 80 77.907L68.286 75l-10.857 6.977L56 99.419V100z"
        }
        fill={"#A9C9DD"}
      ></path>

      <path
        d={
          "M56.957 82.592L84.4 103.15c3.118 1.727 5.386.863 6.18-2.937l11.169-53.435c1.134-4.664-1.757-6.737-4.762-5.355l-65.542 25.68c-4.48 1.843-4.423 4.377-.794 5.471l16.839 5.355 38.95-24.932c1.815-1.152 3.516-.519 2.155.748L56.957 82.592z"
        }
        fill={"url(#Y-gfX3xTOtQgb)"}
      ></path>

      <defs>
        <linearGradient
          id={"Y-gfX3xTOtQga"}
          x1={"88.576"}
          y1={"21.652"}
          x2={"54.326"}
          y2={"101.567"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#37AEE2"}></stop>

          <stop offset={"1"} stopColor={"#1E96C8"}></stop>
        </linearGradient>

        <linearGradient
          id={"Y-gfX3xTOtQgb"}
          x1={"73.394"}
          y1={"70.705"}
          x2={"87.886"}
          y2={"93.536"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#EFF7FC"}></stop>

          <stop offset={"1"} stopColor={"#fff"}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon40Icon;
/* prettier-ignore-end */
