/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sZQMbqXz9utLNaTnNb3uss
// Component: LvAnlioG5nBo

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
import sty from "./PlasmicSubscription.module.css"; // plasmic-import: LvAnlioG5nBo/css

createPlasmicElementProxy;

export type PlasmicSubscription__VariantMembers = {
  click: "click";
};
export type PlasmicSubscription__VariantsArgs = {
  click?: SingleBooleanChoiceArg<"click">;
};
type VariantPropType = keyof PlasmicSubscription__VariantsArgs;
export const PlasmicSubscription__VariantProps = new Array<VariantPropType>(
  "click"
);

export type PlasmicSubscription__ArgsType = {
  clickitem?: boolean;
  onClickitemChange?: (val: string) => void;
  onClick?: (event: any) => void;
  title?: string;
  onTitleChange?: (val: string) => void;
  price?: number;
  onPriceChange?: (val: string) => void;
  discount?: string;
  onDiscountChange?: (val: string) => void;
  fullprice?: number;
  onFullpriceChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicSubscription__ArgsType;
export const PlasmicSubscription__ArgProps = new Array<ArgPropType>(
  "clickitem",
  "onClickitemChange",
  "onClick",
  "title",
  "onTitleChange",
  "price",
  "onPriceChange",
  "discount",
  "onDiscountChange",
  "fullprice",
  "onFullpriceChange"
);

export type PlasmicSubscription__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultSubscriptionProps {
  clickitem?: boolean;
  onClickitemChange?: (val: string) => void;
  onClick?: (event: any) => void;
  title?: string;
  onTitleChange?: (val: string) => void;
  price?: number;
  onPriceChange?: (val: string) => void;
  discount?: string;
  onDiscountChange?: (val: string) => void;
  fullprice?: number;
  onFullpriceChange?: (val: string) => void;
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

function PlasmicSubscription__RenderFunc(props: {
  variants: PlasmicSubscription__VariantsArgs;
  args: PlasmicSubscription__ArgsType;
  overrides: PlasmicSubscription__OverridesType;
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
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.clickitem;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })() ?? $props.click
      },
      {
        path: "clickitem",
        type: "writable",
        variableType: "boolean",

        valueProp: "clickitem",
        onChangeProp: "onClickitemChange"
      },
      {
        path: "title",
        type: "writable",
        variableType: "text",

        valueProp: "title",
        onChangeProp: "onTitleChange"
      },
      {
        path: "price",
        type: "writable",
        variableType: "number",

        valueProp: "price",
        onChangeProp: "onPriceChange"
      },
      {
        path: "discount",
        type: "writable",
        variableType: "text",

        valueProp: "discount",
        onChangeProp: "onDiscountChange"
      },
      {
        path: "fullprice",
        type: "writable",
        variableType: "number",

        valueProp: "fullprice",
        onChangeProp: "onFullpriceChange"
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
      onClick={args.onClick}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__nrjK,
          { [sty.textclick__nrjKXl1YX]: hasVariant($state, "click", "click") }
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $state.title;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "\u0627\u0634\u062a\u0631\u0627\u06a9";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <div
        className={classNames(projectcss.all, sty.freeBox__xpiRb, {
          [sty.freeBoxclick__xpiRbxl1YX]: hasVariant($state, "click", "click")
        })}
      >
        {(() => {
          try {
            return $state.discount ? true : false;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return true;
            }
            throw e;
          }
        })() ? (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__q0D7N,
              {
                [sty.textclick__q0D7Nxl1YX]: hasVariant(
                  $state,
                  "click",
                  "click"
                )
              }
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $state.fullprice;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "120000";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        ) : null}
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__cky8J,
            {
              [sty.textclick__cky8Jxl1YX]: hasVariant($state, "click", "click")
            }
          )}
        >
          {hasVariant($state, "click", "click") ? (
            <React.Fragment>
              {(() => {
                try {
                  return $state.price + " تومان ";
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "40000 \u062a\u0648\u0645\u0627\u0646";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {(() => {
                try {
                  return $state.price + " تومان ";
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "40000 \u062a\u0648\u0645\u0627\u0646";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          )}
        </div>
        {(() => {
          try {
            return $state.discount ? true : false;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return true;
            }
            throw e;
          }
        })() ? (
          <div
            className={classNames(projectcss.all, sty.freeBox___4TNHf, {
              [sty.freeBoxclick___4TNHfxl1YX]: hasVariant(
                $state,
                "click",
                "click"
              )
            })}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nhena,
                {
                  [sty.textclick__nhenaxl1YX]: hasVariant(
                    $state,
                    "click",
                    "click"
                  )
                }
              )}
            >
              {hasVariant($state, "click", "click") ? (
                <React.Fragment>
                  {(() => {
                    try {
                      return $state.discount;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "50%";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {(() => {
                    try {
                      return $state.discount;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "50%";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              )}
            </div>
          </div>
        ) : null}
      </div>
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
  PlasmicSubscription__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSubscription__VariantsArgs;
    args?: PlasmicSubscription__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSubscription__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSubscription__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicSubscription__ArgProps,
          internalVariantPropNames: PlasmicSubscription__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSubscription__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSubscription";
  } else {
    func.displayName = `PlasmicSubscription.${nodeName}`;
  }
  return func;
}

export const PlasmicSubscription = Object.assign(
  // Top-level PlasmicSubscription renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSubscription
    internalVariantProps: PlasmicSubscription__VariantProps,
    internalArgProps: PlasmicSubscription__ArgProps
  }
);

export default PlasmicSubscription;
/* prettier-ignore-end */
