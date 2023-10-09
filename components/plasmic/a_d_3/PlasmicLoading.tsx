// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ugFFj82Q2N1H3o8TBWt2M5
// Component: Of-Yy5_cNa

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
import sty from "../a_d_4/PlasmicLoading.module.css"; // plasmic-import: Of-Yy5_cNa/css

createPlasmicElementProxy;

export type PlasmicLoading__VariantMembers = {};
export type PlasmicLoading__VariantsArgs = {};
type VariantPropType = keyof PlasmicLoading__VariantsArgs;
export const PlasmicLoading__VariantProps = new Array<VariantPropType>();

export type PlasmicLoading__ArgsType = {};
type ArgPropType = keyof PlasmicLoading__ArgsType;
export const PlasmicLoading__ArgProps = new Array<ArgPropType>();

export type PlasmicLoading__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultLoadingProps {
  className?: string;
}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLoading__RenderFunc(props: {
  variants: PlasmicLoading__VariantsArgs;
  args: PlasmicLoading__ArgsType;
  overrides: PlasmicLoading__OverridesType;
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
        plasmic_copy_of_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        plasmic_antd_5_hostless_2_css.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"200px"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"200px"}
        loading={"lazy"}
        src={{
          src: "/plasmic/a_d_3/images/loadinggif.gif",
          fullWidth: 176,
          fullHeight: 3520,
          aspectRatio: undefined
        }}
      />
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
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoading__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoading__VariantsArgs;
    args?: PlasmicLoading__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLoading__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLoading__ArgsType,
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
          internalArgPropNames: PlasmicLoading__ArgProps,
          internalVariantPropNames: PlasmicLoading__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLoading__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoading";
  } else {
    func.displayName = `PlasmicLoading.${nodeName}`;
  }
  return func;
}

export const PlasmicLoading = Object.assign(
  // Top-level PlasmicLoading renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicLoading
    internalVariantProps: PlasmicLoading__VariantProps,
    internalArgProps: PlasmicLoading__ArgProps
  }
);

export default PlasmicLoading;
/* prettier-ignore-end */
