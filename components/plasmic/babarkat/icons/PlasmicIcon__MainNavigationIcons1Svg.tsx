// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MainNavigationIcons1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MainNavigationIcons1SvgIcon(
  props: MainNavigationIcons1SvgIconProps
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
          "M12 17v14c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V14c0-1.1.9-2 2-2H16c-3 0-4 1.79-4 4v1z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M28.01 12v1.5c.66 0 1.29.27 1.75.72.48.49.74 1.12.74 1.78v2.42c0 .74-.33 1.08-1.08 1.08H27.5v-5.49c0-.28.23-.51.51-.51V12zm0 0c-1.11 0-2.01.9-2.01 2.01V21h3.42C31 21 32 20 32 18.42V16c0-1.1-.45-2.1-1.17-2.83A4.044 4.044 0 0028.01 12c.01 0 0 0 0 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MainNavigationIcons1SvgIcon;
/* prettier-ignore-end */
