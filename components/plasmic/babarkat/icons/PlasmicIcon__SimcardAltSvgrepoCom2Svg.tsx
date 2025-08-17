/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SimcardAltSvgrepoCom2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SimcardAltSvgrepoCom2SvgIcon(
  props: SimcardAltSvgrepoCom2SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-2.4 -2.4 28.8 28.8"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"-2.4"}
        y={"-2.4"}
        width={"28.8"}
        height={"28.8"}
        rx={"14.4"}
        fill={"#f2f6f7"}
      ></rect>

      <g
        stroke={"#c6dc1e"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <path
          d={
            "M13.462 3H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C6.52 21 7.08 21 8.2 21h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C19 19.48 19 18.92 19 17.8V9.122c0-.416 0-.624-.04-.823a2.002 2.002 0 00-.179-.507c-.092-.181-.222-.344-.482-.669L15.96 4.201c-.353-.441-.53-.662-.748-.82a2 2 0 00-.643-.31C14.31 3 14.027 3 13.462 3z"
          }
        ></path>

        <path d={"M8 14h8v4H8v-4z"}></path>
      </g>
    </svg>
  );
}

export default SimcardAltSvgrepoCom2SvgIcon;
/* prettier-ignore-end */
