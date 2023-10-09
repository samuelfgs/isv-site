// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ugFFj82Q2N1H3o8TBWt2M5
// Component: w_AtHBUrSY

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../imported_dep_5/plasmic_imported_dep_5.module.css"; // plasmic-import: ugrBbUdM5cVqy9hjKxE3Z9/projectcss
import plasmic_antd_5_hostless_2_css from "../imported_dep_2/plasmic_imported_dep_2.module.css"; // plasmic-import: tRwRXcaJGaij9RuE9jQowa/projectcss
import plasmic_antd_5_hostless_css from "../imported_dep_8/plasmic_imported_dep_8.module.css"; // plasmic-import: kEs6HGEd6eEHXTXYJv3dXn/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../imported_dep_4/plasmic_imported_dep_4.module.css"; // plasmic-import: 4Vuf7Faviq4HnBF9hV4YyE/projectcss
import projectcss from "./plasmic_a_d_3.module.css"; // plasmic-import: ugFFj82Q2N1H3o8TBWt2M5/projectcss
import sty from "../a_d_4/PlasmicRequiredField.module.css"; // plasmic-import: w_AtHBUrSY/css

createPlasmicElementProxy;

export type PlasmicRequiredField__VariantMembers = {};
export type PlasmicRequiredField__VariantsArgs = {};
type VariantPropType = keyof PlasmicRequiredField__VariantsArgs;
export const PlasmicRequiredField__VariantProps = new Array<VariantPropType>();

export type PlasmicRequiredField__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicRequiredField__ArgsType;
export const PlasmicRequiredField__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicRequiredField__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultRequiredFieldProps {
  children?: React.ReactNode;
  className?: string;
}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRequiredField__RenderFunc(props: {
  variants: PlasmicRequiredField__VariantsArgs;
  args: PlasmicRequiredField__ArgsType;
  overrides: PlasmicRequiredField__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_copy_of_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        plasmic_antd_5_hostless_2_css.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"*"}
      </div>
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(
          projectcss.all,
          sty.freeBox,
          "ant-form-item-required"
        )}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Dia",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "freeBox"],
  text: ["text"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRequiredField__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRequiredField__VariantsArgs;
    args?: PlasmicRequiredField__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRequiredField__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRequiredField__ArgsType,
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
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicRequiredField__ArgProps,
          internalVariantPropNames: PlasmicRequiredField__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRequiredField__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRequiredField";
  } else {
    func.displayName = `PlasmicRequiredField.${nodeName}`;
  }
  return func;
}

export const PlasmicRequiredField = Object.assign(
  // Top-level PlasmicRequiredField renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicRequiredField
    internalVariantProps: PlasmicRequiredField__VariantProps,
    internalArgProps: PlasmicRequiredField__ArgProps
  }
);

export default PlasmicRequiredField;
/* prettier-ignore-end */
