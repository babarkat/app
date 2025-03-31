/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon62IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon62Icon(props: Icon62IconProps) {
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

      <path
        d={
          "M6.723 5.48a5.251 5.251 0 118.265 4.802M7.44 3.353a8.71 8.71 0 006.26 2.65 8.706 8.706 0 003.347-.666m-6.224 4.416a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-6-2.578v1.078a3 3 0 003 3h1.423m12.454 12a9.74 9.74 0 00-5.23-8.634M2.2 23.253a9.741 9.741 0 015.225-8.632"
        }
        stroke={"#71717A"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon62Icon;
/* prettier-ignore-end */
