/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RadioButtonCheckedSvgrepoCom2SvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function RadioButtonCheckedSvgrepoCom2SvgIcon(
  props: RadioButtonCheckedSvgrepoCom2SvgIconProps
) {
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

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0zm-8 4a4 4 0 100-8 4 4 0 000 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RadioButtonCheckedSvgrepoCom2SvgIcon;
/* prettier-ignore-end */
