// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon42Icon(props: Icon42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M391 233.948H121a45.132 45.132 0 00-45 45v162a45.132 45.132 0 0045 45h270a45.132 45.132 0 0045-45v-162a45.132 45.132 0 00-45-45zM184.123 369.379a9.895 9.895 0 11-9.896 17.14l-16.33-9.43v18.86a9.896 9.896 0 01-19.793 0v-18.86l-16.33 9.43a9.895 9.895 0 01-9.897-17.14l16.335-9.43-16.335-9.43a9.895 9.895 0 019.897-17.14l16.33 9.429v-18.86a9.896 9.896 0 0119.793 0v18.86l16.33-9.429a9.895 9.895 0 019.896 17.14l-16.334 9.43zm108 0a9.895 9.895 0 11-9.896 17.14l-16.33-9.43v18.86a9.896 9.896 0 01-19.793 0v-18.86l-16.33 9.43a9.895 9.895 0 01-9.897-17.14l16.335-9.43-16.335-9.43a9.895 9.895 0 019.897-17.14l16.33 9.429v-18.86a9.896 9.896 0 0119.793 0v18.86l16.33-9.429a9.895 9.895 0 019.896 17.14l-16.334 9.43zm108 0a9.895 9.895 0 11-9.896 17.14l-16.33-9.43v18.86a9.896 9.896 0 01-19.793 0v-18.86l-16.33 9.43a9.895 9.895 0 01-9.897-17.14l16.335-9.43-16.335-9.43a9.895 9.895 0 019.897-17.14l16.33 9.429v-18.86a9.896 9.896 0 0119.793 0v18.86l16.33-9.429a9.895 9.895 0 019.896 17.14l-16.334 9.43zm-242.226-225.43a98.103 98.103 0 11196.207 0v70.198h19.793v-70.198a117.897 117.897 0 00-235.793 0v70.198h19.792z"
        }
      ></path>
    </svg>
  );
}

export default Icon42Icon;
/* prettier-ignore-end */
