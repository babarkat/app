/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon103IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon103Icon(props: Icon103IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 25 25"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.5 5.5c2 0 2 2.5 2 2.5v1.5m-2-4c-2 0-2 2.5-2 2.5v1.5h4m-2-4h11.167c1.833 0 1.833 3 1.833 3V20l-1.833-1-1.834 1L14 19l-1.833 1-1.834-1L8.5 20V9.5m2.5 3h4m-4-3h5m-5 6h5"
        }
        stroke={"currentColor"}
        strokeWidth={"1.2"}
      ></path>
    </svg>
  );
}

export default Icon103Icon;
/* prettier-ignore-end */
