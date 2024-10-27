// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NotificationsAlertSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function NotificationsAlertSvgrepoComSvgIcon(
  props: NotificationsAlertSvgrepoComSvgIconProps
) {
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

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M9.297 4.727v.526c-2.69 1.103-4.57 4.726-4.501 7.866v1.744c-1.377 1.77-1.296 4.41 2.14 4.41h2.36c0 .723.283 1.417.784 1.928a2.65 2.65 0 001.892.799c.71 0 1.39-.287 1.892-.799a2.755 2.755 0 00.784-1.928h2.367c3.43 0 3.479-2.645 2.102-4.415l.038-1.736c.07-3.144-1.813-6.77-4.508-7.872v-.523c0-.723-.281-1.417-.783-1.928A2.65 2.65 0 0011.972 2c-.71 0-1.39.287-1.892.799a2.754 2.754 0 00-.783 1.928zm3.567 0s0 .037-.002.055a7.12 7.12 0 00-1.78.001.918.918 0 01.26-.699.883.883 0 011.26 0c.168.17.262.402.262.643zM11.08 19.273c0 .24.094.472.261.643a.884.884 0 001.262 0 .919.919 0 00.26-.643H11.08zm5.935-1.819c.762 0 1.173-.91.678-1.5a1.54 1.54 0 01-.361-1.025l.04-1.848c.068-3.087-2.368-6.536-5.396-6.536S6.512 9.993 6.579 13.08l.04 1.85a1.54 1.54 0 01-.36 1.025c-.497.59-.086 1.5.676 1.5h10.08zM16.98 3.202a1 1 0 011.392-.252c1.147.795 2.524 2.703 3.275 4.963a1 1 0 01-1.898.63c-.66-1.984-1.827-3.471-2.517-3.95a1 1 0 01-.252-1.391zM5.43 2.95a1 1 0 111.14 1.644c-.69.478-1.857 1.965-2.518 3.95a1 1 0 01-1.897-.631c.751-2.26 2.128-4.168 3.275-4.963z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NotificationsAlertSvgrepoComSvgIcon;
/* prettier-ignore-end */
