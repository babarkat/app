// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sZQMbqXz9utLNaTnNb3uss
// Component: s31M1-QE2ye4

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
import sty from "./PlasmicSlideinModal2.module.css"; // plasmic-import: s31M1-QE2ye4/css

createPlasmicElementProxy;

export type PlasmicSlideinModal2__VariantMembers = {
  click: "click";
};
export type PlasmicSlideinModal2__VariantsArgs = {
  click?: SingleBooleanChoiceArg<"click">;
};
type VariantPropType = keyof PlasmicSlideinModal2__VariantsArgs;
export const PlasmicSlideinModal2__VariantProps = new Array<VariantPropType>(
  "click"
);

export type PlasmicSlideinModal2__ArgsType = {
  onClickChange?: (val: any) => void;
  children?: React.ReactNode;
  children2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicSlideinModal2__ArgsType;
export const PlasmicSlideinModal2__ArgProps = new Array<ArgPropType>(
  "onClickChange",
  "children",
  "children2"
);

export type PlasmicSlideinModal2__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultSlideinModal2Props {
  onClickChange?: (val: any) => void;
  children?: React.ReactNode;
  children2?: React.ReactNode;
  click?: SingleBooleanChoiceArg<"click">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSlideinModal2__RenderFunc(props: {
  variants: PlasmicSlideinModal2__VariantsArgs;
  args: PlasmicSlideinModal2__ArgsType;
  overrides: PlasmicSlideinModal2__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "click",
        type: "writable",
        variableType: "variant",

        valueProp: "click",
        onChangeProp: "onClickChange"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-hidden={hasVariant($state, "click", "click") ? "false" : "true"}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        { [sty.rootclick]: hasVariant($state, "click", "click") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__xMk5, {
          [sty.freeBoxclick__xMk5NPwMr]: hasVariant($state, "click", "click")
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <section
              className={classNames(projectcss.all, sty.section___0Ynd3)}
            />
          ),

          value: args.children
        })}
      </div>
      {(hasVariant($state, "click", "click") ? true : false) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__xx1Tz, {
            [sty.freeBoxclick__xx1TzNPwMr]: hasVariant($state, "click", "click")
          })}
        >
          {(hasVariant($state, "click", "click") ? false : true)
            ? renderPlasmicSlot({
                defaultContents: null,
                value: args.children2
              })
            : null}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSlideinModal2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSlideinModal2__VariantsArgs;
    args?: PlasmicSlideinModal2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSlideinModal2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSlideinModal2__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
          internalArgPropNames: PlasmicSlideinModal2__ArgProps,
          internalVariantPropNames: PlasmicSlideinModal2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSlideinModal2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSlideinModal2";
  } else {
    func.displayName = `PlasmicSlideinModal2.${nodeName}`;
  }
  return func;
}

export const PlasmicSlideinModal2 = Object.assign(
  // Top-level PlasmicSlideinModal2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSlideinModal2
    internalVariantProps: PlasmicSlideinModal2__VariantProps,
    internalArgProps: PlasmicSlideinModal2__ArgProps
  }
);

export default PlasmicSlideinModal2;
/* prettier-ignore-end */
