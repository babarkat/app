/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon88IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon88Icon(props: Icon88IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      viewBox={"-0.5 0 25 25"}
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        stroke={"#000"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <path
          d={
            "M12 22.42c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
          }
        ></path>

        <path d={"M16 10.99l-2.87 3.06a1.54 1.54 0 01-2.26 0L8 10.99"}></path>
      </g>
    </svg>
  );
}

export default Icon88Icon;
/* prettier-ignore-end */
