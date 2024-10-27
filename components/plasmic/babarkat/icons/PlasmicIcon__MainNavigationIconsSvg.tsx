// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MainNavigationIconsSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MainNavigationIconsSvgIcon(
  props: MainNavigationIconsSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 44"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.85 13.95v3.8h-1.5v-3.8c0-.27-.24-.4-.4-.4-.05 0-.1.01-.15.03l-7.93 2.99c-.53.2-.87.7-.87 1.27v.67c-.91.68-1.5 1.77-1.5 3v-3.67c0-1.19.73-2.25 1.84-2.67l7.94-3c.22-.08.45-.12.67-.12 1 0 1.9.81 1.9 1.9zM31.5 24.5v1a.5.5 0 01-.49.5h-1.46c-.53 0-1.01-.39-1.05-.91-.03-.31.09-.6.29-.8a.95.95 0 01.7-.29H31c.29.01.5.23.5.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M29.48 22.95h1.02c.55 0 1-.45 1-1v-.44c0-2.07-1.69-3.76-3.76-3.76H16.26c-.85 0-1.63.28-2.26.76-.91.68-1.5 1.77-1.5 3v6.73c0 2.07 1.69 3.76 3.76 3.76h11.48c2.07 0 3.76-1.69 3.76-3.76v-.19c0-.55-.45-1-1-1h-.87c-.96 0-1.88-.59-2.13-1.52-.21-.76.04-1.49.54-1.98.37-.38.88-.6 1.44-.6zm-5.48-.2h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MainNavigationIconsSvgIcon;
/* prettier-ignore-end */
