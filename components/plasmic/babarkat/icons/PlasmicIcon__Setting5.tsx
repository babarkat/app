// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Setting5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Setting5Icon(props: Setting5IconProps) {
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
        opacity={".4"}
        d={
          "M18.51 1.8c-.5 0-.9.4-.9.9v4.65c0 .5.4.9.9.9s.9-.4.9-.9V2.7c0-.5-.4-.9-.9-.9z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12 15.75c-.5 0-.9.4-.9.9v4.65c0 .5.4.9.9.9s.9-.4.9-.9v-4.65c0-.49-.4-.9-.9-.9z"
        }
        fill={"currentColor"}
      ></path>

      <path
        opacity={".4"}
        d={
          "M5.49 1.8c-.5 0-.9.4-.9.9v4.65c0 .5.4.9.9.9s.9-.4.9-.9V2.7c0-.5-.41-.9-.9-.9zm1.86 8.37H3.63c-.5 0-.9.4-.9.9s.4.9.9.9h.96v9.33c0 .5.4.9.9.9s.9-.4.9-.9v-9.33h.96c.5 0 .9-.4.9-.9s-.41-.9-.9-.9zm13.02 0h-3.72c-.5 0-.9.4-.9.9s.4.9.9.9h.96v9.33c0 .5.4.9.9.9s.9-.4.9-.9v-9.33h.96c.5 0 .9-.4.9-.9s-.4-.9-.9-.9z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M13.86 12.03h-.96V2.7c0-.5-.4-.9-.9-.9s-.9.4-.9.9v9.33h-.96c-.5 0-.9.4-.9.9s.4.9.9.9h3.72c.5 0 .9-.4.9-.9s-.4-.9-.9-.9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Setting5Icon;
/* prettier-ignore-end */
