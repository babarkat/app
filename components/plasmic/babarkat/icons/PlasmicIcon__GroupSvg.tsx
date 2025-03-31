/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupSvgIcon(props: GroupSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#zdSF-OgNksNFa)"}>
        <path
          d={
            "M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
          }
          fill={"url(#zdSF-OgNksNFb)"}
        ></path>

        <mask
          id={"zdSF-OgNksNFc"}
          style={{
            maskType: 'alpha"',
          }}
          maskUnits={"userSpaceOnUse"}
          x={"0"}
          y={"0"}
          width={"40"}
          height={"40"}
        >
          <path
            d={
              "M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
            }
            fill={"#E5E5E5"}
          ></path>
        </mask>

        <g mask={"url(#zdSF-OgNksNFc)"}>
          <path
            d={
              "M19.337 29c-2.711 0-7.086-5.271-8.151-11.5C10.12 11.27 13.703 6 19.899 6h.201c6.196 0 9.778 5.27 8.713 11.5-1.065 6.229-5.44 11.5-8.15 11.5h-1.326z"
            }
            fill={"url(#zdSF-OgNksNFd)"}
          ></path>

          <path
            d={
              "M28.813 17.5C29.878 11.27 26.296 6 20.1 6v23h.563c2.71 0 7.085-5.271 8.15-11.5z"
            }
            fill={"url(#zdSF-OgNksNFe)"}
          ></path>

          <path
            fillRule={"evenodd"}
            clipRule={"evenodd"}
            d={
              "M15.84 26.996C17.065 28.256 18.318 29 19.337 29h1.326c1.102 0 2.48-.872 3.799-2.325.035.957.2 1.868.51 2.844l.064.046c1.275.938 1.308.949 1.85 1.136.088.03.19.065.314.11 1.104.4 2.302.681 3.42.944 2.37.556 4.38 1.028 4.38 2.37 0 1.175-7.158 6.438-14.79 6.517h-.203c-7.632-.079-14.79-5.342-14.79-6.518 0-1.341 2.011-1.813 4.38-2.37 1.119-.262 2.317-.543 3.42-.943.124-.045.226-.08.315-.11.541-.187.574-.198 1.85-1.136.064-.048.128-.092.192-.134.258-.834.41-1.622.466-2.435z"
            }
            fill={"url(#zdSF-OgNksNFf)"}
          ></path>
        </g>
      </g>

      <defs>
        <radialGradient
          id={"zdSF-OgNksNFb"}
          cx={"0"}
          cy={"0"}
          r={"1"}
          gradientUnits={"userSpaceOnUse"}
          gradientTransform={"matrix(0 31 -40.5663 0 20 9)"}
        >
          <stop stopColor={"#20AD9A"}></stop>

          <stop offset={"1"} stopColor={"#65CDC3"}></stop>
        </radialGradient>

        <radialGradient
          id={"zdSF-OgNksNFd"}
          cx={"0"}
          cy={"0"}
          r={"1"}
          gradientUnits={"userSpaceOnUse"}
          gradientTransform={
            "matrix(-6.49991 -17.99997 11.48314 -4.14664 20 25.5)"
          }
        >
          <stop stopColor={"#fff"} stopOpacity={".88"}></stop>

          <stop offset={"1"} stopColor={"#fff"} stopOpacity={".72"}></stop>
        </radialGradient>

        <radialGradient
          id={"zdSF-OgNksNFe"}
          cx={"0"}
          cy={"0"}
          r={"1"}
          gradientUnits={"userSpaceOnUse"}
          gradientTransform={"matrix(-1 -10.49999 7.05919 -.6723 20.5 21)"}
        >
          <stop stopColor={"#fff"} stopOpacity={".88"}></stop>

          <stop offset={"1"} stopColor={"#fff"} stopOpacity={"0"}></stop>
        </radialGradient>

        <linearGradient
          id={"zdSF-OgNksNFf"}
          x1={"22.641"}
          y1={"19.775"}
          x2={"14.89"}
          y2={"39.466"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#DEF2F4"}></stop>

          <stop offset={"1"} stopColor={"#DEF2F4"} stopOpacity={".71"}></stop>
        </linearGradient>

        <clipPath id={"zdSF-OgNksNFa"}>
          <path fill={"#fff"} d={"M0 0h40v40H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default GroupSvgIcon;
/* prettier-ignore-end */
