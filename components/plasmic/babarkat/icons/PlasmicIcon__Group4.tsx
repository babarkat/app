/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group4Icon(props: Group4IconProps) {
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
        d={
          "M12.02 20.35c-2.58 0-5.15-.41-7.6-1.23-.91-.3-1.6-.95-1.9-1.77-.3-.82-.2-1.76.29-2.58l1.27-2.12c.28-.47.53-1.35.53-1.9v-2.1c0-4.09 3.32-7.41 7.41-7.41s7.41 3.32 7.41 7.41v2.1c0 .54.25 1.43.53 1.9l1.27 2.12c.47.78.55 1.71.24 2.56-.31.85-.99 1.5-1.85 1.79-2.45.83-5.02 1.23-7.6 1.23zm0-17.6c-3.26 0-5.91 2.65-5.91 5.91v2.1c0 .81-.32 1.98-.74 2.67L4.1 15.56c-.26.43-.32.89-.17 1.29s.49.7.97.86c4.6 1.53 9.66 1.53 14.26 0 .43-.14.76-.46.91-.88.16-.42.11-.88-.12-1.27l-1.27-2.12c-.42-.69-.74-1.86-.74-2.67v-2.1c-.01-3.27-2.66-5.92-5.92-5.92z"
        }
        fill={"currentColor"}
      ></path>

      <path
        opacity={".1"}
        d={"M16 9a4 4 0 10-8 0h8z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M11.75 19.75c-.99 0-1.95-.4-2.65-1.1C8.4 17.95 8 16.99 8 16h1.5c0 .59.24 1.17.66 1.59.42.42 1 .66 1.59.66 1.24 0 2.25-1.01 2.25-2.25h1.5c0 2.07-1.68 3.75-3.75 3.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
