// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sZQMbqXz9utLNaTnNb3uss
// Component: GgHv52K5p_wn

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

import { BaseListBoxItem } from "@plasmicpkgs/react-aria/skinny/registerListBoxItem";
import { BaseText } from "@plasmicpkgs/react-aria/skinny/registerText";
import { BaseText as BaseText2 } from "@plasmicpkgs/react-aria/skinny/registerText";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sZQMbqXz9utLNaTnNb3uss/projectcss
import sty from "./PlasmicMenuItem.module.css"; // plasmic-import: GgHv52K5p_wn/css

createPlasmicElementProxy;

export type PlasmicMenuItem__VariantMembers = {};
export type PlasmicMenuItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicMenuItem__VariantsArgs;
export const PlasmicMenuItem__VariantProps = new Array<VariantPropType>();

export type PlasmicMenuItem__ArgsType = {
  value?: string;
  label?: string;
  description?: string;
};
type ArgPropType = keyof PlasmicMenuItem__ArgsType;
export const PlasmicMenuItem__ArgProps = new Array<ArgPropType>(
  "value",
  "label",
  "description"
);

export type PlasmicMenuItem__OverridesType = {
  root?: Flex__<typeof BaseListBoxItem>;
  ariaText?: Flex__<typeof BaseText>;
  ariaDescription?: Flex__<typeof BaseText2>;
};

export interface DefaultMenuItemProps {
  value?: string;
  label?: string;
  description?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMenuItem__RenderFunc(props: {
  variants: PlasmicMenuItem__VariantsArgs;
  args: PlasmicMenuItem__ArgsType;
  overrides: PlasmicMenuItem__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          value: ``,
          label: "Item 1"
        },
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

  const [$ccVariants, setDollarCcVariants] = React.useState<
    Record<string, boolean>
  >({
    hovered: false,
    pressed: false,
    focused: false,
    focusVisible: false,
    selected: false,
    disabled: false
  });
  const updateVariant = React.useCallback(
    (changes: Record<string, boolean>) => {
      setDollarCcVariants(prev => {
        if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
          return prev;
        }
        return { ...prev, ...changes };
      });
    },
    []
  );

  return (
    <BaseListBoxItem
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      id={args.value}
      plasmicUpdateVariant={updateVariant}
      textValue={args.label}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__rBcCw)}
      >
        <BaseText
          data-plasmic-name={"ariaText"}
          data-plasmic-override={overrides.ariaText}
          className={classNames("__wab_instance", sty.ariaText)}
          slot={"label"}
        >
          <div className={classNames(projectcss.all, sty.freeBox__t8ZAq)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wwLyB
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $props.label;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "Item 1";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </div>
        </BaseText>
        {(() => {
          try {
            return $props.description;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return false;
            }
            throw e;
          }
        })() ? (
          <BaseText2
            data-plasmic-name={"ariaDescription"}
            data-plasmic-override={overrides.ariaDescription}
            className={classNames("__wab_instance", sty.ariaDescription)}
            slot={"description"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zrPkq
              )}
            >
              <React.Fragment>{$props.description}</React.Fragment>
            </div>
          </BaseText2>
        ) : null}
      </Stack__>
    </BaseListBoxItem>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "ariaText", "ariaDescription"],
  ariaText: ["ariaText"],
  ariaDescription: ["ariaDescription"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof BaseListBoxItem;
  ariaText: typeof BaseText;
  ariaDescription: typeof BaseText2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenuItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenuItem__VariantsArgs;
    args?: PlasmicMenuItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenuItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMenuItem__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicMenuItem__ArgProps,
          internalVariantPropNames: PlasmicMenuItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenuItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuItem";
  } else {
    func.displayName = `PlasmicMenuItem.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuItem = Object.assign(
  // Top-level PlasmicMenuItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    ariaText: makeNodeComponent("ariaText"),
    ariaDescription: makeNodeComponent("ariaDescription"),

    // Metadata about props expected for PlasmicMenuItem
    internalVariantProps: PlasmicMenuItem__VariantProps,
    internalArgProps: PlasmicMenuItem__ArgProps
  }
);

export default PlasmicMenuItem;
/* prettier-ignore-end */
