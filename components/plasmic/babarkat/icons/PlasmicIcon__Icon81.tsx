/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon81IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon81Icon(props: Icon81IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 100 100"}
      preserveAspectRatio={"xMidYMid"}
      style={{
        background: '0 0"',

        ...(style || {}),
      }}
      shapeRendering={"auto"}
      display={"block"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        strokeWidth={"6"}
        stroke={"#fff"}
        fill={"none"}
        r={"0"}
        cy={"50"}
        cx={"50"}
      >
        <animate
          begin={"0s"}
          calcMode={"spline"}
          keySplines={"0 0.2 0.8 1"}
          keyTimes={"0;1"}
          values={"0;42"}
          dur={"1s"}
          repeatCount={"indefinite"}
          attributeName={"r"}
        ></animate>

        <animate
          begin={"0s"}
          calcMode={"spline"}
          keySplines={"0.2 0 0.8 1"}
          keyTimes={"0;1"}
          values={"1;0"}
          dur={"1s"}
          repeatCount={"indefinite"}
          attributeName={"opacity"}
        ></animate>
      </circle>

      <circle
        strokeWidth={"6"}
        stroke={"#2dc57b"}
        fill={"none"}
        r={"0"}
        cy={"50"}
        cx={"50"}
      >
        <animate
          begin={"-0.5s"}
          calcMode={"spline"}
          keySplines={"0 0.2 0.8 1"}
          keyTimes={"0;1"}
          values={"0;42"}
          dur={"1s"}
          repeatCount={"indefinite"}
          attributeName={"r"}
        ></animate>

        <animate
          begin={"-0.5s"}
          calcMode={"spline"}
          keySplines={"0.2 0 0.8 1"}
          keyTimes={"0;1"}
          values={"1;0"}
          dur={"1s"}
          repeatCount={"indefinite"}
          attributeName={"opacity"}
        ></animate>
      </circle>
    </svg>
  );
}

export default Icon81Icon;
/* prettier-ignore-end */
