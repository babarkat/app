/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SubtractIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SubtractIcon(props: SubtractIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 345 468"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M313 0c11.201 0 16.802 0 21.08 2.18a20 20 0 0 1 8.74 8.74C345 15.198 345 20.799 345 32v436h-5a9 9 0 0 0-9-9 9 9 0 0 0-9 9h-8a9 9 0 0 0-9-9 9 9 0 0 0-9 9h-8a9 9 0 0 0-9-9 9 9 0 0 0-9 9h-8a9 9 0 0 0-9-9 9 9 0 0 0-9 9h-8a9 9 0 0 0-9-9 9 9 0 0 0-9 9h-8a9 9 0 0 0-9-9 9 9 0 0 0-9 9h-8a9 9 0 0 0-9-9 9 9 0 0 0-9 9h-8a9 9 0 0 0-9-9 9 9 0 0 0-9 9h-8a9 9 0 0 0-9-9 9 9 0 0 0-9 9h-8a9 9 0 0 0-9-9 9 9 0 0 0-9 9h-8a9 9 0 0 0-9-9 9 9 0 0 0-9 9h-8a9 9 0 0 0-9-9 9 9 0 0 0-9 9h-8a9 9 0 0 0-9-9 9 9 0 0 0-9 9H0V32c0-11.201 0-16.802 2.18-21.08a20 20 0 0 1 8.74-8.74C15.198 0 20.799 0 32 0z"
        }
      ></path>
    </svg>
  );
}

export default SubtractIcon;
/* prettier-ignore-end */
