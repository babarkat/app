// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon41IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon41Icon(props: Icon41IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"#000"}
      transform={"rotate(180)"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#494c4e"}
        fillRule={"evenodd"}
        d={
          "M19.775 2a2.225 2.225 0 011.566 3.791l-8.577 8.588c-.011.011-.033.022-.044.033a5.427 5.427 0 01.389 2.033 5.555 5.555 0 11-5.554-5.555 5.428 5.428 0 012.033.389c.011-.011.022-.033.033-.044l3.355-3.344-1.766-1.767a1.115 1.115 0 011.577-1.578l.389.389a1.148 1.148 0 01.644-.644l-.388-.391a1.115 1.115 0 011.577-1.578l.391.392a1.125 1.125 0 01.255-.389 1.12 1.12 0 011.577 0l.655.655.322-.322A2.194 2.194 0 0119.775 2M7.555 18.667a2.222 2.222 0 10-2.222-2.222 2.228 2.228 0 002.222 2.222M19.775 0a4.173 4.173 0 00-1.8.4 3.142 3.142 0 00-2.643-.2 3.115 3.115 0 00-4.124 2.12A3.115 3.115 0 009.8 7.539l.35.35L9 9.029A7.548 7.548 0 1014.971 15l7.785-7.8a4.193 4.193 0 00-.01-5.969A4.157 4.157 0 0019.775 0z"
        }
      ></path>
    </svg>
  );
}

export default Icon41Icon;
/* prettier-ignore-end */
