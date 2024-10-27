// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HomeButtonSvgrepoCom2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HomeButtonSvgrepoCom2SvgIcon(
  props: HomeButtonSvgrepoCom2SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 72 72"}
      fill={"#fff"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#ededed"}
        d={
          "M17.129 59.738L16.06 34.74l.021-6.944L36.15 8.11l19.832 19.81-.004 15.438-.94 8.66-.115 7.72-13.136-.576.029-17.535h-11.59l-.076 17.535z"
        }
      ></path>

      <g
        fill={"none"}
        stroke={"#ededed"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
      >
        <path
          d={
            "M41.99 59.95h11.992c.55 0 1-.45 1-1V34.014m-37.924-.001V58.95c0 .55.45 1 1 1h12.135"
          }
        ></path>

        <path
          d={
            "M8.492 35.595L36.017 7.977l27.58 27.37M41.815 59.933V41.627h-11.59v18.306"
          }
        ></path>
      </g>
    </svg>
  );
}

export default HomeButtonSvgrepoCom2SvgIcon;
/* prettier-ignore-end */
