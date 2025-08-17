/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon32Icon(props: Icon32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 16"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 2a1 1 0 00-1.707-.707l-6 6a1 1 0 000 1.414l6 6a1 1 0 101.414-1.414L6.414 8l5.293-5.293A1 1 0 0012 2zm0 0"
        }
        fill={"#2e3436"}
      ></path>
    </svg>
  );
}

export default Icon32Icon;
/* prettier-ignore-end */
