/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon52IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon52Icon(props: Icon52IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 427 296"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.924 185.084c-20.553-20.553-20.553-53.878 0-74.431l94.21-94.207C121.752 4.83 131.559.5 152.612.5h221.052c29.068 0 52.632 23.564 52.632 52.632v189.473c0 29.068-23.564 52.632-52.632 52.632H152.612c-21.053 0-30.86-4.326-42.478-15.943l-94.21-94.21zm310.668 14.887l-52.103-52.104 52.103-52.102-27.141-27.142-52.103 52.103-52.103-52.103-27.141 27.142 52.102 52.102-52.102 52.104 27.141 27.141 52.103-52.104 52.103 52.104 27.141-27.141z"
        }
        fill={"#2F2F2F"}
      ></path>

      <path
        d={
          "M274.489 147.867l52.103 52.104-27.141 27.141-52.103-52.104-52.103 52.104-27.141-27.141 52.102-52.104-52.102-52.102 27.141-27.142 52.103 52.103 52.103-52.103 27.141 27.142-52.103 52.102z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default Icon52Icon;
/* prettier-ignore-end */
