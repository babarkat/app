/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon157IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon157Icon(props: Icon157IconProps) {
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
          d={
            "M337 24c11.201 0 16.802 0 21.08 2.18a20 20 0 0 1 8.74 8.74C369 39.198 369 44.799 369 56v436h-9.869c0-4.971-7.954-9-17.766-9s-17.765 4.029-17.765 9h-15.791c0-4.97-7.954-9-17.765-9s-17.766 4.029-17.766 9h-15.791c0-4.971-7.954-9-17.765-9s-17.765 4.029-17.765 9h-15.792c0-4.97-7.953-9-17.765-9-9.811 0-17.765 4.029-17.765 9h-15.791c0-4.971-7.954-9-17.766-9s-17.765 4.029-17.765 9h-15.792c0-4.971-7.953-9-17.764-9s-17.766 4.029-17.766 9h-15.79c0-4.971-7.955-9-17.766-9-9.812 0-17.765 4.029-17.765 9H-.122c0-4.971-7.953-9-17.765-9-9.811 0-17.765 4.029-17.765 9h-15.791c0-4.971-7.955-9-17.766-9s-17.765 4.029-17.765 9h-15.792c0-4.971-7.953-9-17.764-9s-17.766 4.029-17.766 9h-15.791c0-4.971-7.954-9-17.766-9s-17.764 4.029-17.764 9h-15.792c0-4.971-7.953-9-17.765-9-9.811 0-17.765 4.029-17.765 9h-15.791c0-4.971-7.955-9-17.766-9s-17.765 4.03-17.765 9H-312V56c0-11.201 0-16.802 2.18-21.08a20 20 0 0 1 8.74-8.74C-296.802 24-291.201 24-280 24z"
          }
        ></path>
      </g>

      <defs>
        <filter
          id={"a"}
          width={"745"}
          height={"532"}
          x={"-344"}
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

export default Icon157Icon;
/* prettier-ignore-end */
