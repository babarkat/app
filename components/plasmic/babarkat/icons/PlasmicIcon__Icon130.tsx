/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon130IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon130Icon(props: Icon130IconProps) {
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
            "M18 9c1.657 0 3-1.12 3-2.5S19.657 4 18 4M6 9C4.343 9 3 7.88 3 6.5S4.343 4 6 4m11.197 11c.51.588.803 1.271.803 2 0 2.21-2.686 4-6 4s-6-1.79-6-4 2.686-4 6-4c.34 0 .675.019 1 .055M20 19c1.754-.385 3-1.359 3-2.5s-1.246-2.115-3-2.5M4 19c-1.754-.385-3-1.359-3-2.5s1.246-2.115 3-2.5"
          }
          strokeLinecap={"round"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon130Icon;
/* prettier-ignore-end */
