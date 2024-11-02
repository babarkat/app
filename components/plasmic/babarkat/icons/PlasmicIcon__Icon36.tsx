// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon36IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon36Icon(props: Icon36IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 309.143 309.143"}
      xmlSpace={"preserve"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M112.855 154.571L240.481 26.946a7.5 7.5 0 000-10.606L226.339 2.197a7.497 7.497 0 00-10.606 0L68.661 149.268a7.5 7.5 0 000 10.606l147.071 147.071a7.497 7.497 0 0010.606 0l14.142-14.143a7.5 7.5 0 000-10.606L112.855 154.571z"
        }
        fill={"#dedede"}
      ></path>
    </svg>
  );
}

export default Icon36Icon;
/* prettier-ignore-end */
