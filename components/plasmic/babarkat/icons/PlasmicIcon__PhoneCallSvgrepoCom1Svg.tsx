/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhoneCallSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhoneCallSvgrepoCom1SvgIcon(
  props: PhoneCallSvgrepoCom1SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-2.4 -2.4 28.8 28.8"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"-2.4"}
        y={"-2.4"}
        width={"28.8"}
        height={"28.8"}
        rx={"14.4"}
        fill={"#fdfcfc"}
      ></rect>

      <path
        opacity={".15"}
        d={
          "M21 16.477v2.71c.004 1.035-.928 1.9-1.974 1.806C10 21 3 13.935 3.007 4.969 2.913 3.93 3.774 3.001 4.808 3h2.715c.44-.004.865.151 1.198.437.947.812 1.556 3.57 1.322 4.667-.183.856-1.046 1.455-1.633 2.04a14.466 14.466 0 005.43 5.42c.587-.585 1.187-1.446 2.045-1.629 1.1-.234 3.877.376 4.686 1.329.287.338.44.77.428 1.213z"
        }
        fill={"#cbd818"}
      ></path>

      <path
        d={
          "M14.5 6.5c.737.144 1.469.469 2 1 .531.531.856 1.263 1 2M15 3c1.532.17 2.91.911 4 2 1.09 1.089 1.828 2.469 2 4m0 7.477v2.71c.004 1.035-.928 1.9-1.974 1.806C10 21 3 13.935 3.007 4.969 2.913 3.93 3.774 3.001 4.808 3h2.715c.44-.004.865.151 1.198.437.947.812 1.556 3.57 1.322 4.667-.183.856-1.046 1.455-1.633 2.04a14.466 14.466 0 005.43 5.42c.587-.585 1.187-1.446 2.045-1.629 1.1-.234 3.877.376 4.686 1.329.287.338.44.77.428 1.213z"
        }
        stroke={"#cbd818"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PhoneCallSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
