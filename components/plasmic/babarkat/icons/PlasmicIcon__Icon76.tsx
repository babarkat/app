/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon76IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon76Icon(props: Icon76IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 36 36"}
      aria-hidden={"true"}
      role={"img"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "iconify iconify--twemoji"
      )}
      preserveAspectRatio={"xMidYMid meet"}
      fill={"#000"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#DA0001"}
        d={"M0 27a4 4 0 004 4h28a4 4 0 004-4v-4H0v4z"}
      ></path>

      <path fill={"#EEE"} d={"M0 13h36v10H0z"}></path>

      <path
        fill={"#239F40"}
        d={"M36 13V9a4 4 0 00-4-4H4a4 4 0 00-4 4v4h36z"}
      ></path>

      <path fill={"#E96667"} d={"M0 23h36v1H0z"}></path>

      <g fill={"#BE1931"}>
        <path
          d={
            "M19.465 14.969c.957.49 3.038 2.953.798 5.731 1.391-.308 3.162-4.408-.798-5.731zm-2.937 0c-3.959 1.323-2.189 5.423-.798 5.731-2.24-2.778-.159-5.241.798-5.731zm1.453-.143c.04.197 1.101.436.974-.573-.168.408-.654.396-.968.207-.432.241-.835.182-.988-.227-.148.754.587.975.982.593z"
          }
        ></path>

        <path
          d={
            "M20.538 17.904c-.015-1.248-.677-2.352-1.329-2.799.43.527 1.752 3.436-.785 5.351l.047-5.097-.475-.418-.475.398.08 5.146-.018-.015c-2.563-1.914-1.233-4.837-.802-5.365-.652.447-1.315 1.551-1.329 2.799-.013 1.071.477 2.243 1.834 3.205a6.375 6.375 0 01-1.678.201c.464.253 1.34.192 2.007.131l.001.068.398.437.4-.455v-.052c.672.062 1.567.129 2.039-.128a6.302 6.302 0 01-1.732-.213c1.344-.961 1.83-2.127 1.817-3.194z"
          }
        ></path>
      </g>

      <path fill={"#7BC58C"} d={"M0 12h36v1H0z"}></path>
    </svg>
  );
}

export default Icon76Icon;
/* prettier-ignore-end */
