// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group5SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group5SvgIcon(props: Group5SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 54 54"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        y={"2"}
        width={"52"}
        height={"52"}
        rx={"12"}
        fill={"url(#8l08BvnVXfHda)"}
      ></rect>

      <path
        d={
          "M48.258 19.589L24.48 43.366a2.752 2.752 0 01-3.89 0L6.598 29.374a2.752 2.752 0 010-3.891L30.375 1.706a2.752 2.752 0 013.891 0l13.992 13.992a2.75 2.75 0 010 3.89z"
        }
        fill={"#5ED5A8"}
      ></path>

      <path
        d={
          "M48.258 15.698l-1.746-1.746c.957.956.861 2.603-.213 3.677L22.522 41.406c-1.074 1.075-2.721 1.17-3.678.213l1.746 1.747a2.752 2.752 0 003.892 0l23.776-23.777a2.75 2.75 0 000-3.891z"
        }
        fill={"#459D7C"}
      ></path>

      <path
        d={
          "M11.17 28.395a.747.747 0 01-.528-1.275l11.646-11.646a.747.747 0 111.057 1.056L11.699 28.177a.746.746 0 01-.528.218zm3.702 3.701a.747.747 0 01-.528-1.275L25.99 19.175a.747.747 0 111.056 1.056L15.4 31.877a.745.745 0 01-.528.22z"
        }
        fill={"#1B232A"}
      ></path>

      <path
        d={
          "M29.987 7.126l-2.33 2.33a2.345 2.345 0 103.317 3.316l2.33-2.33a2.345 2.345 0 10-3.317-3.316z"
        }
        fill={"#FFCD34"}
      ></path>

      <path
        d={
          "M50.503 26.61H16.878a2.751 2.751 0 00-2.752 2.752v19.787a2.751 2.751 0 002.752 2.752h33.625a2.751 2.751 0 002.751-2.752V29.362a2.75 2.75 0 00-2.751-2.752z"
        }
        fill={"#5ED5A8"}
      ></path>

      <path
        d={
          "M50.503 26.61h-2.462a2.751 2.751 0 012.75 2.752v19.787a2.751 2.751 0 01-2.75 2.752h2.462a2.751 2.751 0 002.752-2.752V29.362a2.751 2.751 0 00-2.752-2.752z"
        }
        fill={"#459D7C"}
      ></path>

      <path
        d={"M14.127 32.827h39.128v4.753H14.126v-4.753z"}
        fill={"#1B232A"}
      ></path>

      <path
        d={"M50.791 32.827h2.463v4.753h-2.462v-4.753z"}
        fill={"#090C0E"}
      ></path>

      <path
        d={
          "M43.637 45.176v2.932c0 .227.184.41.41.41h4.664a.41.41 0 00.41-.41v-2.932a.41.41 0 00-.41-.41h-4.663a.41.41 0 00-.41.41zm-14.06 0v2.932c0 .227.184.41.41.41h9.864a.41.41 0 00.41-.41v-2.932a.41.41 0 00-.41-.41h-9.863a.41.41 0 00-.41.41z"
        }
        fill={"#FFCD34"}
      ></path>

      <path
        d={
          "M25.556 49.266h-4.913a.747.747 0 110-1.495h4.913a.747.747 0 110 1.495z"
        }
        fill={"#1B232A"}
      ></path>

      <defs>
        <linearGradient
          id={"8l08BvnVXfHda"}
          x1={"13.867"}
          y1={"20.2"}
          x2={"87.967"}
          y2={"94.3"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#1B232A"}></stop>

          <stop offset={"1"} stopColor={"#5ED5A8"}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Group5SvgIcon;
/* prettier-ignore-end */
