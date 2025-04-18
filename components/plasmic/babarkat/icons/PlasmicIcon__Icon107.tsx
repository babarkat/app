/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon107IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon107Icon(props: Icon107IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"currentColor"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M12 19.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm0 1.5a9 9 0 100-18 9 9 0 000 18z"
          }
        ></path>

        <circle cx={"12"} cy={"12"} r={"5.25"}></circle>
      </g>
    </svg>
  );
}

export default Icon107Icon;
/* prettier-ignore-end */
