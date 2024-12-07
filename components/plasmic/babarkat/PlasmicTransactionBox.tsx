// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sZQMbqXz9utLNaTnNb3uss
// Component: 9xs0oaOWmddY

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

import { useScreenVariants as useScreenVariantsosEvNkdp6Zt6 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: OSEvNkdp6ZT6/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sZQMbqXz9utLNaTnNb3uss/projectcss
import sty from "./PlasmicTransactionBox.module.css"; // plasmic-import: 9xs0oaOWmddY/css

import SvgRepoIconCarrier2Icon from "./icons/PlasmicIcon__SvgRepoIconCarrier2"; // plasmic-import: aoPueH94YLGd/icon
import Icon14Icon from "./icons/PlasmicIcon__Icon14"; // plasmic-import: E6ROkR3UQ7U7/icon
import Icon58Icon from "./icons/PlasmicIcon__Icon58"; // plasmic-import: b6_fsTkPhz_-/icon
import SvgRepoIconCarrier3Icon from "./icons/PlasmicIcon__SvgRepoIconCarrier3"; // plasmic-import: VGmGx9vJ5BFt/icon
import SvgRepoIconCarrier4Icon from "./icons/PlasmicIcon__SvgRepoIconCarrier4"; // plasmic-import: H4kDPOF3z7xX/icon

createPlasmicElementProxy;

export type PlasmicTransactionBox__VariantMembers = {
  filed: "filed";
  unnamedGroupOfVariants:
    | "intenet"
    | "walet"
    | "sim"
    | "panel"
    | "unnamedVariant"
    | "snap";
};
export type PlasmicTransactionBox__VariantsArgs = {
  filed?: SingleBooleanChoiceArg<"filed">;
  unnamedGroupOfVariants?: SingleChoiceArg<
    "intenet" | "walet" | "sim" | "panel" | "unnamedVariant" | "snap"
  >;
};
type VariantPropType = keyof PlasmicTransactionBox__VariantsArgs;
export const PlasmicTransactionBox__VariantProps = new Array<VariantPropType>(
  "filed",
  "unnamedGroupOfVariants"
);

export type PlasmicTransactionBox__ArgsType = {
  children?: React.ReactNode;
  onClick?: (event: any) => void;
};
type ArgPropType = keyof PlasmicTransactionBox__ArgsType;
export const PlasmicTransactionBox__ArgProps = new Array<ArgPropType>(
  "children",
  "onClick"
);

export type PlasmicTransactionBox__OverridesType = {
  root?: Flex__<"div">;
  frame?: Flex__<"div">;
  freeBox?: Flex__<"div">;
};

export interface DefaultTransactionBoxProps {
  children?: React.ReactNode;
  onClick?: (event: any) => void;
  filed?: SingleBooleanChoiceArg<"filed">;
  unnamedGroupOfVariants?: SingleChoiceArg<
    "intenet" | "walet" | "sim" | "panel" | "unnamedVariant" | "snap"
  >;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTransactionBox__RenderFunc(props: {
  variants: PlasmicTransactionBox__VariantsArgs;
  args: PlasmicTransactionBox__ArgsType;
  overrides: PlasmicTransactionBox__OverridesType;
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
        path: "filed",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.filed
      },
      {
        path: "unnamedGroupOfVariants",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.unnamedGroupOfVariants
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
    screen: useScreenVariantsosEvNkdp6Zt6()
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
          [sty.rootfiled]: hasVariant($state, "filed", "filed"),
          [sty.rootfiled_unnamedGroupOfVariants_intenet]:
            hasVariant($state, "unnamedGroupOfVariants", "intenet") &&
            hasVariant($state, "filed", "filed"),
          [sty.rootfiled_unnamedGroupOfVariants_panel]:
            hasVariant($state, "filed", "filed") &&
            hasVariant($state, "unnamedGroupOfVariants", "panel"),
          [sty.rootfiled_unnamedGroupOfVariants_sim]:
            hasVariant($state, "unnamedGroupOfVariants", "sim") &&
            hasVariant($state, "filed", "filed"),
          [sty.rootfiled_unnamedGroupOfVariants_walet]:
            hasVariant($state, "unnamedGroupOfVariants", "walet") &&
            hasVariant($state, "filed", "filed"),
          [sty.rootunnamedGroupOfVariants_intenet]: hasVariant(
            $state,
            "unnamedGroupOfVariants",
            "intenet"
          ),
          [sty.rootunnamedGroupOfVariants_panel]: hasVariant(
            $state,
            "unnamedGroupOfVariants",
            "panel"
          ),
          [sty.rootunnamedGroupOfVariants_sim]: hasVariant(
            $state,
            "unnamedGroupOfVariants",
            "sim"
          ),
          [sty.rootunnamedGroupOfVariants_unnamedVariant]: hasVariant(
            $state,
            "unnamedGroupOfVariants",
            "unnamedVariant"
          ),
          [sty.rootunnamedGroupOfVariants_walet]: hasVariant(
            $state,
            "unnamedGroupOfVariants",
            "walet"
          )
        }
      )}
      onClick={args.onClick}
    >
      <div
        data-plasmic-name={"frame"}
        data-plasmic-override={overrides.frame}
        className={classNames(projectcss.all, sty.frame, {
          [sty.framefiled]: hasVariant($state, "filed", "filed"),
          [sty.frameunnamedGroupOfVariants_intenet]: hasVariant(
            $state,
            "unnamedGroupOfVariants",
            "intenet"
          ),
          [sty.frameunnamedGroupOfVariants_snap]: hasVariant(
            $state,
            "unnamedGroupOfVariants",
            "snap"
          ),
          [sty.frameunnamedGroupOfVariants_walet]: hasVariant(
            $state,
            "unnamedGroupOfVariants",
            "walet"
          )
        })}
      >
        <PlasmicIcon__
          PlasmicIconType={
            hasVariant($state, "unnamedGroupOfVariants", "snap")
              ? Icon58Icon
              : hasVariant($state, "unnamedGroupOfVariants", "panel")
              ? Icon14Icon
              : SvgRepoIconCarrier2Icon
          }
          className={classNames(projectcss.all, sty.svg__iNIji, {
            [sty.svgfiled__iNIjiL0Vgk]: hasVariant($state, "filed", "filed"),
            [sty.svgunnamedGroupOfVariants_intenet__iNIjiwRMn1]: hasVariant(
              $state,
              "unnamedGroupOfVariants",
              "intenet"
            ),
            [sty.svgunnamedGroupOfVariants_panel__iNIjiV8M9W]: hasVariant(
              $state,
              "unnamedGroupOfVariants",
              "panel"
            ),
            [sty.svgunnamedGroupOfVariants_snap__iNIjiPkiCr]: hasVariant(
              $state,
              "unnamedGroupOfVariants",
              "snap"
            ),
            [sty.svgunnamedGroupOfVariants_walet__iNIjiOAnW8]: hasVariant(
              $state,
              "unnamedGroupOfVariants",
              "walet"
            )
          })}
          role={"img"}
        />

        <SvgRepoIconCarrier3Icon
          className={classNames(projectcss.all, sty.svg__hoPkp, {
            [sty.svgfiled_unnamedGroupOfVariants_intenet__hoPkpL0VgkWRMn1]:
              hasVariant($state, "unnamedGroupOfVariants", "intenet") &&
              hasVariant($state, "filed", "filed"),
            [sty.svgunnamedGroupOfVariants_intenet__hoPkpwRMn1]: hasVariant(
              $state,
              "unnamedGroupOfVariants",
              "intenet"
            )
          })}
          role={"img"}
        />

        <SvgRepoIconCarrier4Icon
          className={classNames(projectcss.all, sty.svg__acdH9, {
            [sty.svgfiled_unnamedGroupOfVariants_walet__acdH9L0VgkOAnW8]:
              hasVariant($state, "filed", "filed") &&
              hasVariant($state, "unnamedGroupOfVariants", "walet"),
            [sty.svgunnamedGroupOfVariants_walet__acdH9OAnW8]: hasVariant(
              $state,
              "unnamedGroupOfVariants",
              "walet"
            )
          })}
          role={"img"}
        />
      </div>
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <div className={classNames(projectcss.all, sty.freeBox__rjm5W)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__h6LBa
                  )}
                >
                  {
                    "\u0634\u0627\u0631\u0698 \u0633\u06cc\u0645 \u06a9\u0627\u0631\u062a "
                  }
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zr1Im
                  )}
                >
                  {"5000000 \u062a\u0648\u0645\u0627\u0646"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__nynGc)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6HX8
                  )}
                >
                  {"1403/05/07 10:20"}
                </div>
              </div>
            </React.Fragment>
          ),
          value: args.children
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "frame", "freeBox"],
  frame: ["frame"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  frame: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTransactionBox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTransactionBox__VariantsArgs;
    args?: PlasmicTransactionBox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTransactionBox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTransactionBox__ArgsType,
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
          internalArgPropNames: PlasmicTransactionBox__ArgProps,
          internalVariantPropNames: PlasmicTransactionBox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTransactionBox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTransactionBox";
  } else {
    func.displayName = `PlasmicTransactionBox.${nodeName}`;
  }
  return func;
}

export const PlasmicTransactionBox = Object.assign(
  // Top-level PlasmicTransactionBox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    frame: makeNodeComponent("frame"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicTransactionBox
    internalVariantProps: PlasmicTransactionBox__VariantProps,
    internalArgProps: PlasmicTransactionBox__ArgProps
  }
);

export default PlasmicTransactionBox;
/* prettier-ignore-end */
