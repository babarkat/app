// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SvgRepoIconCarrier4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SvgRepoIconCarrier4Icon(props: SvgRepoIconCarrier4IconProps) {
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
        d={"M5 5h4"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M21 7.5c0-.077 0-.533-.002-.565-.036-.501-.465-.9-1.005-.933C19.959 6 19.918 6 19.834 6h-2.602C15.446 6 14 7.343 14 9s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002.54-.033.97-.432 1.005-.933.002-.032.002-.488.002-.565"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>

      <path d={"M17 10a1 1 0 100-2 1 1 0 000 2z"} fill={"currentColor"}></path>

      <path
        d={
          "M12 1c3.771 0 5.657 0 6.828 1.172.809.808 1.06 1.956 1.137 3.828M9 17h3c3.771 0 5.657 0 6.828-1.172.809-.808 1.06-1.956 1.137-3.828M8 1c-3.114.01-4.765.108-5.828 1.172C1 3.343 1 5.229 1 9c0 3.771 0 5.657 1.172 6.828.653.654 1.528.943 2.828 1.07"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default SvgRepoIconCarrier4Icon;
/* prettier-ignore-end */
