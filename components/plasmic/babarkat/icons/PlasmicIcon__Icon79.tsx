/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon79IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon79Icon(props: Icon79IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"}
        stroke={"#2DC57B"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M18.92 8.113l-.003-.004-.001-.002a.843.843 0 00-.315-.31l-6.187-3.48a.848.848 0 00-.828 0L5.4 7.797a.844.844 0 00-.315.311l-.002.002-.002.005a.843.843 0 00-.111.417v6.936a.845.845 0 00.43.736l6.187 3.48a.855.855 0 00.395.107l.017.002h.003c.007 0 .014-.002.02-.003a.842.842 0 00.393-.106l6.187-3.48a.845.845 0 00.43-.736V8.532a.842.842 0 00-.112-.419zm-7.058-3.306a.283.283 0 01.276 0l6.04 3.398-2.722 1.546-6.253-3.448 2.66-1.496zm.203 6.87l-6.24-3.475 2.801-1.575 6.256 3.45-2.817 1.6zm-6.39 4.036a.282.282 0 01-.144-.245V8.682l6.253 3.483-.061 6.95-6.048-3.402zm12.65 0l-6.04 3.398.062-6.946 2.819-1.602v3.16a.282.282 0 00.562 0v-3.48l2.74-1.556v6.781a.281.281 0 01-.143.245z"
        }
        fill={"#2DC57B"}
        stroke={"#2DC57B"}
        strokeWidth={".5"}
      ></path>

      <path
        d={"M9 6.5l6.5 3.5v4"}
        stroke={"#fff"}
        strokeWidth={"1.2"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Icon79Icon;
/* prettier-ignore-end */
