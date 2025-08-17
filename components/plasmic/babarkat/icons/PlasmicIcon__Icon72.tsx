/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon72IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon72Icon(props: Icon72IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.014 14.304A16.775 16.775 0 0143.5 25.271m0-.001a53.775 53.775 0 01-1.136 10.553m-28.35-21.519l-.858 1.253a2.793 2.793 0 00-2.33 2.19"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M13.155 15.557c4.427-.01 8.818.791 12.956 2.363 6.779 2.602 9.247 4.799 10.129 6.083a2.207 2.207 0 01-.313 2.919 2.097 2.097 0 01-2.729.115"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M29.962 24.742c-4.904-4.675-21.623-8.117-22.478-6.71-.529.87-.963 2.107-.615 2.57"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6.869 20.602s-1.89 3.107-1.248 3.56c0 0-.614-.069-.92 1.246-.307 1.315-.307 1.847.52 2.416.826.569 1.794 1.4 1.794 1.4l-2.043 5.084s-.246 2.108 4.457 3.292a3.796 3.796 0 004.543-1.822m7.414 2.8c2.741 1.33 6.19 1.16 7.182.096a13.813 13.813 0 001.909-3.25s1.195 2.412 5.15 2.373a13.052 13.052 0 006.737-1.974"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M26.772 32.21s-7.694-4.17-13.208-5.033a46.127 46.127 0 00-9.064-.64m1.12-2.375a24.342 24.342 0 016.869.26 35.297 35.297 0 019.835 3.155l1.357-3.137a42.688 42.688 0 00-11.127-3.515 32.767 32.767 0 00-5.685-.324m23.608 14.823l2.72-8.387"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M26.15 26.16a.75.75 0 100-1.499.75.75 0 000 1.5zm-1.648 3.383a.75.75 0 100-1.5.75.75 0 000 1.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M21.386 38.578s-12.163-5.699-16.414-4.27"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon72Icon;
/* prettier-ignore-end */
