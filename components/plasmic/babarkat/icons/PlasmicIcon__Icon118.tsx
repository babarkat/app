/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon118IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon118Icon(props: Icon118IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 004.58-4.74C16.75 4.13 14.62 2 12 2z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M6.93 14.15c2.81-1.86 7.36-1.86 10.15 0 1.26.84 1.95 1.98 1.96 3.21 0 1.24-.7 2.38-1.96 3.23-1.4.94-3.24 1.41-5.08 1.41-1.84 0-3.68-.47-5.08-1.41-1.26-.84-1.96-1.98-1.96-3.21s.7-2.38 1.97-3.23zm5.82 2.48H14c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.25H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25v-1.25c0-.41.34-.75.75-.75s.75.34.75.75v1.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon118Icon;
/* prettier-ignore-end */
