/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon154IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon154Icon(props: Icon154IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      x={"0"}
      y={"0"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <linearGradient
        id={"a"}
        x1={"194.922"}
        x2={"-21.212"}
        y1={"7.653"}
        y2={"190.549"}
        gradientTransform={"matrix(.9037 .0217 -.0552 .8824 134.734 100.119)"}
        gradientUnits={"userSpaceOnUse"}
      >
        <stop offset={"0"} stopColor={"#40b776"}></stop>

        <stop offset={".498"} stopColor={"#3eb576"}></stop>

        <stop offset={".751"} stopColor={"#36af76"}></stop>

        <stop offset={".949"} stopColor={"#29a476"}></stop>

        <stop offset={"1"} stopColor={"#24a076"}></stop>
      </linearGradient>

      <path
        fill={"url(#a)"}
        d={
          "M340.46 168.11 110.8 299.75V197.98c1.19-18.67 14.45-27.99 24.76-33.96L365.2 31v96.18c0 23.4-4.29 29.42-24.74 40.93"
        }
      ></path>

      <linearGradient
        id={"b"}
        x1={"119.769"}
        x2={"255.402"}
        y1={"318.688"}
        y2={"318.688"}
        gradientTransform={"matrix(.9978 -.0187 -.0275 1.0315 -1.897 -4.347)"}
        gradientUnits={"userSpaceOnUse"}
      >
        <stop offset={"0"} stopColor={"#40b776"}></stop>

        <stop offset={"1"} stopColor={"#24a076"}></stop>
      </linearGradient>

      <path
        fill={"url(#b)"}
        d={
          "m119.04 322.13 123.17 70.99-.02-55.3c-.43-10.31-7.22-17.48-12.64-20.55L110.8 248.65l.26 54.73c-.01 5.35.59 14.83 7.98 18.75"
        }
      ></path>

      <linearGradient
        id={"c"}
        x1={"207.264"}
        x2={"257.149"}
        y1={"381.558"}
        y2={"410.555"}
        gradientTransform={"rotate(9.032 717.115 670.935)"}
        gradientUnits={"userSpaceOnUse"}
      >
        <stop offset={"0"} stopColor={"#40b776"}></stop>

        <stop offset={".371"} stopColor={"#3bb376"}></stop>

        <stop offset={".823"} stopColor={"#2ca676"}></stop>

        <stop offset={"1"} stopColor={"#24a076"}></stop>
      </linearGradient>

      <path
        fill={"url(#c)"}
        d={"m242.21 393.12.17-118.31 60.91-35.17v118.89z"}
      ></path>

      <linearGradient
        id={"d"}
        x1={"276.294"}
        x2={"215.792"}
        y1={"434.711"}
        y2={"443.088"}
        gradientUnits={"userSpaceOnUse"}
      >
        <stop offset={"0"} stopColor={"#40b776"}></stop>

        <stop offset={"1"} stopColor={"#24a076"}></stop>
      </linearGradient>

      <ellipse
        cx={"244.05"}
        cy={"439.17"}
        fill={"url(#d)"}
        rx={"28.87"}
        ry={"31.82"}
      ></ellipse>
    </svg>
  );
}

export default Icon154Icon;
/* prettier-ignore-end */
