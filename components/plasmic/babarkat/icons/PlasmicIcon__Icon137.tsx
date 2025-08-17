/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon137IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon137Icon(props: Icon137IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 35"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#2DC57B"}
        stroke={"#2DC57B"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        d={"M15 28h6c5 0 7-2 7-7v-6c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"}
      ></path>

      <path
        fill={"#fff"}
        d={
          "M18.518 11.992V16.5h-1.125v-4.508c0-.307.255-.562.562-.562s.563.255.563.562"
        }
      ></path>

      <path
        fill={"#fff"}
        d={
          "M25.5 17.07c0 4.41-3.09 7.5-7.508 7.5-4.417 0-7.5-3.083-7.5-7.5 0-.36.293-.645.646-.645h6.255v2.745L16.215 18a.566.566 0 0 0-.795 0 .56.56 0 0 0-.165.398c0 .142.052.284.165.397l2.138 2.13c.217.225.57.225.787 0l2.137-2.13a.566.566 0 0 0 0-.795.566.566 0 0 0-.794 0l-1.17 1.17v-2.745h6.337a.64.64 0 0 1 .645.644"
        }
      ></path>
    </svg>
  );
}

export default Icon137Icon;
/* prettier-ignore-end */
