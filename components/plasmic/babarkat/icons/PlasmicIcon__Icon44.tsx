/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon44IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon44Icon(props: Icon44IconProps) {
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
          d={"M21 13V8a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h7"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>

        <path
          clipRule={"evenodd"}
          d={
            "M20.879 16.917c.494.304.463 1.043-.045 1.101l-2.567.291-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525l5.318 3.271z"
          }
        ></path>

        <path
          d={"M12 11.01l.01-.011m3.99.011l.01-.011M8 11.01l.01-.011"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon44Icon;
/* prettier-ignore-end */
