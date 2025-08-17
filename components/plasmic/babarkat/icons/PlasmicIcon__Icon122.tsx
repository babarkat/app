/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon122IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon122Icon(props: Icon122IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M11.25 18c0 .41.34.75.75.75s.75-.34.75-.75v-.58h.65c1.48 0 2.68-1.25 2.69-2.78 0-1.79-1.05-2.37-1.83-2.64l-1.51-.532V8.08h.36c.81 0 1.47.71 1.47 1.58 0 .41.34.75.75.75s.75-.34.75-.75c0-1.7-1.33-3.08-2.97-3.08h-.36V6c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.58h-.65c-1.48 0-2.69 1.24-2.69 2.78 0 1.79 1.05 2.37 1.83 2.64l1.51.532v3.388h-.36c-.81 0-1.47-.71-1.47-1.58 0-.41-.34-.75-.75-.75s-.75.34-.75.75c0 1.7 1.33 3.08 2.97 3.08h.36V18zm1.5-2.08h.65c.65 0 1.19-.58 1.19-1.28 0-.87-.31-1.04-.82-1.22l-1.02-.36v2.86zm-1.5-4.98V8.08h-.65c-.65 0-1.19.58-1.19 1.28 0 .87.31 1.04.82 1.22l1.02.36z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon122Icon;
/* prettier-ignore-end */
