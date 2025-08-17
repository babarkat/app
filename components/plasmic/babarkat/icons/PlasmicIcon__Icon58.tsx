/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon58IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon58Icon(props: Icon58IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.904.466l-4.678 17.98h3.892a4.132 4.132 0 004.001-3.1L14 .46 6.904.466zM4.563 20.984a4.372 4.372 0 100 8.744 4.372 4.372 0 000-8.745z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon58Icon;
/* prettier-ignore-end */
