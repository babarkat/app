/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sZQMbqXz9utLNaTnNb3uss
// Component: -Y88ffsHF_n0

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sZQMbqXz9utLNaTnNb3uss/projectcss
import sty from "./PlasmicSnapp.module.css"; // plasmic-import: -Y88ffsHF_n0/css

import SnappSvgrepoComSvgIcon from "./icons/PlasmicIcon__SnappSvgrepoComSvg"; // plasmic-import: MLy24KjhFbfA/icon

createPlasmicElementProxy;

export type PlasmicSnapp__VariantMembers = {};
export type PlasmicSnapp__VariantsArgs = {};
type VariantPropType = keyof PlasmicSnapp__VariantsArgs;
export const PlasmicSnapp__VariantProps = new Array<VariantPropType>();

export type PlasmicSnapp__ArgsType = {};
type ArgPropType = keyof PlasmicSnapp__ArgsType;
export const PlasmicSnapp__ArgProps = new Array<ArgPropType>();

export type PlasmicSnapp__OverridesType = {
  snappServices?: Flex__<"div">;
  snappIcon?: Flex__<"svg">;
  text?: Flex__<"div">;
};

export interface DefaultSnappProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSnapp__RenderFunc(props: {
  variants: PlasmicSnapp__VariantsArgs;
  args: PlasmicSnapp__ArgsType;
  overrides: PlasmicSnapp__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <div
      data-plasmic-name={"snappServices"}
      data-plasmic-override={overrides.snappServices}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.snappServices
      )}
    >
      <SnappSvgrepoComSvgIcon
        data-plasmic-name={"snappIcon"}
        data-plasmic-override={overrides.snappIcon}
        className={classNames(projectcss.all, sty.snappIcon)}
        role={"img"}
      />

      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"\u062e\u062f\u0645\u0627\u062a \u0627\u0633\u0646\u067e"}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  snappServices: ["snappServices", "snappIcon", "text"],
  snappIcon: ["snappIcon"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  snappServices: "div";
  snappIcon: "svg";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSnapp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSnapp__VariantsArgs;
    args?: PlasmicSnapp__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSnapp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSnapp__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSnapp__ArgProps,
          internalVariantPropNames: PlasmicSnapp__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSnapp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "snappServices") {
    func.displayName = "PlasmicSnapp";
  } else {
    func.displayName = `PlasmicSnapp.${nodeName}`;
  }
  return func;
}

export const PlasmicSnapp = Object.assign(
  // Top-level PlasmicSnapp renders the root element
  makeNodeComponent("snappServices"),
  {
    // Helper components rendering sub-elements
    snappIcon: makeNodeComponent("snappIcon"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicSnapp
    internalVariantProps: PlasmicSnapp__VariantProps,
    internalArgProps: PlasmicSnapp__ArgProps
  }
);

export default PlasmicSnapp;
/* prettier-ignore-end */
