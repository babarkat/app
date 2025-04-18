/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon105IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon105Icon(props: Icon105IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"6.5"} cy={"6.5"} r={"6.5"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Icon105Icon;
/* prettier-ignore-end */
