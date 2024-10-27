// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 9"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.75 8.5c-.41 0-.75-.34-.75-.75v-2c0-2.58-1.67-4.25-4.25-4.25h-10C3.17 1.5 1.5 3.17 1.5 5.75v2c0 .41-.34.75-.75.75S0 8.16 0 7.75v-2C0 2.31 2.31 0 5.75 0h10c3.44 0 5.75 2.31 5.75 5.75v2c0 .41-.34.75-.75.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
