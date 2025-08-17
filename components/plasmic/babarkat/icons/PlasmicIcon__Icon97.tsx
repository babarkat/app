/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon97IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon97Icon(props: Icon97IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 508 508"}
      xmlSpace={"preserve"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"254"} cy={"254"} r={"254"} fill={"#324a5e"}></circle>

      <path
        d={
          "M252 414h4c62.8 0 115.2-50.4 114-113.2 0-8-1.2-15.6-2.8-22.8-7.2-31.6-43.2-68-69.2-107.2-27.2-37.6-44-77.6-44-76.4-.4-.8-17.2 39.2-44 76.4-25.6 39.2-62 76-69.2 106.8-2 7.2-2.8 14.8-2.8 22.8-1.2 62.8 51.2 113.6 114 113.6z"
        }
        fill={"#54c0eb"}
      ></path>

      <g fill={"#84dbff"}>
        <path
          d={
            "M177.2 353.6c6-.4 9.6-6 7.2-10.8-3.2-7.2-6-14.8-7.2-22.8-1.6-8-2-15.6-1.6-23.2 1.2-32 32-75.2 51.6-118.4 2-3.6 3.6-7.6 5.2-11.2-.8 1.2-1.6 2.4-2.4 3.2-26.4 40.4-64 78.8-70.8 110-1.6 7.2-2.4 15.2-2.4 23.2.4 16.8 4.8 32 12.4 46 2 2.8 4.8 4.4 8 4z"
          }
        ></path>

        <ellipse
          transform={"rotate(-92.407 188.397 366.002)"}
          cx={"188.401"}
          cy={"365.998"}
          rx={"8.4"}
          ry={"9.2"}
        ></ellipse>
      </g>
    </svg>
  );
}

export default Icon97Icon;
/* prettier-ignore-end */
