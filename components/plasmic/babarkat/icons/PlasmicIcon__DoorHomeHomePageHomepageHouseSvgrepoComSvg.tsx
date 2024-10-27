// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DoorHomeHomePageHomepageHouseSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function DoorHomeHomePageHomepageHouseSvgrepoComSvgIcon(
  props: DoorHomeHomePageHomepageHouseSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 28 28"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        clipRule={"evenodd"}
        d={
          "M16.338 1.944l9.633 7.88.05.055c.15.165.379.427.573.74.186.3.406.75.406 1.277v13.102A2.001 2.001 0 0125 27h-6.24a1.5 1.5 0 01-1.5-1.5v-4.706c0-1.8-1.454-3.253-3.243-3.253a3.248 3.248 0 00-3.243 3.253V25.5a1.5 1.5 0 01-1.5 1.5H3c-1.107 0-2-.899-2-2.002V11.742c0-.652.363-1.178.57-1.44a3.964 3.964 0 01.473-.498l.013-.01.004-.005.003-.002.644.764-.643-.765.01-.008 9.555-7.832a3.406 3.406 0 014.71-.002zM3.352 11.316l-.005.005a1.712 1.712 0 00-.21.224 1.05 1.05 0 00-.137.222V25h5.774v-4.206c0-2.9 2.345-5.254 5.243-5.254a5.248 5.248 0 015.243 5.254V25H25V11.895c0 .003 0 .003 0 0a.778.778 0 00-.105-.222 3.009 3.009 0 00-.307-.397l-9.584-7.84-.033-.033a1.406 1.406 0 00-1.974.001l-.033.032-9.612 7.879z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default DoorHomeHomePageHomepageHouseSvgrepoComSvgIcon;
/* prettier-ignore-end */
