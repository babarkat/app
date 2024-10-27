// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group3SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group3SvgIcon(props: Group3SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 43"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.755 3.88l-4.23 9.846h-4.23c-.702 0-1.387.052-2.054.193l1.755-4.213.07-.158.106-.28c.053-.123.088-.229.14-.316 2.036-4.722 4.318-6.196 8.443-5.073zM33.673 14.2l-.035-.018a11.737 11.737 0 00-3.212-.456H19.438l3.95-9.18.052-.123c.246.088.509.21.772.299l3.88 1.632c2.158.895 3.668 1.825 4.598 2.949.158.21.298.403.439.632.158.245.28.491.35.754a2.3 2.3 0 01.159.457c.263.895.28 1.913.035 3.054z"
        }
        fill={"#777"}
      ></path>

      <path
        d={
          "M22.773 30.997h.438c.527 0 .966-.474.966-1.053 0-.737-.211-.842-.667-1.018l-.738-.263v2.334z"
        }
        fill={"#5ED5A8"}
      ></path>

      <path
        d={
          "M32.9 16.71a8.879 8.879 0 00-2.474-.351H13.295a8.385 8.385 0 00-3.37.684c-3.054 1.317-5.196 4.353-5.196 7.881v3.423c0 .421.036.825.088 1.246.386 5.582 3.37 8.566 8.952 8.934.404.053.807.088 1.246.088h13.69c6.495 0 9.918-3.09 10.251-9.233.018-.333.035-.684.035-1.035v-3.423c0-3.879-2.58-7.144-6.09-8.214zm-8.793 10.496c.808.28 1.896.878 1.896 2.738 0 1.597-1.246 2.879-2.791 2.879h-.439v.386a.906.906 0 01-.913.913.906.906 0 01-.912-.913v-.386h-.158c-1.685 0-3.072-1.422-3.072-3.177 0-.51.404-.913.913-.913s.913.404.913.913c0 .737.561 1.351 1.246 1.351h.158v-2.966l-1.334-.474c-.808-.28-1.896-.878-1.896-2.738 0-1.597 1.246-2.879 2.791-2.879h.439v-.386c0-.509.404-.912.912-.912.51 0 .913.403.913.912v.386h.158c1.685 0 3.072 1.422 3.072 3.177a.906.906 0 01-.913.913.906.906 0 01-.913-.913c0-.737-.561-1.351-1.246-1.351h-.158v2.966l1.334.474z"
        }
        fill={"#5ED5A8"}
      ></path>

      <path
        d={
          "M19.544 24.819c0 .737.21.842.666 1.018l.738.263v-2.334h-.44c-.543 0-.964.474-.964 1.053z"
        }
        fill={"#5ED5A8"}
      ></path>
    </svg>
  );
}

export default Group3SvgIcon;
/* prettier-ignore-end */