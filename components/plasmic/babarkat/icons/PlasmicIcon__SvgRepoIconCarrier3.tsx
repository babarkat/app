// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SvgRepoIconCarrier3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SvgRepoIconCarrier3Icon(props: SvgRepoIconCarrier3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M7 2.07A8 8 0 114.07 5"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>

      <path
        d={
          "M12.83 11.926c-5.428 2.893-10.648 3.927-11.66 2.31-.532-.852.211-2.27 1.83-3.846m13.849-7.2c2.011-.37 3.49-.21 3.98.573.798 1.275-1.26 3.817-4.829 6.253"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SvgRepoIconCarrier3Icon;
/* prettier-ignore-end */
