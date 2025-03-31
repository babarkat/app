/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sZQMbqXz9utLNaTnNb3uss
// Component: qWpAVLMh0kf6

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
import sty from "./PlasmicNextButton.module.css"; // plasmic-import: qWpAVLMh0kf6/css

createPlasmicElementProxy;

export type PlasmicNextButton__VariantMembers = {
  operator: "click1" | "click2" | "click3" | "click4";
  type: "click1" | "click2";
};
export type PlasmicNextButton__VariantsArgs = {
  operator?: SingleChoiceArg<"click1" | "click2" | "click3" | "click4">;
  type?: SingleChoiceArg<"click1" | "click2">;
};
type VariantPropType = keyof PlasmicNextButton__VariantsArgs;
export const PlasmicNextButton__VariantProps = new Array<VariantPropType>(
  "operator",
  "type"
);

export type PlasmicNextButton__ArgsType = {};
type ArgPropType = keyof PlasmicNextButton__ArgsType;
export const PlasmicNextButton__ArgProps = new Array<ArgPropType>();

export type PlasmicNextButton__OverridesType = {
  confirm?: Flex__<"div">;
};

export interface DefaultNextButtonProps {
  operator?: SingleChoiceArg<"click1" | "click2" | "click3" | "click4">;
  type?: SingleChoiceArg<"click1" | "click2">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNextButton__RenderFunc(props: {
  variants: PlasmicNextButton__VariantsArgs;
  args: PlasmicNextButton__ArgsType;
  overrides: PlasmicNextButton__OverridesType;
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
        path: "operator",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.operator
      },
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type
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
      data-plasmic-name={"confirm"}
      data-plasmic-override={overrides.confirm}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.confirm,
        {
          [sty.confirmoperator_click1]: hasVariant(
            $state,
            "operator",
            "click1"
          ),
          [sty.confirmoperator_click2]: hasVariant(
            $state,
            "operator",
            "click2"
          ),
          [sty.confirmoperator_click4]: hasVariant(
            $state,
            "operator",
            "click4"
          ),
          [sty.confirmtype_click1]: hasVariant($state, "type", "click1")
        }
      )}
      onClick={async event => {
        const $steps = {};

        $steps["goToChargeStep2"] = true
          ? (() => {
              const actionArgs = {};
              return (({ destination }) => {
                if (
                  typeof destination === "string" &&
                  destination.startsWith("#")
                ) {
                  document
                    .getElementById(destination.substr(1))
                    .scrollIntoView({ behavior: "smooth" });
                } else {
                  __nextRouter?.push(destination);
                }
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["goToChargeStep2"] != null &&
          typeof $steps["goToChargeStep2"] === "object" &&
          typeof $steps["goToChargeStep2"].then === "function"
        ) {
          $steps["goToChargeStep2"] = await $steps["goToChargeStep2"];
        }
      }}
    >
      {"\u0627\u062f\u0627\u0645\u0647"}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  confirm: ["confirm"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  confirm: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNextButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNextButton__VariantsArgs;
    args?: PlasmicNextButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNextButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNextButton__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicNextButton__ArgProps,
          internalVariantPropNames: PlasmicNextButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNextButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "confirm") {
    func.displayName = "PlasmicNextButton";
  } else {
    func.displayName = `PlasmicNextButton.${nodeName}`;
  }
  return func;
}

export const PlasmicNextButton = Object.assign(
  // Top-level PlasmicNextButton renders the root element
  makeNodeComponent("confirm"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicNextButton
    internalVariantProps: PlasmicNextButton__VariantProps,
    internalArgProps: PlasmicNextButton__ArgProps
  }
);

export default PlasmicNextButton;
/* prettier-ignore-end */
