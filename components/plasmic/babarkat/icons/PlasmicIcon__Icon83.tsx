/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon83IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon83Icon(props: Icon83IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.823 0h6.944c.236 0 .411.259.263.495L8.61 6.419h4.97c.264 0 .43.315.228.538L2.592 20.164c-.227.268-.68.017-.527-.341l3.524-9.4H.317a.317.317 0 01-.276-.474L4.531.186A.317.317 0 014.823 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon83Icon;
/* prettier-ignore-end */
