/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon134IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon134Icon(props: Icon134IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 52 52"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#a)"}>
        <path
          fill={"#3E474F"}
          d={
            "m25.94 11.986-2.41 5.217h-2.41c-.4 0-.79.028-1.17.102l1-2.232.04-.084.06-.148c.03-.065.05-.121.08-.168 1.16-2.501 2.46-3.283 4.81-2.687m6.79 5.468-.02-.01a7.2 7.2 0 0 0-1.83-.242h-6.26l2.25-4.864.03-.065c.14.047.29.112.44.159l2.21.864c1.23.475 2.09.968 2.62 1.563.09.111.17.214.25.335.09.13.16.26.2.4.04.083.07.158.09.241.15.475.16 1.014.02 1.618"
          }
        ></path>

        <path
          fill={"#5ED5A8"}
          d={
            "M26.52 26.353h.25c.3 0 .55-.251.55-.558 0-.39-.12-.446-.38-.54l-.42-.139z"
          }
        ></path>

        <path
          fill={"#5ED5A8"}
          d={
            "M32.29 18.783a5.4 5.4 0 0 0-1.41-.186h-9.76q-1.02 0-1.92.362c-1.74.698-2.96 2.307-2.96 4.176v1.813c0 .224.02.438.05.66.22 2.958 1.92 4.54 5.1 4.734.23.028.46.047.71.047h7.8c3.7 0 5.65-1.637 5.84-4.892.01-.177.02-.363.02-.549v-1.813c0-2.055-1.47-3.785-3.47-4.352m-5.01 5.561c.46.149 1.08.465 1.08 1.45 0 .847-.71 1.526-1.59 1.526h-.25v.205c0 .27-.23.483-.52.483s-.52-.214-.52-.483v-.205h-.09c-.96 0-1.75-.753-1.75-1.683 0-.27.23-.484.52-.484s.52.214.52.484c0 .39.32.716.71.716h.09V24.78l-.76-.251c-.46-.149-1.08-.465-1.08-1.45 0-.847.71-1.526 1.59-1.526h.25v-.205c0-.27.23-.483.52-.483s.52.214.52.483v.205h.09c.96 0 1.75.753 1.75 1.683 0 .27-.23.484-.52.484s-.52-.214-.52-.484c0-.39-.32-.716-.71-.716h-.09v1.572z"
          }
        ></path>

        <path
          fill={"#5ED5A8"}
          d={
            "M24.68 23.08c0 .39.12.446.38.539l.42.14V22.52h-.25a.55.55 0 0 0-.55.558"
          }
        ></path>
      </g>

      <defs>
        <filter
          id={"a"}
          width={"56"}
          height={"54.319"}
          x={"-2"}
          y={"-1.07"}
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
            in2={"BackgroundImageFix"}
            mode={"normal"}
            result={"effect1_dropShadow_217_24792"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow_217_24792"}
            mode={"normal"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Icon134Icon;
/* prettier-ignore-end */
