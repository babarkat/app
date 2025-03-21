// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sZQMbqXz9utLNaTnNb3uss
// Component: IAxGKM4_bu7-

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
import sty from "./PlasmicAfghanistan.module.css"; // plasmic-import: IAxGKM4_bu7-/css

import FlagForFlagAfghanistanSvgrepoComSvgIcon from "./icons/PlasmicIcon__FlagForFlagAfghanistanSvgrepoComSvg"; // plasmic-import: GXaBnyf-6uke/icon

createPlasmicElementProxy;

export type PlasmicAfghanistan__VariantMembers = {};
export type PlasmicAfghanistan__VariantsArgs = {};
type VariantPropType = keyof PlasmicAfghanistan__VariantsArgs;
export const PlasmicAfghanistan__VariantProps = new Array<VariantPropType>();

export type PlasmicAfghanistan__ArgsType = {};
type ArgPropType = keyof PlasmicAfghanistan__ArgsType;
export const PlasmicAfghanistan__ArgProps = new Array<ArgPropType>();

export type PlasmicAfghanistan__OverridesType = {
  soon?: Flex__<"div">;
  afghanistanFlag?: Flex__<"svg">;
};

export interface DefaultAfghanistanProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAfghanistan__RenderFunc(props: {
  variants: PlasmicAfghanistan__VariantsArgs;
  args: PlasmicAfghanistan__ArgsType;
  overrides: PlasmicAfghanistan__OverridesType;
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
      data-plasmic-name={"soon"}
      data-plasmic-override={overrides.soon}
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
        sty.soon
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___3H7Hv
        )}
      >
        {"\u0628\u0647 \u0632\u0648\u062f\u06cc"}
      </div>
      <FlagForFlagAfghanistanSvgrepoComSvgIcon
        data-plasmic-name={"afghanistanFlag"}
        data-plasmic-override={overrides.afghanistanFlag}
        className={classNames(projectcss.all, sty.afghanistanFlag)}
        role={"img"}
      />

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__copNq
        )}
      >
        {
          "\u062e\u0631\u06cc\u062f \u0634\u0627\u0631\u0698 \u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646"
        }
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  soon: ["soon", "afghanistanFlag"],
  afghanistanFlag: ["afghanistanFlag"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  soon: "div";
  afghanistanFlag: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAfghanistan__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAfghanistan__VariantsArgs;
    args?: PlasmicAfghanistan__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAfghanistan__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAfghanistan__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAfghanistan__ArgProps,
          internalVariantPropNames: PlasmicAfghanistan__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAfghanistan__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "soon") {
    func.displayName = "PlasmicAfghanistan";
  } else {
    func.displayName = `PlasmicAfghanistan.${nodeName}`;
  }
  return func;
}

export const PlasmicAfghanistan = Object.assign(
  // Top-level PlasmicAfghanistan renders the root element
  makeNodeComponent("soon"),
  {
    // Helper components rendering sub-elements
    afghanistanFlag: makeNodeComponent("afghanistanFlag"),

    // Metadata about props expected for PlasmicAfghanistan
    internalVariantProps: PlasmicAfghanistan__VariantProps,
    internalArgProps: PlasmicAfghanistan__ArgProps
  }
);

export default PlasmicAfghanistan;
/* prettier-ignore-end */
