/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon113IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon113Icon(props: Icon113IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      fill={"currentColor"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <path
          d={
            "M29.176 26.128c5.847-2.127 10.03-4.81 5.703-10.34.297-11.146-18.474-13.271-23.182-.608-.532 2.439-.36 7.699 1.487 11.921.677 1.595.15 8.106-2.234 5.163-1.123-1.522-2.157-1.585-2.6-1.422-2.142 3.95 3.388 7.314 4.597 7.338 3.019 3.508 5.59 3.071 7.772 3.233m11.308-16.466c5.01 7.692 2.454 12.597-3.843 14.197"
          }
        ></path>

        <path
          d={
            "M18.155 25.723c.978.913 2.396.734 3.383.055.191-1.824 1.667-1.76 1.92.117 1.193-.024 2.44-.167 2.674.688.136.915-.635 1.449-1.797 1.29.054 1.834-.865 1.772-2.936 1.592-.682.301-1.304.424-1.929.559m3.331-8.603c5.011 1.965 9.508 1.553 12.185-2.666"
          }
        ></path>

        <ellipse
          cx={"25.085"}
          cy={"18.768"}
          rx={"1.116"}
          ry={"1.277"}
        ></ellipse>

        <ellipse cx={"32.833"} cy={"16.883"} rx={".93"} ry={"1.216"}></ellipse>

        <path
          d={
            "M20.522 40.002c6.872 13.72 14.196-18.17.526-6.194m13.52-4.578c11.28-7.012 2.678 13.07-1.86 8.09M25.829 6.57c-4.112-3.578-6.752-2.194-8.554 1.676-7.732-1.625-7.509 4.7-5.579 6.934-3.365 2.433-4.098 4.866.124 7.299-1.625.755-3.295 3.434 1.364 5.352-1.182.949-2.77 1.831-.124 3.406m24.073-15.363h2.63m-1.315-1.506v2.925"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon113Icon;
/* prettier-ignore-end */
