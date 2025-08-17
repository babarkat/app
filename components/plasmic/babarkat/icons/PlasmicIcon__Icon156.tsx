/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon156IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon156Icon(props: Icon156IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 393 532"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#a)"}>
        <path
          fill={"currentColor"}
          fillRule={"evenodd"}
          d={
            "M26.18 34.92C24 39.198 24 44.8 24 56v436h10a9 9 0 0 1 9-9 9 9 0 0 1 9 9h8a9 9 0 0 1 9-9 9 9 0 0 1 9 9h8a9 9 0 0 1 9-9 9 9 0 0 1 9 9h8a9 9 0 0 1 9-9 9 9 0 0 1 9 9h8a9 9 0 0 1 9-9 9 9 0 0 1 9 9h8a9 9 0 0 1 9-9 9 9 0 0 1 9 9h8a9 9 0 0 1 9-9 9 9 0 0 1 9 9h8a9 9 0 0 1 9-9 9 9 0 0 1 9 9h8a9 9 0 0 1 9-9 9 9 0 0 1 9 9h8a9 9 0 0 1 9-9 9 9 0 0 1 9 9h8a9 9 0 0 1 9-9 9 9 0 0 1 9 9h8a9 9 0 0 1 9-9 9 9 0 0 1 9 9h8a9 9 0 0 1 9-9 9 9 0 0 1 9 9h5V56c0-11.201 0-16.802-2.18-21.08a20 20 0 0 0-8.74-8.74C353.802 24 348.201 24 337 24H56c-11.201 0-16.802 0-21.08 2.18a20 20 0 0 0-8.74 8.74"
          }
          clipRule={"evenodd"}
        ></path>
      </g>

      <defs>
        <filter
          id={"a"}
          width={"409"}
          height={"532"}
          x={"-8"}
          y={"0"}
          colorInterpolationFilters={"sRGB"}
          filterUnits={"userSpaceOnUse"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            result={"hardAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"8"}></feOffset>

          <feGaussianBlur stdDeviation={"16"}></feGaussianBlur>

          <feComposite in2={"hardAlpha"} operator={"out"}></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"}
          ></feColorMatrix>

          <feBlend
            in2={"BackgroundImageFix"}
            mode={"normal"}
            result={"effect1_dropShadow_1_845"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow_1_845"}
            mode={"normal"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Icon156Icon;
/* prettier-ignore-end */
