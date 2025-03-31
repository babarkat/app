/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon26Icon(props: Icon26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      transform={"rotate(180)"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M256 0C114.51 0 0 114.496 0 256c0 141.49 114.496 256 256 256 141.49 0 256-114.496 256-256C512 114.51 397.504 0 256 0zm0 478.39c-122.626 0-222.39-99.764-222.39-222.39S133.374 33.61 256 33.61 478.39 133.374 478.39 256 378.626 478.39 256 478.39z"
        }
      ></path>

      <path
        d={
          "M359.974 218.832l-86.716-86.72c-20.542-20.543-53.794-20.545-74.339 0-20.544 20.543-20.545 53.794 0 74.339L248.468 256l-49.549 49.549c-20.543 20.542-20.545 53.794 0 74.339 20.54 20.542 53.795 20.546 74.337 0l86.717-86.717c9.929-9.927 15.396-23.128 15.396-37.169s-5.466-27.242-15.395-37.17zm-23.765 50.571l-86.718 86.718c-7.407 7.407-19.398 7.408-26.806 0-7.408-7.409-7.408-19.397 0-26.807l61.432-61.432c6.563-6.563 6.563-17.203 0-23.766l-61.432-61.432c-7.408-7.409-7.408-19.397 0-26.807 7.408-7.408 19.398-7.408 26.805 0l86.717 86.717c7.392 7.393 7.392 19.419.002 26.809z"
        }
      ></path>
    </svg>
  );
}

export default Icon26Icon;
/* prettier-ignore-end */
