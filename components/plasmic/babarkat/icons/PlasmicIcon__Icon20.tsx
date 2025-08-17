/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon20Icon(props: Icon20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.226 18.208H4.25c-1.842 0-3.34-1.262-3.34-2.813V5.868c0-1.551 1.498-2.813 3.34-2.813h7.977c1.842 0 3.341 1.262 3.341 2.813v9.527c0 1.551-1.499 2.813-3.34 2.813zM4.25 4.462c-.92 0-1.67.63-1.67 1.406v9.527c0 .776.75 1.407 1.67 1.407h7.977c.921 0 1.67-.631 1.67-1.407V5.868c0-.775-.749-1.406-1.67-1.406H4.25zm14.66 9.175V3.02c0-1.55-1.5-2.812-3.342-2.812H6.296c-.462 0-.836.314-.836.703 0 .388.374.703.836.703h9.271c.921 0 1.67.63 1.67 1.406v10.617c0 .389.375.704.836.704.461 0 .835-.315.835-.704z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */
