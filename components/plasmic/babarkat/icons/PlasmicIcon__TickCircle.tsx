/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TickCircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TickCircleIcon(props: TickCircleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M16 2.667C8.653 2.667 2.667 8.653 2.667 16S8.653 29.333 16 29.333 29.333 23.347 29.333 16 23.347 2.667 16 2.667m6.373 10.266-7.56 7.56a1 1 0 0 1-1.413 0L9.627 16.72a1.006 1.006 0 0 1 0-1.413 1.006 1.006 0 0 1 1.413 0l3.067 3.066 6.853-6.853a1.006 1.006 0 0 1 1.413 0 1.006 1.006 0 0 1 0 1.413"
        }
      ></path>
    </svg>
  );
}

export default TickCircleIcon;
/* prettier-ignore-end */
