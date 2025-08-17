/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon135IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon135Icon(props: Icon135IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M11.94 2.056 9.53 7.273H7.12c-.4 0-.79.028-1.17.102l1-2.232.04-.083.06-.149c.03-.065.05-.12.08-.167 1.16-2.502 2.46-3.283 4.81-2.688m6.79 5.468-.02-.01a7.2 7.2 0 0 0-1.83-.241h-6.26l2.25-4.864.03-.065c.14.046.29.111.44.158l2.21.865c1.23.474 2.09.967 2.62 1.562.09.112.17.214.25.335.09.13.16.26.2.4.04.084.07.158.09.242.15.474.16 1.013.02 1.618m-6.21 8.899h.25c.3 0 .55-.25.55-.558 0-.39-.12-.446-.38-.539l-.42-.14z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M18.29 8.854c-.45-.12-.92-.186-1.41-.186H7.12q-1.02 0-1.92.363c-1.74.697-2.96 2.306-2.96 4.175v1.814c0 .223.02.437.05.66.22 2.957 1.92 4.538 5.1 4.734.23.028.46.046.71.046h7.8c3.7 0 5.65-1.637 5.84-4.892.01-.176.02-.362.02-.548v-1.814c0-2.055-1.47-3.785-3.47-4.352m-5.01 5.561c.46.15 1.08.465 1.08 1.451 0 .846-.71 1.525-1.59 1.525h-.25v.205c0 .27-.23.483-.52.483s-.52-.213-.52-.483v-.205h-.09c-.96 0-1.75-.753-1.75-1.683 0-.27.23-.484.52-.484s.52.214.52.484c0 .39.32.716.71.716h.09v-1.572l-.76-.25c-.46-.15-1.08-.466-1.08-1.452 0-.846.71-1.525 1.59-1.525h.25v-.204c0-.27.23-.484.52-.484s.52.214.52.484v.204h.09c.96 0 1.75.754 1.75 1.684 0 .27-.23.483-.52.483s-.52-.214-.52-.483a.717.717 0 0 0-.71-.716h-.09v1.571z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M10.68 13.15c0 .39.12.446.38.54l.42.139v-1.237h-.25a.55.55 0 0 0-.55.558"
        }
      ></path>
    </svg>
  );
}

export default Icon135Icon;
/* prettier-ignore-end */
