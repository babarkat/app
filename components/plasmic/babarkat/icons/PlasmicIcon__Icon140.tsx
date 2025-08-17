/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon140IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon140Icon(props: Icon140IconProps) {
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
        fill={"#1B232A"}
        d={
          "M22.21 17.21h-3.42v-3.42A.795.795 0 0 0 18 13a.795.795 0 0 0-.79.79v3.42h-3.42A.795.795 0 0 0 13 18c0 .432.358.79.79.79h3.42v3.42c0 .432.358.79.79.79s.79-.358.79-.79v-3.42h3.42c.432 0 .79-.358.79-.79a.795.795 0 0 0-.79-.79"
        }
      ></path>
    </svg>
  );
}

export default Icon140Icon;
/* prettier-ignore-end */
