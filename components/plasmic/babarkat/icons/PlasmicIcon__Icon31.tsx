/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon31Icon(props: Icon31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      data-name={"Layer 1"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 500 800"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M425 0H75C33.57 0 0 33.6 0 75v650c0 41.43 33.6 75 75 75h350c41.43 0 75-33.57 75-75V75c0-41.43-33.6-75-75-75zM250 750c-27.57-.03-49.9-22.37-49.9-49.93s22.37-49.93 49.93-49.93 49.93 22.37 49.93 49.93c0 13.8-5.6 26.27-14.63 35.3S263.8 750 250 750h-.03.03zm175-168.67c-.07 10.27-8.4 18.6-18.67 18.67H93.73c-10.3 0-18.67-8.37-18.67-18.67V93.77c0-10.3 8.37-18.67 18.67-18.67H406.2c10.27.07 18.6 8.4 18.67 18.67l.13 487.57z"
        }
        fill={"#2dc57b"}
        data-name={"SVGRepo iconCarrier"}
      ></path>
    </svg>
  );
}

export default Icon31Icon;
/* prettier-ignore-end */
