/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon125IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon125Icon(props: Icon125IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g stroke={"currentColor"} strokeWidth={"1.5"}>
        <circle cx={"12"} cy={"6"} r={"4"}></circle>

        <path
          d={
            "M19.997 18c.003-.164.003-.331.003-.5 0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S4 22 12 22c2.231 0 3.84-.157 5-.437"
          }
          strokeLinecap={"round"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon125Icon;
/* prettier-ignore-end */
