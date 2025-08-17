/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon95IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon95Icon(props: Icon95IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5 8a1 1 0 01-2 0V5.923c0-.76.082-1.185.319-1.627.223-.419.558-.754.977-.977C4.738 3.082 5.162 3 5.923 3H8a1 1 0 010 2H5.923c-.459 0-.57.022-.684.082a.364.364 0 00-.157.157c-.06.113-.082.225-.082.684V8zm3 11a1 1 0 110 2H5.923c-.76 0-1.185-.082-1.627-.319a2.363 2.363 0 01-.977-.977C3.082 19.262 3 18.838 3 18.077V16a1 1 0 112 0v2.077c0 .459.022.57.082.684.038.07.087.12.157.157.113.06.225.082.684.082H8zm7-15a1 1 0 001 1h2.077c.459 0 .57.022.684.082.07.038.12.087.157.157.06.113.082.225.082.684V8a1 1 0 102 0V5.923c0-.76-.082-1.185-.319-1.627a2.363 2.363 0 00-.977-.977C19.262 3.082 18.838 3 18.077 3H16a1 1 0 00-1 1zm4 12a1 1 0 112 0v2.077c0 .76-.082 1.185-.319 1.627a2.364 2.364 0 01-.977.977c-.442.237-.866.319-1.627.319H16a1 1 0 110-2h2.077c.459 0 .57-.022.684-.082a.363.363 0 00.157-.157c.06-.113.082-.225.082-.684V16zM3 11a1 1 0 100 2h18a1 1 0 100-2H3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon95Icon;
/* prettier-ignore-end */
