/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconBackgroundIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconBackgroundIcon(props: IconBackgroundIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 56"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"28"} cy={"28"} r={"28"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default IconBackgroundIcon;
/* prettier-ignore-end */
