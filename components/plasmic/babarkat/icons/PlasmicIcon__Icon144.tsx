/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon144IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon144Icon(props: Icon144IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#2DC57B"}
        d={"M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"}
      ></path>

      <path
        fill={"#1B232A"}
        d={
          "M16.21 11.21h-3.42V7.79A.795.795 0 0 0 12 7a.795.795 0 0 0-.79.79v3.42H7.79A.795.795 0 0 0 7 12c0 .432.358.79.79.79h3.42v3.42c0 .432.358.79.79.79s.79-.358.79-.79v-3.42h3.42c.432 0 .79-.358.79-.79a.795.795 0 0 0-.79-.79"
        }
      ></path>
    </svg>
  );
}

export default Icon144Icon;
/* prettier-ignore-end */
