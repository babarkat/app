// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sZQMbqXz9utLNaTnNb3uss
// Component: zrEzOXBZcn1e

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

import {
  UnnamedGlobalGroupOfVariantsValue,
  useUnnamedGlobalGroupOfVariants
} from "./PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants"; // plasmic-import: 0yrtEc_Se3kZ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sZQMbqXz9utLNaTnNb3uss/projectcss
import sty from "./PlasmicBoxselect.module.css"; // plasmic-import: zrEzOXBZcn1e/css

createPlasmicElementProxy;

export type PlasmicBoxselect__VariantMembers = {
  selected: "selected";
  disable: "disable";
};
export type PlasmicBoxselect__VariantsArgs = {
  selected?: SingleBooleanChoiceArg<"selected">;
  disable?: SingleBooleanChoiceArg<"disable">;
};
type VariantPropType = keyof PlasmicBoxselect__VariantsArgs;
export const PlasmicBoxselect__VariantProps = new Array<VariantPropType>(
  "selected",
  "disable"
);

export type PlasmicBoxselect__ArgsType = {
  children?: React.ReactNode;
  select?: boolean;
  onSelectChange?: (val: string) => void;
  onClick?: (event: any) => void;
  disable2?: boolean;
  onDisable2Change?: (val: string) => void;
};
type ArgPropType = keyof PlasmicBoxselect__ArgsType;
export const PlasmicBoxselect__ArgProps = new Array<ArgPropType>(
  "children",
  "select",
  "onSelectChange",
  "onClick",
  "disable2",
  "onDisable2Change"
);

export type PlasmicBoxselect__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultBoxselectProps {
  children?: React.ReactNode;
  select?: boolean;
  onSelectChange?: (val: string) => void;
  onClick?: (event: any) => void;
  disable2?: boolean;
  onDisable2Change?: (val: string) => void;
  selected?: SingleBooleanChoiceArg<"selected">;
  disable?: SingleBooleanChoiceArg<"disable">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBoxselect__RenderFunc(props: {
  variants: PlasmicBoxselect__VariantsArgs;
  args: PlasmicBoxselect__ArgsType;
  overrides: PlasmicBoxselect__OverridesType;
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
        path: "selected",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.select;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })() ?? $props.selected
      },
      {
        path: "select",
        type: "writable",
        variableType: "boolean",

        valueProp: "select",
        onChangeProp: "onSelectChange"
      },
      {
        path: "disable",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.disable2;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })() ?? $props.disable
      },
      {
        path: "disable2",
        type: "writable",
        variableType: "boolean",

        valueProp: "disable2",
        onChangeProp: "onDisable2Change"
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

  const globalVariants = ensureGlobalVariants({
    unnamedGlobalGroupOfVariants: useUnnamedGlobalGroupOfVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
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
        sty.root,
        {
          [sty.rootdisable]: hasVariant($state, "disable", "disable"),
          [sty.rootglobal_unnamedGlobalGroupOfVariants_unnamedVariant]:
            hasVariant(
              globalVariants,
              "unnamedGlobalGroupOfVariants",
              "unnamedVariant"
            ),
          [sty.rootselected]: hasVariant($state, "selected", "selected")
        }
      )}
      onClick={args.onClick}
    >
      {renderPlasmicSlot({
        defaultContents: null,
        value: args.children
      })}
      {(hasVariant($state, "selected", "selected") ? true : false) ? (
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img, {
            [sty.imgselected]: hasVariant($state, "selected", "selected")
          })}
          displayHeight={"15px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"15px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/babarkat/images/image4.svg",
            fullWidth: 18,
            fullHeight: 18,
            aspectRatio: 1
          }}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBoxselect__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBoxselect__VariantsArgs;
    args?: PlasmicBoxselect__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBoxselect__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBoxselect__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicBoxselect__ArgProps,
          internalVariantPropNames: PlasmicBoxselect__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBoxselect__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBoxselect";
  } else {
    func.displayName = `PlasmicBoxselect.${nodeName}`;
  }
  return func;
}

export const PlasmicBoxselect = Object.assign(
  // Top-level PlasmicBoxselect renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicBoxselect
    internalVariantProps: PlasmicBoxselect__VariantProps,
    internalArgProps: PlasmicBoxselect__ArgProps
  }
);

export default PlasmicBoxselect;
/* prettier-ignore-end */
