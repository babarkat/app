/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon23Icon(props: Icon23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"256"} cy={"256"} r={"256"} fill={"#47b0d3"}></circle>

      <path
        d={
          "M34.133 256C34.133 120.352 139.641 9.364 273.066.579A259.94 259.94 0 00256 0C114.615 0 0 114.615 0 256s114.615 256 256 256c5.737 0 11.424-.208 17.067-.579C139.642 502.636 34.133 391.648 34.133 256z"
        }
        fill={"#3298ba"}
      ></path>

      <path
        d={
          "M380.263 109.054a8.535 8.535 0 00-8.399-.679L96.777 236.433a13.472 13.472 0 00-7.766 12.501c.117 5.226 3.28 9.92 8.065 12.015l253.613 110.457c8.468 3.849 18.439-2.21 18.983-11.453l14.314-243.341a8.536 8.536 0 00-3.723-7.558z"
        }
        fill={"#e5e5e5"}
      ></path>

      <path
        fill={"#ccc"}
        d={"M171.631 293.421L188.772 408l190.396-299.568z"}
      ></path>

      <path
        d={
          "M371.866 108.375L96.777 236.433c-4.737 2.205-7.826 7.121-7.769 12.345.058 5.233 3.276 10.074 8.067 12.171l74.557 32.471 207.536-184.988a8.525 8.525 0 00-7.302-.057z"
        }
        fill={"#fff"}
      ></path>

      <path
        fill={"#e5e5e5"}
        d={"M211.418 310.749L188.772 408l190.396-299.568z"}
      ></path>

      <path
        d={
          "M380.263 109.054a8.382 8.382 0 00-1.095-.622l-167.75 202.317 139.27 60.657c8.468 3.849 18.439-2.21 18.983-11.453l14.314-243.341a8.533 8.533 0 00-3.722-7.558z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default Icon23Icon;
/* prettier-ignore-end */
