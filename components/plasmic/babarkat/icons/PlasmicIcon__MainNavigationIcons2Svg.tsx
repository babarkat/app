// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MainNavigationIcons2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MainNavigationIcons2SvgIcon(
  props: MainNavigationIcons2SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 54 53"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#1e-bmrfH2EOZa)"}>
        <path
          d={
            "M35.83 18.01l-6.55-5.24c-1.28-1.02-3.28-1.03-4.55-.01l-6.55 5.25c-.94.75-1.51 2.25-1.31 3.43l1.26 7.54c.29 1.69 1.86 3.02 3.57 3.02h10.6c1.69 0 3.29-1.36 3.58-3.03l1.26-7.54c.18-1.17-.39-2.67-1.31-3.42zM27.75 28c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"1e-bmrfH2EOZa"}
          x={".83"}
          y={"1"}
          width={"52.343"}
          height={"52"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"5"}></feOffset>

          <feGaussianBlur stdDeviation={"8"}></feGaussianBlur>

          <feComposite in2={"hardAlpha"} operator={"out"}></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={
              "0 0 0 0 0.368627 0 0 0 0 0.835294 0 0 0 0 0.658824 0 0 0 0.25 0"
            }
          ></feColorMatrix>

          <feBlend
            mode={"normal"}
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow_217_24828"}
          ></feBlend>

          <feBlend
            mode={"normal"}
            in={"SourceGraphic"}
            in2={"effect1_dropShadow_217_24828"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default MainNavigationIcons2SvgIcon;
/* prettier-ignore-end */
