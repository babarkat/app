/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon18Icon(props: Icon18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.85 3.95v3.8h-1.5v-3.8c0-.27-.24-.4-.4-.4-.05 0-.1.01-.15.03L4.87 6.57c-.53.2-.87.7-.87 1.27v.67c-.91.68-1.5 1.77-1.5 3V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3c.22-.08.45-.12.67-.12 1 0 1.9.81 1.9 1.9zM21.5 14.5v1a.5.5 0 01-.49.5h-1.46c-.53 0-1.01-.39-1.05-.91-.03-.31.09-.6.29-.8a.95.95 0 01.7-.29H21c.29.01.5.23.5.5z"
        }
        fill={"#5ED5A8"}
      ></path>

      <path
        d={
          "M19.48 12.95h1.02c.55 0 1-.45 1-1v-.44c0-2.07-1.69-3.76-3.76-3.76H6.26c-.85 0-1.63.28-2.26.76-.91.68-1.5 1.77-1.5 3v6.73C2.5 20.31 4.19 22 6.26 22h11.48c2.07 0 3.76-1.69 3.76-3.76v-.19c0-.55-.45-1-1-1h-.87c-.96 0-1.88-.59-2.13-1.52-.21-.76.04-1.49.54-1.98.37-.38.88-.6 1.44-.6zm-5.48-.2H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75z"
        }
        fill={"#5ED5A8"}
      ></path>
    </svg>
  );
}

export default Icon18Icon;
/* prettier-ignore-end */
