// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WifiSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WifiSvgrepoCom1SvgIcon(props: WifiSvgrepoCom1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-2.4 -2.4 28.8 28.8"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"-2.4"}
        y={"-2.4"}
        width={"28.8"}
        height={"28.8"}
        rx={"14.4"}
        fill={"#f2f6f7"}
      ></rect>

      <path
        d={
          "M1.333 8.074a1 1 0 101.334 1.49l-1.334-1.49zm20 1.49a1 1 0 101.334-1.49l-1.334 1.49zM12 19a1 1 0 100 2v-2zm.01 2a1 1 0 100-2v2zm2.68-3.96a1 1 0 001.346-1.48l-1.346 1.48zm3.364-3.7a1 1 0 001.346-1.48l-1.346 1.48zm-10.09 2.22a1 1 0 001.345 1.48l-1.345-1.48zM4.6 11.86a1 1 0 101.346 1.48L4.6 11.86zM2.667 9.566A13.944 13.944 0 0112 6V4A15.944 15.944 0 001.333 8.074l1.334 1.49zM12 6c3.586 0 6.856 1.347 9.333 3.565l1.334-1.49A15.944 15.944 0 0012 4v2zm0 15h.01v-2H12v2zm0-5c1.037 0 1.98.393 2.69 1.04l1.346-1.48A5.982 5.982 0 0012 14v2zm0-5c2.332 0 4.455.886 6.054 2.34l1.346-1.48A10.964 10.964 0 0012 9v2zm-2.69 6.04A3.982 3.982 0 0112 16v-2a5.982 5.982 0 00-4.036 1.56l1.345 1.48zm-3.364-3.7A8.964 8.964 0 0112 11V9a10.964 10.964 0 00-7.4 2.86l1.346 1.48z"
        }
        fill={"#d8db14"}
      ></path>
    </svg>
  );
}

export default WifiSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
