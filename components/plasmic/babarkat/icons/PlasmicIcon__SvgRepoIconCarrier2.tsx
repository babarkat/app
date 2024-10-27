// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SvgRepoIconCarrier2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SvgRepoIconCarrier2Icon(props: SvgRepoIconCarrier2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11 11h-.5c-1.405 0-2.107 0-2.611.337a2 2 0 00-.552.552C7 12.393 7 13.096 7 14.5c0 1.405 0 2.107.337 2.611a2 2 0 00.552.552C8.393 18 9.095 18 10.5 18h.5m0-7h.5c1.405 0 2.107 0 2.611.337.218.146.406.334.552.552.337.504.337 1.207.337 2.611M11 11v3.5m0 3.5h.5c1.405 0 2.107 0 2.611-.337.218-.146.406-.334.552-.552C15 16.607 15 15.904 15 14.5M11 18v-3.5m4 0h-4"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></path>

      <path
        d={
          "M1 11c0-4.714 0-7.071 1.464-8.536C3.93 1 6.286 1 11 1c.341 0 .512 0 .686.015a4.04 4.04 0 012.224.921c.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504.522.623.85 1.415.92 2.224.016.174.016.345.016.686 0 4.714 0 7.071-1.465 8.535C18.072 21 15.714 21 11 21s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default SvgRepoIconCarrier2Icon;
/* prettier-ignore-end */
