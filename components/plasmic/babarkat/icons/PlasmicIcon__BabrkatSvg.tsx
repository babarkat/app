/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BabrkatSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BabrkatSvgIcon(props: BabrkatSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      data-name={"Layer 1"}
      viewBox={"0 0 1013.5 431.52"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <linearGradient
          id={"c"}
          x1={"727.92"}
          x2={"517.91"}
          y1={"4.51"}
          y2={"182.23"}
          gradientTransform={"matrix(.89974 .02167 -.05497 .87893 302.73 58.2)"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop offset={"0"} stopColor={"#40b776"}></stop>

          <stop offset={".5"} stopColor={"#3db576"}></stop>

          <stop offset={".75"} stopColor={"#36ae76"}></stop>

          <stop offset={".95"} stopColor={"#28a376"}></stop>

          <stop offset={"1"} stopColor={"#24a076"}></stop>
        </linearGradient>

        <linearGradient
          id={"a"}
          x1={"772.11"}
          x2={"903.9"}
          y1={"259.76"}
          y2={"259.76"}
          gradientTransform={"matrix(.99983 -.01867 -.02774 1.0307 1.13 29.53)"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop offset={"0"} stopColor={"#40b776"}></stop>

          <stop offset={"1"} stopColor={"#24a076"}></stop>
        </linearGradient>

        <linearGradient
          id={"b"}
          x1={"872.8"}
          x2={"917.11"}
          y1={"518.39"}
          y2={"544.14"}
          gradientTransform={"rotate(9.03 2478.924 639.923)"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop offset={"0"} stopColor={"#40b776"}></stop>

          <stop offset={".37"} stopColor={"#3ab276"}></stop>

          <stop offset={".82"} stopColor={"#2ba676"}></stop>

          <stop offset={"1"} stopColor={"#24a076"}></stop>
        </linearGradient>

        <linearGradient
          xlinkHref={"#a"}
          id={"d"}
          x1={"927.11"}
          x2={"868.32"}
          y1={"392.43"}
          y2={"400.57"}
        ></linearGradient>

        <linearGradient
          xlinkHref={"#b"}
          id={"e"}
          x1={"653.79"}
          x2={"721.81"}
          y1={"365.1"}
          y2={"365.1"}
        ></linearGradient>

        <linearGradient
          xlinkHref={"#b"}
          id={"f"}
          x1={"861.79"}
          x2={"929.81"}
          y1={"397.1"}
          y2={"397.1"}
        ></linearGradient>

        <linearGradient
          xlinkHref={"#b"}
          id={"g"}
          x1={"187.85"}
          x2={"295.57"}
          y1={"188.71"}
          y2={"188.71"}
        ></linearGradient>
      </defs>

      <path
        fill={"url(#c)"}
        d={
          "M989.46 133.39 766.29 261.3v-98.89c1.15-18.14 14.04-27.2 24.06-33L1013.5.16v93.46c0 22.73-4.17 28.58-24.04 39.77"
        }
      ></path>

      <path
        fill={"url(#a)"}
        d={
          "m781.03 289.76 112.96 62.26-.02-53.73c-.42-10.02-7.01-16.98-12.28-19.97L766.3 211.64l.25 43.09c0 15.55-.05 27.21 14.48 35.02Z"
        }
      ></path>

      <path
        fill={"url(#b)"}
        d={
          "m893.99 352.02.14-95.84a33.17 33.17 0 0 1 16.58-28.67l42.64-24.62v100.33c0 9.39-5.05 18.05-13.22 22.68L894 352.02Z"
        }
      ></path>

      <ellipse
        cx={"895.78"}
        cy={"396.77"}
        fill={"url(#d)"}
        rx={"28.05"}
        ry={"30.92"}
      ></ellipse>

      <path
        fill={"url(#e)"}
        d={
          "M661.76 342.16c19.33-21.78 56-10.68 59.7 17.58 4.92 37.65-43.45 54.48-62.83 24.07-7.47-11.72-6.17-31.15 3.14-41.64Z"
        }
      ></path>

      <path
        fill={"url(#f)"}
        d={
          "M869.76 374.16c19.33-21.78 56-10.68 59.7 17.58 4.92 37.65-43.45 54.48-62.83 24.07-7.47-11.72-6.17-31.15 3.14-41.64Z"
        }
      ></path>

      <path
        fill={"url(#g)"}
        d={
          "M208.95 156.75h86.62v43.64c0 11.19-9.08 20.27-20.27 20.27h-87.45v-42.81c0-11.64 9.45-21.1 21.1-21.1"
        }
      ></path>

      <path
        fill={"#fff"}
        d={
          "m554.5 428.15-22.87-52.75c-6.21-12.69-2.72-27.99 8.36-36.75 22.12-22.05 34.58-42.97 34.58-74.2V153.52h16.27c28.52 0 51.64 23.12 51.64 51.64v25.48h31.5c6.73 0 12.19-5.46 12.19-12.19v-20.52c0-25.54 19.29-43.84 44.82-44.29 13.14-.23 17.18-2.25 17.18-.13v101.75c0 27.55-22.33 49.88-49.88 49.88h-57.8c0 26.44-9.5 52.08-27.01 71.89-13.5 15.28-32.7 33.45-58.99 51.11Z"
        }
      ></path>

      <path
        fill={"#fff"}
        d={
          "M496.93 0v72.16c0 12.45-6.4 24.02-16.93 30.64l-53.49 36.36 78.87 22.96c31.74 9.24 53.57 38.33 53.57 71.39v29.78c0 49-39.73 88.73-88.73 88.73H175.28c-39.8 0-68.28-22.37-72.06-72.06-2.74-35.98 10.74-72.41 16.87-86.84.93-2.19 4.1-1.96 4.71.34l10.04 38.03c7.25 22.45 28.15 37.67 51.75 37.67h302.42v-4.6c0-10.07-6.5-18.99-16.09-22.06l-105.79-33.92c-10.56-3.39-17.73-13.21-17.73-24.3V122.5a52.39 52.39 0 0 1 25.02-44.67z"
        }
      ></path>
    </svg>
  );
}

export default BabrkatSvgIcon;
/* prettier-ignore-end */
