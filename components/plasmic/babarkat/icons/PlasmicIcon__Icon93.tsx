/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon93IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon93Icon(props: Icon93IconProps) {
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
        <path
          d={
            "M16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.046 3.046 0 00-1.881 1.936C3 4.581 3 5.177 3 6.37v14.004c0 .858.985 1.314 1.608.744a.946.946 0 011.284 0l.483.442a1.657 1.657 0 002.25 0 1.657 1.657 0 012.25 0 1.657 1.657 0 002.25 0 1.657 1.657 0 012.25 0 1.657 1.657 0 002.25 0l.483-.442a.946.946 0 011.284 0c.623.57 1.608.114 1.608-.744V6.37c0-1.193 0-1.79-.158-2.27a3.045 3.045 0 00-1.881-1.937C18.493 2 17.914 2 16.755 2z"
          }
        ></path>

        <path
          d={"M10.5 11H17M7 11h.5M7 7.5h.5m-.5 7h.5m3-7H17m-6.5 7H17"}
          strokeLinecap={"round"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon93Icon;
/* prettier-ignore-end */
