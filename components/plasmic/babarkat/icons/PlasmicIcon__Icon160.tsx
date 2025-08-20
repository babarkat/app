/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon160IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon160Icon(props: Icon160IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      data-name={"Layer 1"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24 12a1 1 0 0 1-2 0A10.01 10.01 0 0 0 12 2a1 1 0 0 1 0-2 12.013 12.013 0 0 1 12 12m-8 1a1 1 0 0 0 0-2h-2.277a2 2 0 0 0-.723-.723V7a1 1 0 0 0-2 0v3.277A1.994 1.994 0 1 0 13.723 13ZM1.827 6.784a1 1 0 1 0 1 1 1 1 0 0 0-1-1M2 12a1 1 0 1 0-1 1 1 1 0 0 0 1-1m10 10a1 1 0 1 0 1 1 1 1 0 0 0-1-1M4.221 3.207a1 1 0 1 0 1 1 1 1 0 0 0-1-1M7.779.841a1 1 0 1 0 1 1 1 1 0 0 0-1-1M1.827 15.216a1 1 0 1 0 1 1 1 1 0 0 0-1-1m2.394 3.577a1 1 0 1 0 1 1 1 1 0 0 0-1-1m3.558 2.366a1 1 0 1 0 1 1 1 1 0 0 0-1-1m14.394-5.943a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-2.394 3.577a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-3.558 2.366a1 1 0 1 0 1 1 1 1 0 0 0-1-1"
        }
      ></path>
    </svg>
  );
}

export default Icon160Icon;
/* prettier-ignore-end */
